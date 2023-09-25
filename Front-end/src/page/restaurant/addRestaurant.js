import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage"
import {useEffect, useState} from "react";
import {storage} from "../../fireBase";
import {addRestaurant, getRestaurant} from "../../service/restaurantsService";
import {toast} from "react-toastify";

export default function AddRestaurant() {
    let a = JSON.parse(localStorage.getItem('user'))
    console.log(a)
    const [imageUpload, setImageUpload] = useState(null);
    const [percent, setPercent] = useState(0);
    const [urlFile, setUrlFile] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const uploadFile = () => {
        if (imageUpload == null) return;
        const storageRef = ref(storage, `/file/${imageUpload.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageUpload);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const  percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent)
            },
            (err) => console.error(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setUrlFile(url);
                    setIsLoading(false)
                })
            }
        )
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAdd = (values) =>{
        values.imgUrl = urlFile
        let data ={...values,user : {id : a.idUser}}
        dispatch(addRestaurant(data)).then((res) => {
            dispatch(getRestaurant())
            toast.success('them thanh cong')
            navigate("/homeMerchant")
        })
    }
    useEffect(() => {
        if (imageUpload) {
            setIsLoading(true);
            uploadFile()
        }
    }, [imageUpload]);
    return(
        <>
            <div className='container-add'>
                <Formik initialValues={{
                    name:'', phone:'', email:'',address:'', imgUrl:'',startTime:'',endTime:''
                }} onSubmit={(values)=>handleAdd(values)}>
                    <Form style={{height:'500px', width:'100%'}}>
                        <div className='form-add'>
                            <div className='add-left'>
                                <div className="wrap-input100 validate-input">
                                    <Field className="input100" type="text" name="name" placeholder="Tên cửa hàng"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                                        <i className ="fa-light fa-pot-food" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div className="wrap-input100 validate-input">
                                    <input
                                        className="input100"
                                        id="multiple_files" type="file" multiple
                                        name='imgUrl' placeholder='Ảnh món ăn'
                                        onChange={(event) => {
                                            setImageUpload(event.target.files[0])
                                        }}
                                    />
                                    {isLoading && (
                                        <div className="progress">
                                            <div className="progress-bar"
                                                 role="progressbar"
                                                 style={{width: `${percent}%`}}
                                                 aria-valuenow={percent}
                                                 aria-valuemin={0}
                                                 aria-valuemax={100}>
                                                {percent}%
                                            </div>
                                        </div>
                                    )}
                                    {urlFile && !isLoading }
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                                        <i className="fa-light fa-image" aria-hidden='true'></i>
                                    </span>
                                </div>
                                <div className="wrap-input100 validate-input" >
                                    <Field className="input100" type="text" name="phone" placeholder="Số điện thoại liên lạc"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                                        <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="wrap-input100 validate-input" >
                                    <Field className="input100" type="text" name="email" placeholder="email"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                                        <i className="fa-light fa-universal-access" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="wrap-input100 validate-input" >
                                    <Field className="input100" type="text" name="address" placeholder="Address"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                                        <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <div className='add-right'>
                                <div className="wrap-input1000 validate-input" >
                                    <Field className="input100" type="time" name="startTime" placeholder="Giờ mở cửa" id="prepTimeLog"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                                        <i className="fa-light fa-clock" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="wrap-input1000 validate-input" >
                                    <Field className="input100" type="time" name="endTime" placeholder="Giờ đóng cửa" id="serviceFeeLog"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <button type='submit' className='btn-save'>Save</button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}