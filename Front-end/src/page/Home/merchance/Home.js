import NavbarUser from "../../../component/navbar-user";
import {Outlet} from "react-router-dom";
import NavbarMerchance from "../../../component/navbar-merchance";

export default function HomeMer() {
    return(
        <>
            <div>
                <div>
                    <NavbarMerchance></NavbarMerchance>
                </div>
            </div>
            <div className="flex mt-16">
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}