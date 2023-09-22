<<<<<<< HEAD
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

=======
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


export default function UserNavbar(){
    const navigate = useNavigate()
    const user = useSelector(state => {
        return state.user.currentUser
    })
>>>>>>> 7e7972b308f102c725d5872854532318ca263391
    return(
        <>
            <div className="row">
                <div
                    style={{
                        background: 'red',
                        width: '100%',
                        height: '80px'
                    }}
                >
                    <div className="row"
                         style={{
                             margin: '0 auto',
                             width:'100%'
                        }}
                    >
                        <div className="col-2"
                             style={{
                                 height: '80px',
                                 width: '20%',
                                 fontSize: '50px',
                                 color: 'white'
                             }}>
                            <p style={{
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '25px',
                                fontSize:'50px'}}
                               onClick={()=>{
                                   navigate('/homeUser')
                               }}>
                                Cooky</p>
                        </div>
                        <div className="col-3"
                             style={{
                                height: '50px',
                                marginTop: '15px',
                                display: 'flex',
                                background: 'white',
                                width:'100%',
                                borderRadius: '20px'
                            }}>
                            <div className="row"
                                 style={{
                                    display:'flex',
                                    margin: '15px',
                                    color: 'red',
                                    marginTop:'15px',
                                    fontSize:'20px'
                                }}>
                                <i className="fa-solid fa-magnifying-glass" />
                            </div>
                            <div className="row"
                                 style={{
                                     color: 'red',
                                     width: '100%'
                            }}>
                                <input style={{
                                    height: '40px',
                                    width: '100%',
                                    background: 'none',
                                    outline: 'none',
                                    display: 'flex',
                                    marginTop:'5px'
                                }}
                                       placeholder="Tìm kiếm sản phẩm" />
                            </div>
                        </div>
                        <div className="col-4"
                             style={{
                                 height: '50px',
                                 display: 'flex',
                                 width:'20%',
                                 justifyContent: 'right',
                                 backgroundColor: 'red'
                        }}>
                            <div className="row"
                                 style={{
                                     marginTop: '20px'
                            }}>
                                <button className="col-3"
                                        style={{
                                            height: '50px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontSize:'20px',
                                            backgroundColor: 'red',
                                            border:'50px red'
                                }}>
                                    <i className="fa-solid fa-cart-shopping"
                                       style={{color: 'white'}} />
                                </button>
                            </div>
                        </div>
                        <div className="col-2"
                             style={{
                                 height: '40px',
                                 marginTop: '15px',
                                 width:'100%'
                        }}>
                            {user != null ?
                                <button style={{
                                    width: '100%',
                                    height: '50px',
                                    borderRadius: '20px',
                                    color: 'red',
                                    background: 'white',
                                    border: '1px solid white',
                                    fontSize:'15px',
                                    display:'flex'
                                }}>
                                    <div style={{
                                        width: '60%',
                                        marginLeft: '-50px'
                                    }}>
                                        <i className="fa-regular fa-user"
                                           style={{
                                               color: 'red',
                                               fontSize: '25px'
                                        }}>
                                        </i>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        width: '100%',
                                        height: '30px',
                                        marginTop: '0px',
                                        justifyContent:'center'
                                    }}>
                                        {user.email.split("@")[0]}
                                    </div>
                                </button>
                                :
                                <Link to={'/'}>
                                    <button style={{
                                        width: '100%',
                                        height: '50px',
                                        borderRadius: '20px',
                                        color: 'red',
                                        background: 'white',
                                        border: '1px solid white',
                                        fontSize:'15px'
                                    }}>
                                        Đăng nhập
                                    </button>
                                </Link>
                            }
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