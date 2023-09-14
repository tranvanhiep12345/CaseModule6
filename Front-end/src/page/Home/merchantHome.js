
import {Outlet} from "react-router-dom";
import NavbarMerchant from "../../components/merchantNavbar";

export default function MerchantHome(){
    return(
        <>
            <div className="container-home" style={{background: 'white'}}>
                <NavbarMerchant/>
                <Outlet></Outlet>
            </div>

        </>
    )
}