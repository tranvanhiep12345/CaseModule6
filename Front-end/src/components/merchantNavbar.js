import './merchantNavbarCss.css'
import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import MerchantOption from "./option/merchantOption";
import {animated, useSpring} from "@react-spring/web";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {getFoodByName} from "../service/foodsService";
import {getRestaurant} from "../service/restaurantsService";
import {useDispatch} from "react-redux";
import {Field, Formik, useFormik} from "formik";
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


export default function NavbarMerchant(){
    const formikFind = useFormik({
        initialValues:{
            search:''
        }, onSubmit:(values)=>{
            handleFindByName(values)
        }
    })

    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [searchKeyword, setSearchKeyword] = useState("");
    const handleFindByName = (d)=>{
        dispatch(getFoodByName(d)).then((res)=>{
            getRestaurant(res.payload.data)
            console.log('find',res.payload.data)
        })
    }

    return(
        <>
            <div className="container-merchant-navbar">

                <div className="logo-merchant-navbar">
                    <div className='text-logo'>
                        <p className='text-write'>Cooky</p>
                    </div>

                </div>
                <div className="mid-merchant-navbar">

                    <div className="container-find-food" >
                        <div className='find-food'>
                            <div style={{width:'40%', height:'20px', background:'white',display:"flex", borderRadius:'10px', margin:'5px'}}>
                                <input name='search' value={formikFind.values.search} onChange={formikFind.handleChange}  style={{width: '100%', height: '50px', background: 'white', border: 'none', outline: 'none',borderRadius:'10px'}} placeholder="   Từ khóa, tên,địa chỉ, doanh thu" />
                            </div>
                        </div>
                    </div>

                    <div  style={{width:'100px'}}>
                        <button type='submit' style={{width: '100%'}}>Tìm kiếm</button>
                    </div>


                </div>
                <div className='right-navbar-merchant'>


                </div>
            </div>
        </>
    )
}