import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getAllImageByFoodType} from "../../service/imageService";
export default function ListFoodUser(){
    const navigate = useNavigate()
    const {type} = useParams()
    const dispatch = useDispatch();
    const [listFood, setListFood] = useState([]);
    useEffect(()=> {
        dispatch(getAllImageByFoodType(type))
            .then(res => {
                console.log(res.payload.data)
                setListFood(res.payload.data)
            }).catch(e => {
                console.log(e)
            })
    },[])
    return(
        <>
            <div className="row">
                <div className="body col-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', marginBottom:'20px' }}>
                    <div className="row-1 col-10" style={{ display: 'flex', justifyContent: 'center', height: '30px', textAlign: 'center' }}>
                        <p style={{ fontSize: '20px', marginTop:'5px' }}>Danh sách sản phẩm</p>
                    </div>
                    <div className="row-1 col-2"
                         style={{
                             width:'100%',
                             height:'50px'
                         }}
                    >
                        <button style={{
                            width: '100%',
                            height:'50px',
                            borderRadius: '20px',
                            color: 'white',
                            background: 'red',
                            border: '1px solid white',
                            fontSize:'15px',
                            display:'flex'
                        }}
                                onClick={() => {
                                    navigate("/")
                                }}>
                            <div style={{
                                width: '60%',
                                marginLeft: '-50px',
                                display: 'flex',
                                justifyContent:'center',
                                alignItems: 'center'
                            }}>
                                <i className="fa fa-arrow-left"
                                   style={{
                                       fontSize: '25px'
                                   }}>
                                </i>
                            </div>
                            <div style={{
                                display: 'flex',
                                width: '120px',
                                height: '30px',
                                justifyContent:'center',
                                fontSize:'15px',
                                marginRight: '-10px'
                            }}>
                                Trang Chủ
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="body col-12" style={{ display: 'flex',justifyContent: 'center'}}>
                    <div className="row-1 col-12" style={{ display: 'flex', height: '100%', flexWrap: 'wrap'}}>
                        {listFood.map((item) => {
                            if (item?.food.type === type) {
                                return (
                                    <div className="col-3"
                                         style={{
                                             display:'flex',
                                             height: '350px',
                                             justifyContent:'center' ,
                                             marginBottom:'50px'
                                         }}>
                                        <div style={{
                                                width: "18rem",
                                                height:'350px',
                                                border: '1px solid red',
                                                borderRadius:'10px'
                                        }}>
                                            <div>
                                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVobVX21ibI3fL8ChoYQk9O5FvDFjU-pIVVQ&usqp=CAU"}
                                                     className="card-img-top"
                                                     alt={"anh loi"}
                                                     style={{
                                                         height: '200px',
                                                         borderRadius:'5px'
                                                     }}
                                                />
                                            </div>
                                            <div className="card-body"
                                                 style={{
                                                     display:'flex',
                                                     width:'100%',
                                                     height:'40px',
                                                     justifyContent:'center',
                                                     alignItems:'center'
                                                 }}
                                            >
                                                <Link to={`detailProduct/${item?.food.id}`}
                                                    style={{
                                                        marginTop:'25px',
                                                        textDecoration: 'none'
                                                    }}
                                                >
                                                    <h5 className="card-title">
                                                        {item?.food.name}
                                                    </h5>
                                                </Link>
                                            </div>
                                            <div className="card-body">
                                                <div className="bottom-card"
                                                     style={{
                                                         display: 'flex',
                                                         justifyContent: 'space-between'
                                                }}>
                                                    <div className="bottom-card-detail">
                                                        <p style={{
                                                            marginBottom: '1px',
                                                            fontSize: '12px',
                                                            color: '#acacac'
                                                        }}>
                                                            {item?.food.description}
                                                        </p>
                                                        <p style={{
                                                            fontWeight: '700'
                                                        }}>
                                                            {item?.food.price} VNĐ
                                                        </p>
                                                    </div>
                                                    <i className="fa-solid fa-circle-plus"
                                                           style={{
                                                               display: 'flex',
                                                               alignItems: 'center',
                                                               color: 'red'
                                                           }}>
                                                    </i>
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