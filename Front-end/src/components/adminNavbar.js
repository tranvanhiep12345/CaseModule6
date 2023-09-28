import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function NavbarAdmin(){
    const navigate = useNavigate(false)
    const user = useSelector(state => {
<<<<<<< HEAD
        console.log(state.user.currentUser)
=======
>>>>>>> na
        return state.user.currentUser
    })
    const logOut = () => {
        localStorage.clear()
<<<<<<< HEAD
        navigate('/login')
=======
        window.location.reload()
>>>>>>> na
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
                            <p style={{
                                display: 'flex',
                                justifyContent: 'center',
                                margin: '25px',
                                fontSize:'50px'}}
                               onClick={()=>{
                                   navigate('')
                               }}>
                                Cooky</p>
                        </div>
                        <div className="col-7"
                             style={{
                                 height: '50px',
                                 marginTop: '15px',
                                 display: 'flex',
                                 width:'100%',
                                 borderRadius: '20px'
                             }}>
<<<<<<< HEAD
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
=======

>>>>>>> na
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
                                        {user.payload.email.split("@")[0]}
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
