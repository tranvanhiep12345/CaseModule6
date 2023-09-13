import NavbarUser from "../../../component/navbar-user";
import {Outlet} from "react-router-dom";
import NavbarAdmin from "../../../component/navbar-admin";

export default function HomeAdmin(){
    return (
        <>
            <div>
                <div>
                    <NavbarAdmin></NavbarAdmin>
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