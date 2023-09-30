import {Outlet} from "react-router-dom";
import UserNavbar from "../../components/userNavbar";
export default function UserHome(){
    return(
        <>
            <div className="container-home" style={{background: 'white'}}>
                <UserNavbar/>
                <Outlet></Outlet>
            </div>

        </>
    )
}
