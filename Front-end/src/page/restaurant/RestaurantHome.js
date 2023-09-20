import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFood} from "../../service/foodsService";
import {getRestaurant} from "../../service/restaurantsService";
import {Link} from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddRestaurant from "./addRestaurant";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    margin: '0 auto'
};
export default function RestaurantHome(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <div style={{margin: "0 auto", width:'50%'}}>
                <div style={{padding:'300px', width:'100%'}}>
                    <Button onClick={handleOpen}>Thêm cửa hàng của bạn</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div style={{width:'50%', margin:'0 auto', padding:'40px', marginTop:'100px'}}>
                            <AddRestaurant></AddRestaurant>
                        </div>

                    </Modal>
                </div>
            </div>
        </>
    )
}