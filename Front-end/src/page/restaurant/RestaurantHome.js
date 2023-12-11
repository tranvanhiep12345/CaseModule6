import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddRestaurant from "./addRestaurant";

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
                            <AddRestaurant/>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    )
}
