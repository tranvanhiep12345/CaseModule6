import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {deleteFood, getFood} from "../../service/foodsService";
import {useEffect} from "react";
import '../../css/listFoodCss.css'
import {getRestaurant} from "../../service/restaurantsService";
import {toast} from "react-toastify";

export default function ListFood() {
    const restaurants = useSelector((state) => {
        return state.restaurant.restaurant
    })

    const currentUser = useSelector((state) => {
        return state.user.currentUser
    })

    const foods = useSelector((state) => {
        return state.food.food
    })

    useEffect(() => {
        dispatch(getRestaurant())
        dispatch(getFood())
    }, [])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this foods?")
        if (confirmDelete) {
            dispatch(deleteFood(id)).then(() => {
                toast.warning('Delete success')
                dispatch(getFood())
                navigate("/homeMerchant")
            })
        }
    }
    return (
        <>
            {restaurants.map((restaurant, key) => {
                if (restaurant.user.email === currentUser.email) {
                    return (
                        <>
                            <div className='container-list-food'>
                                <div className='description-restaurant'>
                                    <div className="col-6">
                                        <img src={restaurant.imgUrl} style={{width: '100%'}}/>
                                    </div>
                                    <div className="col-6">
                                        <div style={{fontSize: '30px', fontWeight: 'bold'}}>{restaurant.name}
                                        </div>
                                        <div style={{fontWeight: "lighter"}}>{restaurant.address}</div>
                                        <div style={{marginTop: '5px'}}>Liên hệ: {restaurant.phone}</div>
                                        <div style={{marginTop: '5px'}}>Email: {restaurant.email}</div>
                                        <div style={{marginTop: '5px'}}>Doanh Thu:</div>
                                        <div style={{marginTop: '10px', fontSize: '15px', color: '#acacac'}}>
                                            <div>Giờ mở: {restaurant.startTime}</div>
                                            <div>Giờ đóng: {restaurant.endTime}</div>
                                        </div>
                                        <div>
                                            <Link to={'/homeMerchant/add_food'}>
                                                <i className="fa-light fa-plus"></i>
                                                Thêm món ăn mới
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to={`/homeMerchant/update_restaurant/${restaurant.id}`}>
                                                <i className="fa-regular fa-pen-to-square"></i>
                                                Sửa thông tin cửa hàng
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="title-list">
                                <div className="title-small">
                                    <p style={{fontSize: '30px'}}>Những đồ ăn hiện có</p>
                                </div>
                            </div>

                            <div style={{display: 'flex', width: '100%', height: '330px'}}>
                                {foods && foods.map((food, key) => {
                                    if (food.restaurant !== undefined)
                                        if (food.restaurant.id === restaurant.id) {
                                            console.log('f', food)
                                            return (
                                                <div className="card-home">
                                                    <div className="row-1 col-10">
                                                        <div className="col-2" style={{height: '200px'}}>
                                                            <div className="card" style={{width: '200px'}}>
                                                                <div className='food-img'>
                                                                    <img src={food.imgUrl} className="card-img-top"
                                                                         alt="..."/>
                                                                </div>
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{food.name}</h5>
                                                                    <div className="bottom-card" style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between'
                                                                    }}>
                                                                        <div className="bottom-card-detail">
                                                                            <p style={{
                                                                                marginBottom: '1px',
                                                                                fontSize: '12px',
                                                                                color: '#acacac'
                                                                            }}>{food.note}</p>
                                                                            <p style={{fontWeight: 700}}>{food.price}</p>
                                                                        </div>
                                                                        <div style={{
                                                                            marginTop: '30px',
                                                                            display: 'flex',
                                                                            gap: '15px'
                                                                        }}>
                                                                            <i className="fa-solid fa-circle-plus"
                                                                               style={{
                                                                                   display: 'flex',
                                                                                   alignItems: 'center',
                                                                                   color: 'red'
                                                                               }}/>
                                                                            <Link
                                                                                to={`/homeMerchant/update_food/${food.id}`}><i
                                                                                className="fa-solid fa-pen-to-square"
                                                                                style={{
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    color: 'red'
                                                                                }}/></Link>
                                                                            <i onClick={() => {
                                                                                handleDelete(food.id)
                                                                            }} className="fa-solid fa-trash" style={{
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                color: 'red'
                                                                            }}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                })}
                            </div>
                        </>
                    )
                }
            })}
        </>
    )
}