import '../css/merchantNavbarCss.css'
import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import MerchantOption from "./option/merchantOption";
import {animated, useSpring} from "@react-spring/web";
import PropTypes from "prop-types";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getFoodByName} from "../service/foodsService";
import {getRestaurant} from "../service/restaurantsService";
import {useDispatch, useSelector} from "react-redux";
import {Field, Formik} from "formik";
import customAxios from "../service/api";
import AddRestaurant from "../page/restaurant/addRestaurant";

const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
export default function NavbarMerchant(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [searchKeyword, setSearchKeyword] = useState("");
    const handleFindByName = (d)=>{
        dispatch(getFoodByName(d)).then((res)=>{
            getRestaurant(res.payload.data)
            console.log(res.payload.data)
        })
    }
    const user = useSelector(state => {
        return state.user.currentUser
    })
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
                        <div className="col-4"
                             style={{
                                 height: '50px',
                                 display: 'flex',
                                 width:'20%',
                                 justifyContent: 'right',
                                 backgroundColor: 'red'
                             }}>
                            {/*<div className="row"*/}
                            {/*     style={{*/}
                            {/*         marginTop: '20px'*/}
                            {/*     }}>*/}
                            {/*    <button className="col-3"*/}
                            {/*            style={{*/}
                            {/*                height: '50px',*/}
                            {/*                display: 'flex',*/}
                            {/*                justifyContent: 'center',*/}
                            {/*                alignItems: 'center',*/}
                            {/*                fontSize:'20px',*/}
                            {/*                backgroundColor: 'red',*/}
                            {/*                border:'50px red'*/}
                            {/*            }}>*/}
                            {/*        <i className="fa-solid fa-cart-shopping"*/}
                            {/*           style={{color: 'white'}} />*/}
                            {/*    </button>*/}
                            {/*</div>*/}
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
                                        {user.email.split("@")[0]}
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
            </div>
        </>
    )
}