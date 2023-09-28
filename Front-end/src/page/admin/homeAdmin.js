import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {getRestaurant} from "../../service/restaurantsService";
import MerchantDetail from "./merchantDetail";

export default function HomeAdmin() {
    const dispatch = useDispatch()
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const [showOnlySelected, setShowOnlySelected] = useState(false);

    const [list, setList] = useState(null)
    useEffect(() => {
        dispatch(getRestaurant())
            .then((res) => {
                console.log(res)
            setList(res.payload.data)
        })
            .catch(e => {
                console.log(e)
            })
    }, [])
    const handle = (item) => {
        setSelectedRestaurant(item);
<<<<<<< HEAD
        if (showOnlySelected){
            setShowOnlySelected(false)
            setSelectedRestaurant(null)
        }else {
            setShowOnlySelected(true)
            setSelectedRestaurant(item)
        }
=======
        (showOnlySelected) ?
            setShowOnlySelected(false) : setShowOnlySelected(true)
>>>>>>> na
    };
    const reload = () => {
        window.location.reload()
    }
    return (
        <>
            <div className="row" style={{marginTop: '20px'}}>
                <div className="col-2" style={{height: '50px'}}>
                    <div style={{fontSize: '20px', margin: '5px'}}>
                        <div style={{marginTop: '20px'}}>
                            <button onClick={()=>{
                                reload()
                            }}  style={{background: 'red'}}>
                                Danh sách Merchant
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-10" style={{height: '50px'}}>
                    <table className="table table-sm" style={{
                        width: '90%',
                        margin: '50px',
                        boxShadow: '1px 2px 9px rgb(193,193,193)',
                        borderRadius: '10px'
                    }}>
                        <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên nhà hàng</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Email</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Doanh thu</th>
                            <th scope="col">Giờ mở</th>
                            <th scope="col">Giờ đóng</th>
                            <th scope="col" colSpan={2} style={{textAlign: "center"}}>Chức năng</th>
                        </tr>
                        </thead>
                        {list && list.map((item) => (
                            <tbody key={item.id}>
                            {(!showOnlySelected || selectedRestaurant === item) && ( <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>@mdo</td>
                                <td>{item.startTime}</td>
                                <td>{item.endTime}</td>
                                <td>
                                    <button type="button"
                                        onClick={()=>{handle(item)}}
                                    style={{background: 'red'}}
                                    >xem thêm

                                    </button>
                                </td>
                            </tr>
                            )}
                            </tbody>
                        ))}
                    </table>
                    {selectedRestaurant && (
                        <MerchantDetail restaurant={selectedRestaurant} />
                    )}
                </div>
            </div>
        </>
    )
}