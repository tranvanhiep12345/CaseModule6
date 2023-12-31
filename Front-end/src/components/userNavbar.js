import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function UserNavbar(){
    const navigate = useNavigate(false)
    const user = useSelector(state => {
        return state.user.currentUser
    })
    const logOut = () => {
        localStorage.clear()
        window.location.reload()
    }
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
                            <button style={{
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '10px',
                                fontSize:'25px',
                                background: 'red',
                                border: '10px red'
                            }}
                               onClick={()=>{
                                   navigate('')
                               }}>
                                <img src="https://www.cooky.vn/React/Images/Logos/logo.svg"
                                     alt="#"
                                     style={{
                                         width:"110px"
                                     }}
                                />
                            </button>
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
                        <div className={"col-2"}
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
                                }}
                                    onClick={() => {
                                        logOut()
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
                                        {user?.payload.email.split("@")[0]}
                                    </div>
                                </button>
                                :
                                <Link to={'/login'}>
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
                </div>
            </div>
        </>
    )
}