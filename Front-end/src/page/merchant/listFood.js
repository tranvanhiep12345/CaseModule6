import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {deleteFood, getFood} from "../../service/foodsService";
import {useEffect} from "react";
import './listFood.css'


export default function ListFood(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const food = useSelector((state)=>{
        return state.food.food
    })
    useEffect(() =>{
        dispatch(getFood())
    }, [])

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this blog?")
        if (confirmDelete) {
            dispatch(deleteFood(id)).then(()=>{
                dispatch(getFood())
                navigate("/home")
            })
        }
    }

    return(

        <>
            <div className="title-list">
                <div className="title-small">
                    <p style={{fontSize:'30px'}}>Những đồ ăn hiện có</p>
                </div>
            </div>

            <div style={{display:'flex', width:'100%', height:'330px'}}>
                {food.map((item, key)=>(
                    <div className="card-home">
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
                                                <i className="fa-solid fa-pen-to-square" style={{display: 'flex', alignItems: 'center', color: 'red'}} />
                                                <i onClick={()=>{handleDelete(item.id)}} className="fa-solid fa-trash" style={{display: 'flex', alignItems: 'center', color: 'red'}} /> {/*deleteFood*/}

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