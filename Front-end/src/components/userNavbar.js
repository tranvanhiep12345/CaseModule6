import {useNavigate} from "react-router-dom";


export default function UserNavbar(){
    const navigate = useNavigate()
    return(
        <>
            <div className="row">
                <div style={{background: 'red', width: '100%', height: '100px'}}>
                    <div className="row" style={{margin: '0 auto', width:'100%'}}>
                        <div className="col-2" style={{height: '80px',width: '20%', fontSize: '50px', color: 'white'}}>
                            <p style={{fontSize:'50px'}} onClick={()=>{
                                navigate('/homeUser')
                            }}>Cooky</p>
                        </div>
                        <div className="col-4" style={{height: '50px', marginTop: '20px', display: 'flex', background: 'white', width:'20%'}}>
                            <div className="row" style={{margin: '15px', color: '#606060'}}><i style={{marginTop:'5px'}} className="fa-solid fa-magnifying-glass" />
                            </div>
                            <div className="row">
                                <input style={{height: '45px', width: '100%', background: 'none', border: 'none', outline: 'none', marginTop:'5px'}} placeholder="Tìm kiếm sản phẩm" />
                            </div>
                        </div>
                        <div className="col-2" style={{height: '50px', display: 'flex', marginTop: '5px',width:'20%'}}>
                            <div className="row" style={{marginTop: '20px'}}>
                                <div className="col-3" style={{height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><i className="fa-solid fa-heart" style={{color: 'white'}} /></div>
                                <div className="col-3" style={{height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><i className="fa-solid fa-cart-shopping" style={{color: 'white'}} /></div>
                                <div className="col-3" style={{height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><i className="fa-solid fa-phone-volume" style={{color: 'white'}} /></div>
                                <div className="col-3" style={{height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><i className="fa-brands fa-facebook-messenger" style={{color: 'white'}} /></div></div>
                        </div>
                        <div className="col-2" style={{height: '40px', marginTop: '20px', width:'20%'}}>
                            <button style={{width: '100%', height: '50px', borderRadius: '999px', margin: '1px', color: 'white', background: 'red', border: '1px solid white'}}>
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}