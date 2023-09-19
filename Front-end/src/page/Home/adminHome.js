import NavbarMerchant from "../../components/merchantNavbar";
import {Outlet} from "react-router-dom";
import NavbarAdmin from "../../components/adminNavbar";

export default function AdminHome(){
    return(
        <>
            <div className="container-home" style={{background: 'white'}}>
                <NavbarAdmin/>
                <Outlet></Outlet>
            </div>
        </>
    )
}