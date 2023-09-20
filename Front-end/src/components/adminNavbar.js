import {useNavigate} from "react-router-dom";

export default function NavbarAdmin(){
    const navigate = useNavigate()
    return(
        <>
            <div className="container col-12" style={{ background: 'white' }}>
                <div className="row">
                    <div style={{ background: 'red', width: '100%', height: '100px' }}>
                        <div className="row" style={{ margin: '0px' }}>
                            <div className="col-2" style={{ height: '80px', marginTop: '10px', fontSize: '50px', color: 'white' }}>
                                <p style={{fontSize:'50px'}} onClick={()=>{
                                    navigate('/homeAdmin')
                                }}>Cooky</p>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-2"></div>
                                    <div className="col-10" style={{ color: 'white', marginTop: '30px', fontSize: '30px' }}>
                                        Hệ thống quản lý
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}