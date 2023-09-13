import {Outlet} from "react-router-dom";
import Navbar from "../../components/navbar";

export default function Home(){
    return(
        <>
            <div className="container-home" style={{background: 'white'}}>
                <Navbar/>
                <Outlet></Outlet>
            </div>

        </>
    )
}
