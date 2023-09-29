import {Outlet} from "react-router-dom";
import NavbarMerchant from "../../components/merchantNavbar";

export default function MerchantHome(){
    return(
        <>
            <div className="container-home" style={{ width:'100%'}}>
                <NavbarMerchant/>
                <Outlet></Outlet>
            </div>

        </>
    )
}