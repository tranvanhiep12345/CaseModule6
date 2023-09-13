import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register, login } from "../service/usersService";
// import "./style.css"
import {Field, Form, Formik} from "formik"
import styled from "styled-components";

export default function Login() {



    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };

    const handleRegister = (values) => {
        dispatch(register(values)).then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                    if(response.payload.data.role === 'merchant'){
                        navigate('/homeAdmin')
                    }else if (response.payload.data.role === 'merchant')  {
                        navigate('/homeMerchant')
                    } else {
                        navigate('/homeUser')
                    }
            }
            })

    };
    return (
        <Container>
            <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`}>
                <div className="form-container sign-up-container">
                    <Formik initialValues={{name:'',email:'',phone:'',password:'',role:''}} onSubmit={(values)=>{
                        handleRegister(values)
                    }}>
                    <Form>
                        <h1 className="log1">Đăng ký</h1>
                        <div className="wrap-input100 validate-input">
                            <Field className="input100" type="text" name="name" placeholder="Tên người dùng" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <Field className="input100" type="email" name="email" placeholder="Email" id="email"/>
                            <span className="focus-input100"></span>
                            <span className="form-message"></span>
                            <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
                        </div>
                        <div className="wrap-input100 validate-input">
                            <Field className="input100" type="text" name="phone" placeholder="Số điện thoại" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <Field className="input100" type="password" name="password" placeholder="Mật khẩu" id="password"/>
                            <span className="focus-input100"></span>
                            <span className="form-message"></span>
                            <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input
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
                        <div className="wrap-input100 validate-input">
                            <Field
                                as="select"
                                className="input100"
                                name="role"
                                id="role"
                            >
                                <option value="">Chọn vai trò</option>
                                <option value="merchant">Merchant</option>
                                <option value="user">User</option>
                            </Field>
                        </div>
                        <button type="submit" className="log" onClick={handleSignInClick}>
                            Đăng ký
                        </button>
                    </Form>
                    </Formik>
                </div>
                <div className="form-container sign-in-container">
                    <Formik initialValues={{email:'',password:''}} onSubmit={(values)=>{
                        handleLogin(values)
                    }}>
                        <Form>
                        <h1 className="log1">Đăng nhập</h1>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <Field className="input100" type="email" name="email" placeholder="Email" id="emailLog"/>
                            <span className="focus-input100"></span>
                            <span className="form-message2"></span>
                            <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <Field className="input100" type="password" name="password" placeholder="Mật khẩu" id="passwordLog"/>
                            <span className="focus-input100"></span>
                            <span className="form-message2"></span>
                            <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
                        </div>
                        <button type="submit" className="log">
                            Đăng nhập
                        </button>
                        </Form>
                    </Formik>
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
        </Container>
    );
}

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

  * {
    box-sizing: border-box;
  }

  body {
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    margin: -20px 0 50px;
  }

  h1 {
    font-weight: bold;
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  button {
    border-radius: 20px;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }

  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button.ghost {
    background-color: #f0f0f0;
    border-color: #FFFFFF;
    cursor: pointer;
    color: #FF4B2B;
  }
  button.log{
    background-color: red;
    border-color: #FFFFFF;
    cursor: pointer;
    color: white
  }

  form {
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }

  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 580px;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }

  @keyframes show {
    0%, 49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%, 100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    background: red;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #FFFFFF;
    position: relative;
    justify-content: center;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .wrap-input100 {
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 10px
  }

  .input100 {
    font-family: Poppins-Medium, cursive;
    font-size: 15px;
    line-height: 1.5;
    color: #666;
    display: block;
    width: 100%;
    background: #e6e6e6;
    height: 50px;
    border-radius: 25px;
    padding: 0 30px 0 68px
  }

  .input100:focus+.focus-input100 {
    -webkit-animation: anim-shadow .5s ease-in-out forwards;
    animation: anim-shadow .5s ease-in-out forwards
  }

  @-webkit-keyframes anim-shadow {
    to {
      box-shadow: 0 0 70px 25px;
      opacity: 0
    }
  }

  @keyframes anim-shadow {
    to {
      box-shadow: 0 0 70px 25px;
      opacity: 0
    }
  }

  .symbol-input100 {
    font-size: 15px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    position: absolute;
    border-radius: 25px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: 35px;
    pointer-events: none;
    color: #666;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    -moz-transition: all .4s;
    transition: all .4s
  }

  .input100:focus+.focus-input100+.symbol-input100 {
    color: #FF4262;
    padding-left: 28px
  }



  .log{
    color: red;
  }

  .log1{
    color: red;
    font-family: 'Dancing Script', cursive;
  }

  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-left {
    transform: translateX(-20%);
  }

  .container.right-panel-active .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }

  .container.right-panel-active .overlay-right {
    transform: translateX(20%);
  }

  .logo {
    width: 200px;
    height: 120px;
    font-size: 50px;
    color: white;
    font-family: 'Lucida Handwriting', cursive;
  }
    
`
