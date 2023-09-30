import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function NavbarAdmin(){
    const navigate = useNavigate(false)
    const user = useSelector(state => {
        return state.user.currentUser
    })
    const logOut = () => {
        localStorage.clear()
        navigate('/login')
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
                        <div className="col-7"
                             style={{
                                 height: '50px',
                                 marginTop: '15px',
                                 display: 'flex',
                                 width:'100%',
                                 borderRadius: '20px'
                             }}>
                            <p style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '25px',
                                color: 'white',
                                marginTop:'15px',
                                fontSize:'45px'}}
                            >
                                Quản Lý Cửa Hàng
                            </p>
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