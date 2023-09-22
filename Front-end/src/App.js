import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddFood from "./page/merchant/addFood";
import ListFood from "./page/merchant/listFood";
import UpdateFood from "./page/merchant/updateFood";
import MerchantHome from "./page/user/merchantHome";
import UpdateRestaurant from "./page/restaurant/updateRestaurant";
import {useSelector} from "react-redux";
import RestaurantHome from "./page/restaurant/RestaurantHome";
import {useState} from "react";
import AddRestaurant from "./page/restaurant/addRestaurant";
import Home from "./page/user/Home";


function App() {
    const [ user, allUser  ] = useState(null);
    return (
        <>
            <div>
                <Routes>

                    <Route path={''} element={<Home/>}>

                    </Route>

                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'homeMerchant'} element={<MerchantHome/>}>
                        <Route path={''} element={<ListFood/>}/>
                        <Route path={'add_restaurant'} element={<AddRestaurant/>}/>
                        <Route path={'update_restaurant/:id'} element={<UpdateRestaurant/>}/>

                        <Route path={'add_food'} element={<AddFood/>}/>
                        <Route path={'update_food/:id'} element={<UpdateFood/>}/>




                    </Route>



                </Routes>
            </div>
            <ToastContainer theme={"colored"} position={"top-center"} bodyStyle={{borderRadius:'10px'}} />
        </>
    );
}

export default App;
