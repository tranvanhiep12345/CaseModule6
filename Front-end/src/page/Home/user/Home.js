import {Outlet} from "react-router-dom";
import NavbarUser from "../../../component/navbar-user";

export default function HomeUser() {
    return(
        <>
            <div>
                <div>
                    <NavbarUser></NavbarUser>
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