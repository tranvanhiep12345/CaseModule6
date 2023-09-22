export default function DetailProduct(){
    return(
        <>
            <div className="container col-12" style={{ justifyContent: 'center', display: 'flex',marginTop:"100px"}}>
                <div className="col-10" style={{}}>
                    <div className="row" style={{ width: '100%', height: '50px', marginTop: '20px' }}>
                        <div className="col-5" style={{ height: '400px' }}>
                            <img src="https://image.cooky.vn/posproduct/g0/24254/s1124x1124/ec60944d-f02e-49ae-894c-967e6b9cc792.jpeg" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-7">
                            <div className="row" style={{ fontSize: '30px', fontWeight: 'bold' }}>
                                Bò Viên Trứng Muối Thượng Hạng
                            </div>
                            <div className="row" style={{ fontSize: '15px', color: '#acacac' }}>
                                Đồ tươi
                            </div>
                            <div className="row" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                79,000d
                            </div>
                            <div className="row">
                                <button style={{ height: '50px', width: '80%', background: 'deepskyblue', color: 'white', border: 'none' }}>
                                    <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ hàng
                                </button>
                            </div>
                            <div className="row" style={{ height: '50px', width: '85%', border: '1px solid #E3E6E7', marginTop: '10px', display: 'flex', justifyContent: 'space-around' }}>
                                <div>
                                    <div style={{ fontSize: '10px', textAlign: 'center' }}>Chất lượng</div>
                                    <div style={{ fontWeight: 'bold' }}>Hảo hạng</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '10px', textAlign: 'center' }}>Thương hiệu</div>
                                    <div style={{ fontWeight: 'bold' }}>CooKyMade</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '10px', textAlign: 'center' }}>Xuất xứ</div>
                                    <div style={{ fontWeight: 'bold' }}>Việt Nam</div>
                                </div>
                            </div>
                            <div className="row" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                                Thành Phần
                            </div>
                            <div className="row" style={{ height: '50px', width: '85%', background: '#E3E6E7', marginTop: '10px', alignItems: 'center' }}>
                                1.Bò viên trứng muối
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}