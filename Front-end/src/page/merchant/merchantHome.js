import {Outlet} from "react-router-dom";
import NavbarMerchant from "../../components/merchantNavbar";

export default function MerchantHome(){
    return(
        <>
            <div className="container-home" style={{background: 'white', width:'100%', height:'100vh'}}>
                <NavbarMerchant/>
                <Outlet></Outlet>
            </div>

        </>
    )
}