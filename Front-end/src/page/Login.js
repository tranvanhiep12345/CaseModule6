import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {register, login} from "../service/usersService";
import "./style.css";
import {useFormik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";
import * as React from 'react';


const validateRegister = Yup.object({
    name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    phone: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
        .required('Required')
        .min(6, 'requires a minimum of 6 characters'),
    confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    role: Yup.string().required('Required')
})

const validateLogin = Yup.object({
    email: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required')
        .min(6, 'Requires a minimum of 6 characters')
})



export default function Login() {

    const formikRegister = useFormik({
        initialValues:{
            name:'',
            phone:'',
            email:'',
            password:'',
            confirmPassword:'',
            role:''
        }, validationSchema: validateRegister,
        onSubmit:(values)=>{
            handleRegister(values)
        }
    })

    const formikLogin = useFormik({
        initialValues:{
            email:'',
            password:''
        },validationSchema:validateLogin,
        onSubmit:(values) =>{
            console.log(values)
            handleLogin(values)
        }
    })

    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };

    const handleRegister =  (values) =>{
        dispatch(register(values)).then((a)=>{
            console.log(a.payload.data)
            if (a.payload.data === 'Username already exists'){
                toast.error('Account already exists')
            } else {
                toast.success('Register Success')
                navigate('/')
            }
        })
    }
    const handleLogin = (values) => {
        dispatch(login(values)).then((response) => {
            console.log(values)
            console.log(response,2342342342)
            if (response.payload.data === "User is not exist"){
                alert('tk k ton tai')
                navigate('/')
            } else if (response.payload.data === 'Password is wrong') {
                alert('sai ten dang nhap hoac mat khau')
                navigate('/')
            }else{
                if(response.payload.data.role === 'admin'){
                    navigate('/homeAdmin')
                }else if (response.payload.data.role === 'merchant')  {
                    navigate('/homeMerchant')
                } else {
                    navigate('/homeUser')
                }
            }
        })
        dispatch(login(values))
            .then((response) => {
                console.log(response.payload.data.role)
                if (response.payload.data.role === 'merchant' ) {
                    navigate('/merchant')
                } else if(response.payload.data.role === 'admin'){
                    toast.success('Login success')
                    navigate("/homeAdmin");
                } else {
                    navigate('/home')
                }

            })
            .catch((error) => {
                console.log(222)
                console.log(error);
            });
    };
    return (
        <>

            <div className='body-login'>
                <div className={`container-login ${isSignUpActive ? "right-panel-active" : ""}`}>
                    <div className="form-container sign-up-container">
                        <form onSubmit={formikRegister.handleSubmit}>
                            <h1 className="log1">Đăng ký</h1>
                            <div className="wrap-input100 validate-input">
                                <input value={formikRegister.values.name} onChange={formikRegister.handleChange} className="input100" type="text" name="name" placeholder="Tên người dùng"/>

                                <span className="focus-input100"></span>
                                <span className="symbol-input100"><i className="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            {formikRegister.errors.name && formikRegister.touched.name ? (
                                <div className="text-danger">{formikRegister.errors.name}</div>
                            ) : null}
                            <div className="wrap-input100 validate-input"
                                 data-validate="Valid email is required: ex@abc.xyz">
                                <input value={formikRegister.values.email} onChange={formikRegister.handleChange} className="input100" type="email" name="email" placeholder="Email"
                                       id="email"/>
                                <span className="focus-input100"></span>
                                <span className="form-message"></span>
                                <span className="symbol-input100"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                            </div>
                            {formikRegister.errors.email && formikRegister.touched.email ? (
                                <div className="text-danger">{formikRegister.errors.email}</div>
                            ) : null}

                            <div className="wrap-input100 validate-input">
                                <input value={formikRegister.values.phone} onChange={formikRegister.handleChange} className="input100" type="text" name="phone" placeholder="Số điện thoại"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100"><i className="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            {formikRegister.errors.phone && formikRegister.touched.phone? (
                                <div className="text-danger">{formikRegister.errors.phone}</div>
                            ) : null}

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input value={formikRegister.values.password} onChange={formikRegister.handleChange} className="input100" type="password" name="password" placeholder="Mật khẩu"
                                       id="password"/>
                                <span className="focus-input100"></span>
                                <span className="form-message"></span>
                                <span className="symbol-input100"><i className="fa fa-lock" aria-hidden="true"></i></span>
                            </div>
                            {formikRegister.errors.password && formikRegister.touched.password ? (
                                <div className="text-danger">{formikRegister.errors.password}</div>
                            ) : null}

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input
                                    value={formikRegister.values.confirmPassword}
                                    onChange={formikRegister.handleChange}
                                    className="input100"
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Nhập lại mật khẩu"
                                    id="password-confirm"
                                />
                                <span className="focus-input100"></span>
                                <span className="form-message"></span>
                                <span className="symbol-input100">
                                  <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                            {formikRegister.errors.confirmPassword && formikRegister.touched.confirmPassword ? (
                                <div className="text-danger">{formikRegister.errors.confirmPassword}</div>
                            ) : null}



                            <div className="wrap-input100 validate-input">
                                <select value={formikRegister.values.role} onChange={formikRegister.handleChange} name="role" className="input100">
                                    <option value="">None</option>
                                    <option value="merchant">Merchant</option>
                                    <option value="user">User</option>
                                </select>

                                <span className="focus-input100"></span>
                                <span className="form-message"></span>
                                <span className="symbol-input100"><i className="fa-light fa-check" aria-hidden="true"></i></span>
                            </div>
                            {formikRegister.errors.role && formikRegister.touched.role ? (
                                <div className="text-danger">{formikRegister.errors.role}</div>
                            ) : null}

                            <button type="submit" className="log">
                                Đăng ký
                            </button>

                        </form>
                    </div>


                    <div className="form-container sign-in-container">
                        <form onSubmit={formikLogin.handleSubmit}>
                            <h1 className="log1">Đăng nhập</h1>
                            <div className="wrap-input100 validate-input"
                                 data-validate="Valid email is required: ex@abc.xyz">
                                <input value={formikLogin.values.email} onChange={formikLogin.handleChange} className="input100" type="email" name="email" placeholder="Email"
                                       id="emailLog"/>

                                <span className="focus-input100"></span>
                                <span className="form-message2"></span>
                                <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
                            </div>
                            {formikLogin.errors.email && formikLogin.touched.email? (
                                <div className="text-danger">{formikLogin.errors.email}</div>
                            ) : null}

                            <div className="wrap-input100 validate-input" data-validate="Password is required">

                                <input value={formikLogin.values.password} onChange={formikLogin.handleChange} className="input100" type="password" name="password" placeholder="Mật khẩu"
                                       id="passwordLog"/>
                                <span className="focus-input100"></span>
                                <span className="form-message2"></span>
                                <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
                            </div>
                            {formikLogin.errors.password && formikLogin.touched.password? (
                                <div className="text-danger">{formikLogin.errors.password}</div>
                            ) : null}
                            <button type="submit" className="log">
                                Đăng nhập
                            </button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <div className="logo">Cooky</div>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn" onClick={handleSignInClick}>
                                    Đăng nhập
                                </button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <div className="logo">Cooky</div>
                                <p>Enter your personal details and start your journey with us</p>
                                <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                                    Đăng ký
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}