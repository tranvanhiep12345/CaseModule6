import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./page/Home/Home";
import AddFood from "./page/merchant/addFood";
import ListFood from "./page/merchant/listFood";
import UpdateFood from "./page/merchant/updateFood";
import MerchantHome from "./page/Home/merchantHome";


function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path={''} element={<Login/>}></Route>
                    <Route path={'merchant'} element={<MerchantHome/>}>
                        <Route path={''} element={<ListFood/>}/>
                        <Route path={'add_food'} element={<AddFood/>}/>
                        <Route path={'update_food/:id'} element={<UpdateFood/>}/>
                    </Route>

                    <Route path={'home'} element={<Home/>}>

                    </Route>
                </Routes>
            </div>
            <ToastContainer theme={"colored"} position={"top-center"} />
        </>
    );
}

export default App;
