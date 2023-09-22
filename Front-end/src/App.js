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

function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path={''} element={<UserHome/>}>
                        <Route path={''} element={<ListFoodUser/>}></Route>
                    </Route>
                    <Route path={'login'} element={<Login/>}></Route>
                    <Route path={'homeMerchant'} element={<MerchantHome/>}>
                        <Route path={''} element={<ListFood/>}/>
                        <Route path={'add_food'} element={<AddFood/>}/>
                        <Route path={'update_food/:id'} element={<UpdateFood/>}/>
                        <Route path={'update_restaurant/:id'} element={<UpdateRestaurant/>}/>
                    </Route>
                    <Route path={'homeAdmin'} element={<Admin/>}>
                        <Route path={''} element={<HomeAdmin/>}></Route>
                    </Route>
                    <Route path={'/details'} element={<MerchantHome/>}></Route>
                </Routes>
            </div>
            <ToastContainer theme={"colored"} position={"top-center"} />
        </>
    );
}
export default App;
