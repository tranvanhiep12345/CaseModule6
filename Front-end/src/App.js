import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UserHome from "./page/user/userHome";
import AddFood from "./page/merchant/addFood";
import ListFood from "./page/merchant/listFood";
import UpdateFood from "./page/merchant/updateFood";
import MerchantHome from "./page/merchant/merchantHome";
import UpdateRestaurant from "./page/restaurant/updateRestaurant";
import Admin from "./page/admin/admin";
import HomeAdmin from "./page/admin/homeAdmin";
import {Menu} from "@mui/material";
import {useSelector} from "react-redux";
import RestaurantHome from "./page/restaurant/RestaurantHome";
import {useState} from "react";
import AddRestaurant from "./page/restaurant/addRestaurant";
import ListFoodUser from "./page/user/listFood";
import DetailProduct from "./page/user/detailProduct";
import Carousel from "./page/user/carousel";

function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path={'login'} element={<Login/>}></Route>
                    <Route path={'homeMerchant'} element={<MerchantHome/>}>
                        <Route path={''} element={<ListFood/>}/>
                        <Route path={'add_food'} element={<AddFood/>}/>
                        <Route path={'update_food/:id'} element={<UpdateFood/>}/>
                        <Route path={'add_restaurant'} element={<AddRestaurant/>}/>
                        <Route path={'update_restaurant/:id'} element={<UpdateRestaurant/>}/>
                    </Route>
                    <Route path={'homeAdmin'} element={<Admin/>}>
                        <Route path={''} element={<HomeAdmin/>}></Route>
                    </Route>



                    <Route path={''} element={<UserHome/>}>
                        <Route path={''} element={<Carousel/>}></Route>
                        <Route path={'list'} element={<ListFoodUser/>}></Route>
                        <Route path={'detailProduct'} element={<DetailProduct/>}></Route>
                    </Route>
                </Routes>
            </div>
            <ToastContainer theme={"colored"} position={"top-center"} bodyStyle={{borderRadius:'10px'}} />
        </>
    );
}
export default App;
