import NavbarMerchant from "../../components/merchantNavbar";
import {Outlet} from "react-router-dom";
import NavbarAdmin from "../../components/adminNavbar";
import Footer from "../../components/footer/Footer";

export default function Admin(){
    return(
        <>
            <div className="container-home" style={{background: 'white'}}>
                <NavbarAdmin/>
                <Outlet></Outlet>
            </div>
        </>
    )
}