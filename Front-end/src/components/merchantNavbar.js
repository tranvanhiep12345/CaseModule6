import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {current} from "@reduxjs/toolkit";
import {useEffect, useState} from "react";
import {getRestaurant} from "../service/restaurantsService";
import {getFood} from "../service/foodsService";

export default function NavbarMerchant(){

    const [showAddRestaurantButton, setShowAddRestaurantButton] = useState(true);
    useEffect(() => {
        // Kiểm tra xem đã có cửa hàng hay chưa
        setShowAddRestaurantButton(restaurants.length === 0);
    }, []);



    const dispatch = useDispatch()
    const navigate = useNavigate(false)
    const user = useSelector(state => {
        return state.user.currentUser

    })
    const restaurants = useSelector(state => {
        return state.restaurant.restaurant
    })

import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function NavbarMerchant(){
    const navigate = useNavigate(false)
    const user = useSelector(state => {
        return state.user.currentUser
    })
    const logOut = () => {
        localStorage.clear()
        navigate('/login')
    }

    useEffect(() => {
        dispatch(getRestaurant())
    }, [])
    return(
        <>
            <div className="row">
                <div
                    style={{
                        background: 'red',
                        width: '100%',
                        height: '80px'
                    }}
                >
                    <div className="row"
                         style={{
                             margin: '0 auto',
                             width:'100%'
                         }}
                    >
                        <div className="col-2"
                             style={{
                                 height: '80px',
                                 width: '20%',
                                 fontSize: '50px',
                                 color: 'white'
                             }}>
                            <p style={{
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '25px',
                                fontSize:'50px'}}
                               onClick={()=>{
                                   navigate('')
                               }}>
                                Cooky</p>
                        </div>



                        {user != null ?
                            <div className="col-3"
                                 style={{
                                     height: '50px',
                                     marginTop: '15px',
                                     display: 'flex',
                                     background: 'white',
                                     width:'100%',
                                     borderRadius: '20px'
                                 }}>
                                <div className="row"
                                     style={{
                                         display:'flex',
                                         margin: '15px',
                                         color: 'red',
                                         marginTop:'15px',
                                         fontSize:'20px'
                                     }}>
                                    <i className="fa-solid fa-magnifying-glass" />
                                </div>
                                <div className="row"
                                     style={{
                                         color: 'red',
                                         width: '100%'
                                     }}>
                                    <input style={{
                                        height: '40px',
                                        width: '100%',
                                        background: 'none',
                                        outline: 'none',
                                        display: 'flex',
                                        marginTop:'5px'
                                    }}
                                           placeholder="Tìm kiếm sản phẩm" />
                                </div>
                            </div>
                            :
                            <Link to={'/homeMerchant/add_restaurant'}>
                                <button style={{
                                    width: '100%',
                                    height: '50px',
                                    borderRadius: '20px',
                                    color: 'red',
                                    background: 'white',
                                    border: '1px solid white',
                                    fontSize:'15px'
                                }}>
                                    Thêm cửa hàng
                                </button>
                            </Link>
                        }




                        <div className="col-4" style={{
                            height: '40px',
                            marginTop: '15px',
                            width:'100%'
                        }}>
                            {showAddRestaurantButton && (
                                <Link to={"/homeMerchant/add_restaurant"}>
                                    <button
                                        style={{
                                            width: "100%",
                                            height: "50px",
                                            borderRadius: "20px",
                                            color: "red",
                                            background: "white",
                                            border: "1px solid white",
                                            fontSize: "15px",
                                        }}
                                    >
                                        Thêm cửa hàng
                                    </button>
                                </Link>
                            )}
                        </div>




                        <div className="col-2"
                             style={{
                                 height: '40px',
                                 marginTop: '15px',
                                 width:'100%'
                             }}>

                            {user != null ?
                                <button style={{
                                    width: '100%',
                                    height: '50px',
                                    borderRadius: '20px',
                                    color: 'red',
                                    background: 'white',
                                    border: '1px solid white',
                                    fontSize:'15px',
                                    display:'flex'
                                }}
                                        onClick={() => {
                                            logOut()
                                        }}>
                                    <div style={{
                                        width: '60%',
                                        marginLeft: '-50px'
                                    }}>
                                        <i className="fa-regular fa-user"
                                           style={{
                                               color: 'red',
                                               fontSize: '25px'
                                           }}>
                                        </i>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        width: '100%',
                                        height: '30px',
                                        marginTop: '0px',
                                        justifyContent:'center'
                                    }}>
                                        {user.payload.email.split("@")[0]}
                                    </div>
                                </button>
                                :
                                <Link to={'/login'}>
                                    <button style={{
                                        width: '100%',
                                        height: '50px',
                                        borderRadius: '20px',
                                        color: 'red',
                                        background: 'white',
                                        border: '1px solid white',
                                        fontSize:'15px'
                                    }}>
                                        Đăng nhập
                                    </button>
                                </Link>
                            }
                        </div>

                            <button style={{
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '10px',
                                fontSize:'25px',
                                background: 'red',
                                border: '10px red'
                            }}
                                    onClick={()=>{
                                        navigate('')
                                    }}>
                                <img src="https://www.cooky.vn/React/Images/Logos/logo.svg"
                                     alt="#"
                                     style={{
                                         width:"110px"
                                     }}
                                />
                            </button>
                        </div>
                        <div className="col-3"
                             style={{
                                 height: '50px',
                                 marginTop: '15px',
                                 display: 'flex',
                                 background: 'white',
                                 width:'100%',
                                 borderRadius: '20px'
                             }}>
                            <div className="row"
                                 style={{
                                     display:'flex',
                                     margin: '15px',
                                     color: 'red',
                                     marginTop:'15px',
                                     fontSize:'20px'
                                 }}>
                                <i className="fa-solid fa-magnifying-glass" />
                            </div>
                            <div className="row"
                                 style={{
                                     color: 'red',
                                     width: '100%'
                                 }}>
                                <input style={{
                                    height: '40px',
                                    width: '100%',
                                    background: 'none',
                                    outline: 'none',
                                    display: 'flex',
                                    marginTop:'5px'
                                }}
                                       placeholder="Tìm kiếm sản phẩm" />
                            </div>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-2"
                             style={{
                                 height: '40px',
                                 marginTop: '15px',
                                 width:'100%'
                             }}>
                            {user != null ?
                                <button style={{
                                    width: '100%',
                                    height: '50px',
                                    borderRadius: '20px',
                                    color: 'red',
                                    background: 'white',
                                    border: '1px solid white',
                                    fontSize:'15px',
                                    display:'flex'
                                }}
                                        onClick={() => {
                                            logOut()
                                        }}>
                                    <div style={{
                                        width: '60%',
                                        marginLeft: '-50px'
                                    }}>
                                        <i className="fa-regular fa-user"
                                           style={{
                                               color: 'red',
                                               fontSize: '25px'
                                           }}>
                                        </i>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        width: '100%',
                                        height: '30px',
                                        marginTop: '0px',
                                        justifyContent:'center'
                                    }}>
                                        {user?.payload.email.split("@")[0]}
                                    </div>
                                </button>
                                :
                                <Link to={'/login'}>
                                    <button style={{
                                        width: '100%',
                                        height: '50px',
                                        borderRadius: '20px',
                                        color: 'red',
                                        background: 'white',
                                        border: '1px solid white',
                                        fontSize:'15px'
                                    }}>
                                        Đăng nhập
                                    </button>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
        </>
    )
}
}
