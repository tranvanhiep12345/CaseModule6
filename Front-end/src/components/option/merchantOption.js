import '../merchantNavbarCss.css'
import {Link} from "react-router-dom";
export default function MerchantOption(){
    return(
        <>
            <div className='select-option-merchat'>
                <div>
                    <Link to={'/'}>Thêm cửa hàng mới</Link>
                </div>
                <div>
                    <Link to={'/'}>Sửa cửa hàng</Link>
                </div>
            </div>
        </>
    )
}