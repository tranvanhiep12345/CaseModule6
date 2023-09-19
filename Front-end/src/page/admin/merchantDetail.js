import React from "react";

const MerchantDetail = ({ restaurant }) => {
    return (
        <div>
            <h2>Thông tin chủ cửa hàng</h2>
            <p>Chủ nhà hàng: {restaurant.user.name}</p>
            <p>Số điện thoại: {restaurant.user.phone}</p>
            <p>Email: {restaurant.user.email}</p>
            {/* Hiển thị các thông tin khác của cửa hàng */}
        </div>
    );
};

export default MerchantDetail;