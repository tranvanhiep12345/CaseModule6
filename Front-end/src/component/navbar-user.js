export default function NavbarUser(){
    return(
        <>
            <div className="container col-12" style={{ background: 'white' }}>
                <div className="row">
                    <div style={{ background: 'red', width: '100%', height: '100px' }}>
                        <div className="row" style={{ margin: '0px' }}>
                            <div className="col-2" style={{ height: '80px', marginTop: '10px', fontSize: '50px', color: 'white', fontFamily: 'Lucida Handwriting' }}>
                                Cooky
                            </div>
                            <div className="col-4" style={{ height: '50px', marginTop: '20px', display: 'flex', background: 'white' }}>
                                <div className="row" style={{ margin: '15px', color: '#606060' }}>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className="row">
                                    <input style={{ height: '45px', width: '100%', background: 'none', border: 'none', outline: 'none' }} placeholder="Tìm kiếm sản phẩm" />
                                </div>
                            </div>
                            <div className="col-2" style={{ height: '50px', display: 'flex', marginTop: '5px' }}>
                                <div className="row" style={{ marginTop: '20px' }}>
                                    <div className="col-3" style={{ height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <i className="fa-solid fa-heart" style={{ color: 'white' }}></i>
                                    </div>
                                    <div className="col-3" style={{ height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <i className="fa-solid fa-cart-shopping" style={{ color: 'white' }}></i>
                                    </div>
                                    <div className="col-3" style={{ height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <i className="fa-solid fa-phone-volume" style={{ color: 'white' }}></i>
                                    </div>
                                    <div className="col-3" style={{ height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <i className="fa-brands fa-facebook-messenger" style={{ color: 'white' }}></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2" style={{ height: '40px', marginTop: '20px' }}>
                                <button style={{ width: '100%', height: '50px', borderRadius: '999px', margin: '1px', color: 'white', background: 'red', border: '1px solid white' }}>
                                    Hồ Chí Minh
                                </button>
                            </div>
                            <div className="col-2" style={{ height: '40px', marginTop: '20px' }}>
                                <button style={{ width: '100%', height: '50px', borderRadius: '999px', margin: '1px', color: 'white', background: 'red', border: '1px solid white' }}>
                                    Đăng nhập
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}