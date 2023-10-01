import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getAllImageByFoodId} from "../../service/imageService";

export default function DetailProduct() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [food, setFood] = useState(null)
    useEffect(() => {
        dispatch(getAllImageByFoodId(id))
            .then(res => {
                console.log(res.payload.data[0])
                setFood(res.payload.data[0])
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    return (
        <>
            <div className="container col-12"
                 style={{justifyContent: 'center', display: 'flex', marginTop: "100px"}}>
                <div className="col-10" style={{}}>
                    <div className="row" style={{width: '100%', height: '50px', marginTop: '20px'}}>
                        <div className="col-5" style={{height: '400px'}}>
                            <img
                                src={food?.image}
                                style={{width: '100%', height: '100%'}}/>
                        </div>
                        <div className="col-7">
                            <div className="row" style={{fontSize: '30px', fontWeight: 'bold'}}>
                                {food?.food.name}
                            </div>
                            <div className="row" style={{fontSize: '15px', color: '#acacac'}}>
                                {food?.food.type}
                            </div>
                            <div className="row" style={{fontSize: '20px', fontWeight: 'bold'}}>
                                {food?.food.price} Đ
                            </div>

                            <div className="row">
                                <button style={{
                                    height: '50px',
                                    width: '80%',
                                    background: '#006fd2',
                                    color: 'white',
                                    border: 'none'
                                }}>
                                    <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ hàng
                                </button>
                            </div>
                            <div className="row" style={{
                                height: '50px',
                                width: '85%',
                                border: '1px solid #E3E6E7',
                                marginTop: '10px',
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>
                                <div>
                                    <div style={{fontSize: '10px', textAlign: 'center'}}>Chất lượng</div>
                                    <div style={{fontWeight: 'bold'}}>Hảo hạng</div>
                                </div>
                                <div>
                                    <div style={{fontSize: '10px', textAlign: 'center'}}>Thương hiệu</div>
                                    <div style={{fontWeight: 'bold'}}>CooKyMade</div>
                                </div>
                                <div>
                                    <div style={{fontSize: '10px', textAlign: 'center'}}>Xuất xứ</div>
                                    <div style={{fontWeight: 'bold'}}>Việt Nam</div>
                                </div>
                            </div>
                            <div className="row" style={{fontWeight: 'bold', fontSize: '20px'}}>
                                Thành Phần
                            </div>
                            <div className="row" style={{
                                height: '50px',
                                width: '85%',
                                background: '#E3E6E7',
                                marginTop: '10px',
                                alignItems: 'center'
                            }}>
                                {food?.food.description}
                            </div>
                        </div> </div>
                </div>
            </div>
        </>
    )
}
