import '../../css/merchantNavbarCss.css'
import {Link} from "react-router-dom";
export default function MerchantOption(){
    return(
        <>
            <div className='select-option-merchat'>
                <div>
                    <Link to={'/homeMerchant/add_food'}>Thêm món ăn</Link>
                </div>
                <div>
                    <Link to={`/update_restaurant/:id`}>Sửa cửa hàng</Link>
                </div>
            </div>
        </>
    )
}