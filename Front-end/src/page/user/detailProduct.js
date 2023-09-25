import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getFoodById, getFoodByType} from "../../service/foodsService";
import {useDispatch} from "react-redux";

export default function DetailProduct() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [food, setFood] = useState(null)
    useEffect(() => {
        dispatch(getFoodById(id))
            .then(res => {
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
                                src="https://image.cooky.vn/posproduct/g0/24254/s1124x1124/ec60944d-f02e-49ae-894c-967e6b9cc792.jpeg"
                                style={{width: '100%', height: '100%'}}/>
                        </div>
                        <div className="col-7">
                            <div className="row" style={{fontSize: '30px', fontWeight: 'bold'}}>
                                {food?.name}
                            </div>
                            <div className="row" style={{fontSize: '15px', color: '#acacac'}}>
                                {food?.type}
                            </div>
                            <div className="row" style={{fontSize: '20px', fontWeight: 'bold'}}>
                                {food?.price}
                            </div>

                        <div className="row">
                            <button style={{
                                height: '50px',
                                width: '80%',
                                background: 'deepskyblue',
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
                            {food?.description}
                        </div>
                    </div> </div>
                </div>
            </div>
        </>
    )
}