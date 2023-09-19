import './merchantNavbarCss.css'
import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import MerchantOption from "./option/merchantOption";
import {animated, useSpring} from "@react-spring/web";
import PropTypes from "prop-types";
import {useState} from "react";
import {getFoodByName} from "../service/foodsService";
import {getRestaurant} from "../service/restaurantsService";
import {useDispatch} from "react-redux";

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
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function NavbarMerchant(){
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


    return(
        <>
            <div className="container-merchant-navbar">

                <div className="logo-merchant-navbar">
                    <div className="img-logo-merchant">
                        <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-store-icon-in-line-style-png-image_5053711.jpg"/>
                    </div>

                    <div className='text-logo'>
                        <p className='text-write'>Cooky</p>
                    </div>

                </div>
                <div className="mid-merchant-navbar">

                    <div className="container-find-food" >
                        <div className='find-food'>
                            <div style={{width:'70%', height:'20px', background:'white',display:"flex", borderRadius:'10px'}}>

                                    <i className="fa-solid fa-magnifying-glass"/>

                                    <input style={{width: '100%', height: '50px', background: 'white', border: 'none', outline: 'none'}} placeholder="Từ khóa, tên,địa chỉ, doanh thu" onChange={(e) => setSearchKeyword(e.target.value)} />
                            </div>

                        </div>

                    </div>

                    <div  style={{width:'90px'}}>
                        <button onClick={() => handleFindByName(searchKeyword)} style={{width: '100%'}}>Tìm kiếm</button>
                    </div>


                </div>
                <div className='right-navbar-merchant'>
                    <button>
                        <div>
                            <Button sx={{color: 'white'}} onClick={handleOpen}>Open option</Button>
                            <Modal
                                aria-labelledby="spring-modal-title"
                                aria-describedby="spring-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        TransitionComponent: Fade,
                                    },
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <MerchantOption></MerchantOption>
                                    </Box>
                                </Fade>
                            </Modal>
                        </div>

                    </button>

                </div>
            </div>
        </>
    )
}