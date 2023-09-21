import {Outlet} from "react-router-dom";
import UserNavbar from "../../components/userNavbar";

export default function Home(){
    return(
        <>
            <div className="container-home" style={{background: 'white'}}>
                <UserNavbar/>
                <Outlet></Outlet>
            </div>

        </>
    )
}
