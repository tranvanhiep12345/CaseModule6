import '../../css/updateFoodCss.css'
import {Field, Form, Formik} from "formik";
import customAxios from "../../service/api";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../fireBase";
import {toast} from "react-toastify";

export default function UpdateFood() {
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


    const [food, setFood] = useState({})
    const [img, setImg] = useState("")
    useEffect(() => {
        customAxios.get(`/foods/${id}`).then((res) => {
                setImg(res.data[0])
                setFood(res.data[0])
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
                <h1 className="log1">Sửa món ăn mới</h1>
                <Formik initialValues={food}
                        enableReinitialize={true}
                        onSubmit={(values,) => {

                            if (values.imgUrl === '') {
                                values.imgUrl = urlFile
                            } else if (urlFile === "") {
                                values.imgUrl = img
                            } else if (urlFile != img) {

                                values.imgUrl = urlFile
                            }
                            customAxios.put(`/foods/${id}`, values).then(() => {
                                values.imgURL = urlFile
                                toast.success("Update success")
                                navigate("/homeMerchant")
                            })
                            // handleUpdate(values);
                        }}>
                    <Form style={{height: '500px', width: '100%'}}>
                        <div className='form-add'>
                            <div className='add-left'>
                                <div className="wrap-input100 validate-input">
                                    <Field className="input100" type="text" name="name" placeholder="Tên món ăn"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa-light fa-pot-food" aria-hidden="true"></i>
                            </span>
                                </div>



                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Image</label>
                                    <div>
                                        <img src={food.imgUrl} style={{width:'60%',height:'60%'}}/>
                                    </div>

                                    <input type="file" className={"form-control"} name={"imgURL"} placeholder={"tradeType"}
                                           onChange={(event) => {
                                               setImageUpload(event.target.files[0])
                                           }}
                                    />
                                </div>
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

                                {urlFile && !isLoading}



                                <div className="wrap-input100 validate-input">
                                    <Field className="input100" type="text" name="sale" placeholder="Sale"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa-light fa-universal-access" aria-hidden="true"></i>
                            </span>
                                </div>




                                <div className="wrap-input100 validate-input">
                                    <Field className="input100" type="text" name="status" placeholder="Status"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
                            </span>
                                </div>

                                <div className="wrap-input100 validate-input">
                                    <Field className="input100" type="text" name="note" placeholder="Note"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa-sharp fa-light fa-notes" aria-hidden="true"></i>
                            </span>
                                </div>

                            </div>

                            <div className='add-right'>
                                <div className="wrap-input1000 validate-input">
                                    <Field className="input100" type="number" name="prepTime"
                                           placeholder="Thời gian chuẩn bị"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa-light fa-clock" aria-hidden="true"></i>
                            </span>
                                </div>

                                <div className="wrap-input1000 validate-input">
                                    <Field className="input100" type="number" name="serviceFee"
                                           placeholder="Phí dịch vụ"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                                </div>

                                <div className="wrap-input1000 validate-input">
                                    <Field className="input100" type="number" name="views" placeholder="Lượt xem"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa-light fa-eye" aria-hidden="true"></i>
                            </span>
                                </div>

                                <div className="wrap-input1000 validate-input">
                                    <Field className="input100" type="text" name="description" placeholder="Nội dung"/>
                                    <span className="focus-input100"></span>
                                    <span className="form-message2"></span>
                                    <span className="symbol-input100">
                            <i className="fa-light fa-subtitles" aria-hidden="true"></i>
                            </span>
                                </div>


                                <div className="wrap-input1000 validate-input">
                                    <Field className="input100" type="number" name="price" placeholder="Giá"/>
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