import ListFoodUser from "./listFood";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getFood, getFoodByType} from "../../service/foodsService";

export default function Carousel(){
    const [showDetails, setShowDetails] = useState()
    const dispatch = useDispatch();
    const show = (() => {
        setShowDetails(true)
    })
    const close = (() => {
        setShowDetails(false)
    })
    const navigate = useNavigate()
    const listFood = useSelector(state => {
        return state.food.food
    });
    useEffect(()=>{
        dispatch(getFood())
    },[])
    const handleToList = (type) => {
        navigate(`list/${type}`)
    }
    return(
        <>
            <div>
                <div className="row" style={{marginTop: '20px'}}>
                    <div className="body col-12" style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                        <div className="row-1 col-10" style={{display: 'flex', justifyContent: 'center'}}>
                            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel"
                                 style={{width: '100%'}}>
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0"
                                        className="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src="https://image.cooky.vn/abn/s1065x333/e0365a95-ae59-4828-b7c7-d2d545a989c9.png"
                                            className="d-block w-100" alt="..."
                                            style={{width: '100%', height: '336px'}}/>
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src="https://image.cooky.vn/abn/s1065x333/bd42a9d7-f38c-4f2b-8e69-b651ca3b4790.png"
                                            className="d-block w-100" alt="..."
                                            style={{width: '100%', height: '336px'}}/>
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src="https://image.cooky.vn/abn/s1065x333/e0365a95-ae59-4828-b7c7-d2d545a989c9.png"
                                            className="d-block w-100" alt="..."
                                            style={{width: '100%', height: '336px'}}/>
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-target="#carouselExampleCaptions" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-target="#carouselExampleCaptions" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{justifyContent: 'center', marginTop: '20px'}}>
                    <div className="col-10" style={{justifyContent: 'center', height: '250px'}}>
                        <div className="row" style={{margin: '10px', fontWeight: 'bold'}}>Bạn Muốn Ăn Gì</div>
                        {showDetails ? (
                            <div>
                                <ListFoodUser  list={listFood} setShowDetails={setShowDetails} close={close}></ListFoodUser>
                            </div>
                        ) : (

                            <div>
                                <div onClick={show}
                                     className="row" style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    margin: '10px',
                                    marginTop: '50px',

                                }}>
                                    <div className="col-2" style={{
                                        height: '180px',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        flexDirection: 'column'}}
                                         onClick={() => {handleToList('Cháo')}}
                                    >
                                        <img
                                            src="https://icons.iconarchive.com/icons/iconarchive/fat-sugar-food/128/Drink-Coke-icon.png"
                                            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
                                        <p style={{
                                            fontFamily: 'Candara',
                                            marginTop: '10px',
                                            textAlign: 'center',
                                            fontWeight: 'bold'
                                        }}><button>Cháo</button></p>
                                    </div>
                                    <div className="col-2" style={{
                                        height: '180px',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                         onClick={() => {handleToList('Cơm rang')}}>
                                        <img
                                            src="https://icons.iconarchive.com/icons/jamespeng/cuisine/128/Pork-Chop-Set-icon.png"
                                            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
                                        <p style={{
                                            fontFamily: 'Candara',
                                            marginTop: '10px',
                                            textAlign: 'center',
                                            fontWeight: 'bold'
                                        }}><button>Cơm rang</button></p>
                                    </div>
                                    <div className="col-2" style={{
                                        height: '180px',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                         onClick={() => {handleToList('Đồ chay')}}>
                                        <img
                                            src="https://icons.iconarchive.com/icons/aha-soft/desktop-buffet/128/Salad-icon.png"
                                            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
                                        <p style={{
                                            fontFamily: 'Candara',
                                            marginTop: '10px',
                                            textAlign: 'center',
                                            fontWeight: 'bold'
                                        }}><button>Đồ chay</button></p>
                                    </div>
                                    <div className="col-2" style={{
                                        height: '180px',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                         onClick={() => {handleToList('Đồ uống')}}>
                                        <img
                                            src="https://icons.iconarchive.com/icons/iconarchive/fruit-illustration/256/Currant-Illustration-icon.png"
                                            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
                                        <p style={{
                                            fontFamily: 'Candara',
                                            marginTop: '10px',
                                            textAlign: 'center',
                                            fontWeight: 'bold'
                                        }}><button>Đồ uống</button></p>
                                    </div>
                                    <div className="col-2" style={{
                                        height: '180px',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                         onClick={() => {handleToList('Bún'||'Phở')}}>
                                        <img
                                            src="https://icons.iconarchive.com/icons/aha-soft/desktop-buffet/128/Piece-of-cake-icon.png"
                                            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
                                        <p style={{
                                            fontFamily: 'Candara',
                                            marginTop: '10px',
                                            textAlign: 'center',
                                            fontWeight: 'bold'
                                        }}>
                                            <button>Bún-Phở</button></p>
                                    </div>
                                    <div className="col-2" style={{
                                        height: '180px',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                         onClick={() => {handleToList('other')}}>
                                        <img
                                            src="https://icons.iconarchive.com/icons/iconka/saint-whiskers/128/cat-food-hearts-icon.png"
                                            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
                                        <p style={{
                                            fontFamily: 'Candara',
                                            marginTop: '10px',
                                            textAlign: 'center',
                                            fontWeight: 'bold'
                                        }}><button>Khác</button></p>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
