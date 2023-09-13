export default function NavbarAdmin(){
    return(
        <>
            <div className="container col-12" style={{ background: 'white' }}>
                <div className="row">
                    <div style={{ background: 'red', width: '100%', height: '100px' }}>
                        <div className="row" style={{ margin: '0px' }}>
                            <div className="col-2" style={{ height: '80px', marginTop: '10px', fontSize: '50px', color: 'white', fontFamily: 'Lucida Handwriting' }}>
                                Cooky
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-2">
                                        <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-store-icon-in-line-style-png-image_5053711.jpg" style={{ width: '80px', marginTop: '10px' }} />
                                    </div>
                                    <div className="col-10" style={{ color: 'white', fontFamily: 'Arial Black', marginTop: '30px', fontSize: '30px' }}>
                                        Hệ thống quản lý
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ background: 'white', width: '100%', height: '600px', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <div className="col-10" style={{ justifyContent: 'center' }}>
                        <div className="row" style={{ width: '100%', height: '50px' }}>
                            <div className="col-3" style={{ border: '1px solid' }}>
                                <div style={{ display: 'flex' }}>
                                    <i className="fa-solid fa-magnifying-glass" style={{ marginTop: '18px' }}></i>
                                    <input style={{ width: '100%', height: '50px', background: 'none', border: 'none', outline: 'none' }} placeholder="Từ khóa, tên, địa chỉ, doanh thu" />
                                </div>
                            </div>
                            <div className="col-3" style={{ display: 'flex', border: '1px solid', marginLeft: '20px' }}>
                                <i className="fa-solid fa-location-dot" style={{ marginTop: '18px' }}></i>
                                <select style={{ width: '100%', height: '50px', background: 'none', border: 'none', outline: 'none' }}>
                                    <option disabled selected>Chọn địa chỉ</option>
                                    <option>Hà Nội</option>
                                    <option>Hồ Chí Minh</option>
                                    <option>Đà Nẵng</option>
                                </select>
                            </div>
                            <div className="col-3" style={{ display: 'flex', border: '1px solid', marginLeft: '20px' }}>
                                <i className="fa-solid fa-coins" style={{ marginTop: '18px' }}></i>
                                <select style={{ width: '100%', height: '50px', background: 'none', border: 'none', outline: 'none' }}>
                                    <option disabled selected>Chọn doanh thu</option>
                                    <option>Từ 1-3 tỷ</option>
                                    <option>Từ 3-5 tỷ</option>
                                    <option>Từ 5-7 tỷ</option>
                                </select>
                            </div>
                            <div className="col-2" style={{ width: '100%', marginLeft: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <button style={{ width: '100%' }}>Tìm kiếm</button>
                            </div>
                        </div>
                        <div className="row" style={{ width: '100%', marginTop: '20px', fontWeight: 'bold', fontSize: '25px' }}>
                            Danh sách merchance
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}