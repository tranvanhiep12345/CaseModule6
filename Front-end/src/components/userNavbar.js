import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ListFoodUser from "../page/user/listFood";


export default function UserNavbar(){
    const [showDetails , setShowDetails] = useState()
    const show = (()=>{
        setShowDetails(true)
    })
    const close = (() =>{
        setShowDetails(false)
    })
    const navigate = useNavigate(false)

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
                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="body col-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <div className="row-1 col-10" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" style={{ width: '100%' }}>
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="https://image.cooky.vn/abn/s1065x333/e0365a95-ae59-4828-b7c7-d2d545a989c9.png" className="d-block w-100" alt="..." style={{ width: '100%', height: '336px' }} />
                                            <div className="carousel-caption d-none d-md-block">
                                                {/* <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p> */}
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://image.cooky.vn/abn/s1065x333/bd42a9d7-f38c-4f2b-8e69-b651ca3b4790.png" className="d-block w-100" alt="..." style={{ width: '100%', height: '336px' }} />
                                            <div className="carousel-caption d-none d-md-block">
                                                {/* <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p> */}
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://image.cooky.vn/abn/s1065x333/e0365a95-ae59-4828-b7c7-d2d545a989c9.png" className="d-block w-100" alt="..." style={{ width: '100%', height: '336px' }} />
                                            <div className="carousel-caption d-none d-md-block">
                                                {/* <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ justifyContent: 'center', marginTop: '20px' }}>
                        <div className="col-10" style={{ justifyContent: 'center', height: '250px' }}>
                            <div className="row" style={{ margin: '10px', fontWeight: 'bold' }}>Bạn Muốn Ăn Gì</div>
                            {showDetails ? (
                                <div>
                                    <ListFoodUser setShowDetails={setShowDetails} close={close}></ListFoodUser>
                                </div>
                            ) : (
                                <div onClick={show}
                                    className="row" style={{ display: 'flex', justifyContent: 'space-between', margin: '10px',marginTop:'50px' }}>
                                    <div className="col-2" style={{ height: '180px',justifyContent:'center',display:'flex',flexDirection:'column' }}>
                                        <img src="https://icons.iconarchive.com/icons/iconarchive/fat-sugar-food/128/Drink-Coke-icon.png" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}

                                        />
                                        <p style={{ fontFamily: 'Candara', marginTop: '10px', textAlign: 'center', fontWeight: 'bold' }}>Đồ Uống</p>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}