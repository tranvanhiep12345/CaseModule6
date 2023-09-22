import {Outlet} from "react-router-dom";
import NavbarAdmin from "../../components/adminNavbar";

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