
import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getFoodByType} from "../../service/foodsService";
export default function ListFoodUser({list, close,setShowDetails}){
    const navigate = useNavigate()
    const {type} = useParams()
    const dispatch = useDispatch();
    const [listFood, setListFood] = useState([]);
    useEffect(()=>{
        dispatch(getFoodByType(type))
            .then(res => {setListFood(res.payload.data)})
            .catch(e => {
                console.log(e)
            })
    },[])
    console.log(listFood)

    return(
        <>
            <div className="row">
                <div className="body col-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                    <div className="row-1 col-10" style={{ display: 'flex', justifyContent: 'center', height: '30px', textAlign: 'center' }}>
                        <p style={{ fontSize: '20px', margin: '0 auto' }}>Danh sách sản phẩm</p>
                    </div>
                    <p style={{ marginRight: '50px',fontSize:'20px'}} onClick={()=>{navigate('/')}}>
                        <button>
                       Quay lại <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        </button>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="body col-12" style={{ display: 'flex',justifyContent: 'center', marginTop: '20px'}}>
                    <div className="row-1 col-14" style={{ display: 'flex', justifyContent: 'space-around', height: '160%', flexWrap: 'wrap'}}>
                        {listFood.map((item) => {
                            if (item?.type === type) {
                                return (
                                    <div className="col-2" style={{ height: '200px', marginTop: '20px',}}>
                                        <div className="card" style={{ width: '200px' }}>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc46jtDyJqgBjM6Km-UCJ33XlOy4PBZfvPhg&usqp=CAU" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <Link to={`detailProduct/${item.id}`}>
                                                    <h5 className="card-title">{item.name}</h5>
                                                </Link>
                                                <div className="bottom-card" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div className="bottom-card-detail">
                                                        <p style={{ marginBottom: '1px', fontSize: '12px', color: '#acacac' }}>{item.description}</p>
                                                        <p style={{ fontWeight: '700' }}>{item.serviceFee} VNĐ</p>
                                                    </div>
                                                    <i className="fa-solid fa-circle-plus" style={{ display: 'flex', alignItems: 'center', color: 'red' }}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}