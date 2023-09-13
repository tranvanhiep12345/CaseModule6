import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home/admin/Home";
import HomeMer from "./page/Home/merchance/Home";
import NavbarMerchance from "./component/navbar-merchance";
import NavbarUser from "./component/navbar-user";
import NavbarAdmin from "./component/navbar-admin";
import {useSelector} from "react-redux";

function App() {
    const user = useSelector(state => {
        console.log(state,123)
        return state
    })
    return (
        <>
            {/*<div className={'container-fluid'}>*/}
                <Routes>
                    <Route path={''} element={<Login />}></Route>
                    <Route path={'homeUser'} element={<NavbarUser />}></Route>
                    <Route path={'homeAdmin'} element={<NavbarAdmin />}></Route>
                    <Route path={'homeMerchance'} element={<NavbarMerchance />}></Route>
                </Routes>
            {/*</div>*/}
        </>
    );
}

export default App;
