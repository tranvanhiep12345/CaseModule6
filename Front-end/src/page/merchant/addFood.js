import '../../css/addFoodCss.css'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage"
import {useEffect, useState} from "react";
import {addFood, getFood} from "../../service/foodsService";
import {storage} from "../../fireBase";
import customAxios from "../../service/api";
import {toast} from "react-toastify";

export default function AddFood() {
    let a = JSON.parse(localStorage.getItem('user'))
    const [restaurants , setRestaurants] = useState([])
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
    customAxios.get(`http://localhost:8080/user/${a.idUser}`).then((res)=>{
        setRestaurants(res.data[0].restaurant[0].id)
<<<<<<< HEAD
        console.log(res.data[0].restaurant[0].id)
=======
>>>>>>> na
    })

    const restaurant = useSelector(state => {
        return state.restaurant.restaurant
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            name:'',
            imgUrl:'',
            sale: '',
            status:'',
            note: '',
            prepTime:'',
            serviceFee:'',
            description:'',
            price:''
        },
        onSubmit:(values)=>{
            handleAdd(values)
        }
    })
    const handleAdd = (values) =>{
        values.imgUrl = urlFile
        let data ={...values, restaurant : { id : restaurants}}
        dispatch(addFood(data)).then((res) => {
            toast.success('Them mon an thanh cong')
            dispatch(getFood())
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
                <h1 className="log1">Thêm món ăn mới</h1>
                <form style={{height:'500px', width:'100%'}} onSubmit={formik.handleSubmit}>
                    <div className='form-add'>
                        <div className='add-left'>
                            <div className="wrap-input100 validate-input">
                                <input value={formik.values.name} onChange={formik.handleChange} className="input100" type="text" name="name" placeholder="Tên món ăn" id="name"/>
                                <span className="focus-input100"></span>
                                <span className="form-message2"></span>
                                <span className="symbol-input100">
                            <i className ="fa-light fa-pot-food" aria-hidden="true"></i>
                            </span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                <input
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="multiple_files" type="file" multiple
                                    name={"image"}
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
                                {urlFile && !isLoading}
                                <span className="focus-input100"></span>
                                <span className="form-message2"></span>
                                <span className="symbol-input100">
                            <i className="fa-light fa-image" aria-hidden='true'></i>
                            </span>
                            </div>

                            <div className="wrap-input100 validate-input" >
                                <input value={formik.values.sale} onChange={formik.handleChange} className="input100" type="text" name="sale" placeholder="Sale" id="saleLog"/>
                                <span className="focus-input100"></span>
                                <span className="form-message2"></span>
                                <span className="symbol-input100">
                            <i className="fa-light fa-universal-access" aria-hidden="true"></i>
                            </span>
                            </div>

                            <div className="wrap-input100 validate-input" >
                                <input value={formik.values.status} onChange={formik.handleChange} className="input100" type="text" name="status" placeholder="Status" id="statusLog"/>
                                <span className="focus-input100"></span>
                                <span className="form-message2"></span>
                                <span className="symbol-input100">
                            <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
                            </span>
                            </div>

                            <div className="wrap-input100 validate-input" >
                                <input value={formik.values.note} onChange={formik.handleChange} className="input100" type="text" name="note" placeholder="Note" id="noteLog"/>
                                <span className="focus-input100"></span>
                                <span className="form-message2"></span>
                                <span className="symbol-input100">
                            <i className="fa-sharp fa-light fa-notes" aria-hidden="true"></i>
                            </span>
                            </div>

                        </div>

                        <div className='add-right'>
                            <div className="wrap-input1000 validate-input" >
                                <input value={formik.values.prepTime}  onChange={formik.handleChange} className="input100" type="text" name="prepTime" placeholder="Thời gian chuẩn bị" id="prepTimeLog"/>
                                <span className="focus-input100"></span>
                                <span className="form-message2"></span>
                                <span className="symbol-input100">
                            <i className="fa-light fa-clock" aria-hidden="true"></i>
                            </span>
                            </div>

                            <div className="wrap-input1000 validate-input" >
                                <input value={formik.values.serviceFee} onChange={formik.handleChange} className="input100" type="text" name="serviceFee" placeholder="Phí dịch vụ" id="serviceFeeLog"/>
                                <span className="focus-input100"></span>
                                <span className="form-message2"></span>
                                <span className="symbol-input100">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                            </div>


                            <div className="wrap-input1000 validate-input" >
                                <input value={formik.values.description} onChange={formik.handleChange} className="input100" type="text" name="description" placeholder="Nội dung" id="emailLog"/>
                                <span className="focus-input100"></span>
                                <span className="form-message2"></span>
                                <span className="symbol-input100">
                            <i className="fa-light fa-subtitles" aria-hidden="true"></i>
                            </span>
                            </div>

                            <div  className="wrap-input1000 validate-input" >
                                <input value={formik.values.price} onChange={formik.handleChange}  className="input100" type="text" name="price" placeholder="Giá" id="priceLog"/>
                                <span className="focus-input100"></span>
                                <span className="form-message2"></span>
                                <span className="symbol-input100">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                            </div>

                            <button type='submit' className='btn-save'>Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
