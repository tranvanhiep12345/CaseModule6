
import {Field, Form, Formik} from "formik";
import customAxios from "../../service/api";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../fireBase";
import {getRestaurant} from "../../service/restaurantsService";
import {toast} from "react-toastify";

export default function UpdateRestaurant() {
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
                const percent = Math.round(
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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams()


    const [restaurant, setRestaurant] = useState({})
    const [img, setImg] = useState("")
    useEffect(() => {
        customAxios.get(`/rests/${id}`).then((res) => {
                setRestaurant(res.data[0])
                setImg(res.data[0])
            console.log('Sửa cửa hàng',res)
            }
        )
    }, [])

    useEffect(() => {
        if (imageUpload) {
            setIsLoading(true);
            uploadFile()
        }
    }, [imageUpload]);


    return (
        <>
            <div className='container-add'>
                <h1 className="log1">Sửa thông tin cửa hàng</h1>
                <Formik initialValues={restaurant}
                        enableReinitialize={true}
                        onSubmit={(values,) => {

                            if (values.imgUrl === '') {
                                values.imgUrl = urlFile
                            } else if (urlFile === "") {
                                values.imgUrl = img
                            } else if (urlFile != img) {

                                values.imgUrl = urlFile
                            }
                            customAxios.put(`/rests/${id}`, values).then(() => {
                                console.log('thong tin sua',values)
                                values.image = urlFile
                                toast.success("Update success")
                                // navigate("/homeMerchant")
                            })
                            // handleUpdate(values);
                        }}>
                    <Form style={{height: '500px', width: '100%'}}>
                        <div className='form-add'>
                            <div className='add-left'>
                                <div className="wrap-input100 validate-input">
                                    <Field className="input100" type="text" name="name" placeholder="Tên cửa hàng"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa-light fa-pot-food" aria-hidden="true"></i>
                            </span>
                                </div>

                                <div className="wrap-input100 validate-input">
                                    <Field className="input100" type="file" name="imgUrl" placeholder="Hình ảnh"/>
                                    <div>
                                        <img src={restaurant.imgUrl} style={{height:'60%', width:'60%'}}/>
                                    </div>
                                    <span className="symbol-input100">
                            <i className="fa-light fa-pot-food" aria-hidden="true"></i>
                            </span>
                                </div>

                                <div className="wrap-input100 validate-input">
                                    <Field className="input100" type="text" name="phone" placeholder="Số diện thoại liên hệ"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa-light fa-universal-access" aria-hidden="true"></i>
                            </span>
                                </div>

                                <div className="wrap-input100 validate-input">
                                    <Field className="input100" type="text" name="email" placeholder="Email"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
                            </span>
                                </div>

                                <div className="wrap-input100 validate-input">
                                    <Field className="input100" type="text" name="address" placeholder="Địa chỉ"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa-sharp fa-light fa-notes" aria-hidden="true"></i>
                            </span>
                                </div>

                            </div>

                            <div className='add-right'>
                                <div className="wrap-input1000 validate-input">
                                    <Field className="input100" type="text" name="type"
                                           placeholder="Phân loại"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa-light fa-clock" aria-hidden="true"></i>
                            </span>
                                </div>

                                <div className="wrap-input1000 validate-input">
                                    <Field className="input100" type="time" name="startTime"
                                           placeholder="Giờ mở cửa"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                                </div>

                                <div className="wrap-input1000 validate-input">
                                    <Field className="input100" type="time" name="endTime" placeholder="Giờ đóng cửa"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa-light fa-eye" aria-hidden="true"></i>
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