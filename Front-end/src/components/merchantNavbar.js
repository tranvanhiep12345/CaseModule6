export default function NavbarMerchant(){
    return(
        <>
            <div className="container-merchant-navbar" style={{background: 'white'}}>
                <div className="row">
                    <div style={{background: 'red', width: '100%', height: '100px'}}>
                        <div className="row" style={{margin: '0px'}}>
                            <div className="col-2" style={{height: '80px', marginTop: '10px', fontSize: '50px', color: 'white', fontFamily: '"Lucida Handwriting"'}}>
                                Cooky
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-2"><img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-store-icon-in-line-style-png-image_5053711.jpg" style={{width: '80px', marginTop: '10px'}} /></div>
                                    <div className="col-10" style={{color: 'white', fontFamily: '"Arial Black"', marginTop: '30px', fontSize: '30px'}}>
                                        Hệ thống quản lý
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}