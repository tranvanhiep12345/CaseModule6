import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {deleteFood, getFood, getFoodByName, getFoodId} from "../../service/foodsService";
import {useEffect, useState} from "react";
import '../../css/listFoodCss.css'
import {getRestaurant} from "../../service/restaurantsService";
import {toast} from "react-toastify";
import {useFormik} from "formik";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddFood from "./addFood";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};



export default function ListFoodMerchant() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {id} = useParams()

    const restaurants = useSelector((state) => {
        return state.restaurant.restaurant
    })


    const currentUser = useSelector((state) => {
        return state.user.currentUser
    })

    const foods = useSelector((state) => {
        return state.food.food
    })


    useEffect(() => {
        dispatch(getRestaurant())
        dispatch(getFood())
    }, [])


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this foods?")
        console.log(id)
        if (confirmDelete) {
            dispatch(deleteFood(id)).then(() => {
                toast.warning('Delete success')
                dispatch(getFood())
                // navigate("/homeMerchant")
            })
        }
    }
    const formikSearch = useFormik({
        initialValues:{
            search:''
        }, onSubmit:(values)=>{
            handleSearch(values)
        }
    })
    const handleSearch = (values)=>{
        dispatch(values).then((res)=>{
            console.log(res)
            getFoodByName(res)
        })
    }

    return (
        <>
            {restaurants.map((restaurant, key) => {
                if (restaurant.user.email === currentUser.payload.email) {

                    return (
                        <>
                                <div className='description-restaurant'>
                                    <div className='image-restaurant'>
                                        <img src={restaurant?.imgUrl} alt=''/>
                                    </div>
                                    <div className="information-restaurant">
                                        <div className='restaurant-name'>{restaurant?.name}

                                        </div>
                                        <div style={{fontWeight: "normal", fontSize:'13px'}}>{restaurant?.address}</div>
                                        <div style={{marginTop: '5px'}}>Liên hệ: {restaurant?.phone}</div>
                                        <div style={{marginTop: '5px'}}>Email: {restaurant?.email}</div>
                                        <div style={{marginTop: '5px'}}>Doanh Thu:</div>
                                        <div style={{marginTop: '10px', fontSize: '15px', color: '#acacac'}}>
                                            <div>Mở cửa: {restaurant?.startTime}</div>
                                            <div>Đóng cửa: {restaurant?.endTime}</div>
                                        </div>
                                        <div style={{display:'flex'}}>

                                                <div>

                                                    <Button onClick={handleOpen} sx={{color:'black', textTransform:'none', gap:'3px'}}>
                                                        <i className="fa-light fa-plus"></i>
                                                        Thêm món ăn mới</Button>
                                                    <Modal
                                                        open={open}
                                                        onClose={handleClose}
                                                        aria-labelledby="modal-modal-title"
                                                        aria-describedby="modal-modal-description"
                                                    >
                                                        <Box sx={style}>
                                                           <AddFood/>
                                                        </Box>
                                                    </Modal>
                                                </div>
                                        </div>
                                        <div>
                                            <Link to={`/homeMerchant/update_restaurant/${restaurant.id}`}>
                                                <i className="fa-regular fa-pen-to-square"></i>
                                                Sửa thông tin cửa hàng
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            <div style={{width:'50%', borderBottom:'0.5px solid', margin:'0 auto'}}>

                            </div>

                            <div className="title-list">
                                <div className="title-small">
                                    <p style={{fontSize: '30px'}}>Những đồ ăn hiện có</p>
                                </div>
                            </div>

                            <div style={{display: 'flex', width: '100%', height: '330px'}}>
                                {foods && foods.map((food, key) => {
                                    if (food.restaurant !== undefined)
                                        if (food.restaurant.id === restaurant.id) {
                                            console.log('f', food)
                                            return (
                                                <div className="card-home">
                                                    <div className="row-1 col-10">
                                                        <div className="col-2" style={{height: '200px'}}>

                                                            <div className="card" style={{width: '200px'}}>
                                                                <div className='food-img'>
                                                                    <img src={food.imgUrl} className="card-img-top"
                                                                         alt="..."/>
                                                                </div>
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{food.name}</h5>
                                                                    <div className="bottom-card" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between'
                                                                    }}>
                                                                        <div className="bottom-card-detail">
                                                                            <p style={{
                                                                                marginBottom: '1px',
                                                                                fontSize: '12px',
                                                                                color: '#acacac'
                                                                            }}>{food.note}</p>
                                                                            <p style={{fontWeight: 700}}>{food.price}</p>
                                                                        </div>
                                                                        <div style={{
                                                                            marginTop: '30px',
                                                                            display: 'flex',
                                                                            gap: '15px'
                                                                        }}>
                                                                            <i className="fa-solid fa-circle-plus"
                                                                               style={{
                                                                                   display: 'flex',
                                                                                   alignItems: 'center',
                                                                                   color: 'red'
                                                                               }}/>
                                                                            <Link
                                                                                to={`/homeMerchant/update_food/${food.id}`}><i
                                                                                className="fa-solid fa-pen-to-square"
                                                                                style={{
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    color: 'red',
                                                                                    margin: '34px 0'
                                                                                }}/></Link>
                                                                            <i onClick={() => {
                                                                                handleDelete(food.id)
                                                                            }} className="fa-solid fa-trash" style={{
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                color: 'red'
                                                                            }}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <>

                                                </>
                                            )
                                        }
                                })}
                            </div>
                        </>
                    )
                } else {
                    return (
                        <>
                        </>
                    )
                }
            })}
        </>
    )
}