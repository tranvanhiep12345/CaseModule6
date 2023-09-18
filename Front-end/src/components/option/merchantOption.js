import '../merchantNavbarCss.css'
import {Link} from "react-router-dom";
export default function MerchantOption(){
    return(
        <>
            <div className='select-option-merchat'>
                <div>
                    <Link to={'/merchant/add_food'}>Thêm món ăn</Link>
                </div>
                <div>
                    <Link to={'/'}>Sửa cửa hàng</Link>
                </div>
            </div>
        </>
    )
}