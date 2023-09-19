import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {deleteFood, getFood, getFoodByName} from "../../service/foodsService";
import {useEffect, useState} from "react";
import './listFoodCss.css'
import {getRestaurant} from "../../service/restaurantsService";


export default function ListFood(){
    const [searchKeyword, setSearchKeyword] = useState("");
    const [list,setList] = useState([])

    // const handleFindByName = (d)=>{
    //     dispatch(getFoodByName(d)).then((res)=>{
    //         getRestaurant(res.payload.data)
    //         console.log(res.payload.data)
    //     })
    // }
    const restaurant = useSelector((state)=>{
        return state.restaurant.restaurant
    })
    useEffect(()=>{
        dispatch(getRestaurant())
    },[])


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const food = useSelector((state)=>{
        return state.food.food
    })


    useEffect(() => {
        dispatch(getFood())
    }, [])

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this blog?")
        if (confirmDelete) {
            dispatch(deleteFood(id)).then(()=>{
                dispatch(getFood())
                navigate("/merchant")
            })
        }
    }
    const handleFindByName = (d)=>{
        dispatch(getFoodByName(d)).then((res)=>{
            setList(res.payload.data)
            console.log(res.payload.data)

        })

    }
    list.map((item)=>{
        console.log(item)
    })

    return (
        <>
            <div className="row" style={{ background: 'white', width: '100%', height: '70px', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <div className="col-10" style={{ justifyContent: 'center' }}>
                    <div className="row" style={{ width: '100%', height: '50px' }}>
                        <div style={{ border: '1px solid', width: '60%' }}>
                            <div style={{ display: 'flex' }}>
                                <i className="fa-solid fa-magnifying-glass" style={{ marginTop: '18px' }} />
                                <input style={{ width: '100%', height: '50px', background: 'none', border: 'none', outline: 'none' }} placeholder="Từ khóa, tên, địa chỉ, doanh thu" onChange={(e) => setSearchKeyword(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-3" style={{ display: 'flex', border: '1px solid', marginLeft: '20px' }}>
                            <i className="fa-solid fa-location-dot" style={{ marginTop: '18px' }} />
                            <select style={{ width: '100%', height: '50px', background: 'none', border: 'none', outline: 'none' }}>
                                <option disabled selected>Chọn địa chỉ</option>
                                <option>Hà Nội</option>
                                <option>Hồ Chí Minh</option>
                                <option>Đà Nẵng</option>
                            </select>
                        </div>
                        <div className="col-3" style={{ display: 'flex', border: '1px solid', marginLeft: '20px' }}>
                            <i className="fa-solid fa-coins" style={{ marginTop: '18px' }} />
                            <select style={{ width: '100%', height: '50px', background: 'none', border: 'none', outline: 'none' }}>
                                <option disabled selected>Chọn doanh thu</option>
                                <option>Từ 1-3 tỷ</option>
                                <option>Từ 3-5 tỷ</option>
                                <option>Từ 5-7 tỷ</option>
                            </select>
                        </div>
                        <div className="col-2" style={{ width: '100%', marginLeft: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <button style={{ width: '100%' }} onClick={() => handleFindByName(searchKeyword)}>Tìm kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
            {restaurant.map((item, key) => (
                <div key={key}>
                    <Link to={`/merchant/update_restaurant/${item.id}`}><a>kjasdkjabkas</a></Link>
                    <div className="row" style={{ width: '100%', marginTop: '20px', fontWeight: 'bold', fontSize: '25px', marginLeft: '30px' }}>
                        {item.name}
                    </div>
                    <div className="row" style={{ width: '100%', marginTop: '20px', fontWeight: 'bold', fontSize: '25px' }}>
                        <div className="col-6">
                            <img src={item.imgUrl} style={{ width: '100%' }} alt="Restaurant" />
                        </div>
                        <div className="col-6">
                            <div style={{ fontSize: '30px' }}>Tên: {item.name}</div>
                            <div style={{ marginTop: '20px' }}>Địa chỉ: {item.address}</div>
                            <div style={{ marginTop: '5px' }}>SĐT: {item.phone}</div>
                            <div style={{ marginTop: '5px' }}>Email: {item.email}</div>
                            <div style={{ marginTop: '5px' }}>Doanh Thu:</div>
                            <div style={{ marginTop: '10px', fontSize: '15px', color: '#acacac' }}>
                                <div>Giờ mở: {item.startTime}</div>
                                <div>Giờ đóng: {item.endTime}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="title-list">
                <div className="title-small">
                    <p style={{ fontSize: '30px' }}>Những đồ ăn hiện có</p>
                </div>
            </div>
            <div style={{display:'flex',flexWrap: 'wrap', width:'100%', height:'330px'}}>
                {food.map((item, key)=>(
                    <div className="card-home col-2" style={{marginBottom: '150px'}}>
                        <div className="row-1 col-10">
                            <div className="col-2" style={{height: '200px'}}>

                                <div className="card" style={{width: '200px'}}>
                                    <div className='food-img'>
                                        <img src={item.imgUrl} className="card-img-top" alt="..." />
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <div className="bottom-card" style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <div className="bottom-card-detail">
                                                <p style={{marginBottom: '1px', fontSize: '12px', color: '#acacac'}}>{item.note}</p>
                                                <p style={{fontWeight: 700}}>{item.price}</p>
                                            </div>
                                            <div style={{marginTop:'30px', display:'flex', gap:'15px'}}>
                                                <i  className="fa-solid fa-circle-plus" style={{display: 'flex', alignItems: 'center', color: 'red'}} />
                                                <Link to={`/merchant/update_food/${item.id}`}><i className="fa-solid fa-pen-to-square" style={{display: 'flex', alignItems: 'center', color: 'red'}} /></Link>
                                                <i onClick={()=>{handleDelete(item.id)}}  className="fa-solid fa-trash" style={{display: 'flex', alignItems: 'center', color: 'red'}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}