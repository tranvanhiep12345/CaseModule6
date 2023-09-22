import React, { useState } from 'react';
export default function ListFoodUser({close,setShowDetails}){

    const back = (()=>{
        setShowDetails(false)
    })
    return(
        <>

            <div className="row">
                <div className="body col-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                    <div className="row-1 col-10" style={{ display: 'flex', justifyContent: 'center', height: '30px', textAlign: 'center' }}>
                        <p style={{ fontSize: '20px', margin: '0 auto' }}>Đồ uống</p>
                    </div>
                    <p style={{ marginRight: '0',fontSize:'20px'}} onClick={back}>
                       Quay lại <i className="fa-solid fa-hand-back-point-left"></i></p>
                </div>
            </div>
            <div className="row">
                <div className="body col-12" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <div className="row-1 col-14" style={{ display: 'flex', justifyContent: 'center', height: '160%', flexWrap: 'wrap' }}>
                        <div className="col-2" style={{ height: '200px' }}>
                            <div className="card" style={{ width: '200px' }}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc46jtDyJqgBjM6Km-UCJ33XlOy4PBZfvPhg&usqp=CAU" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Trà mật ong</h5>
                                    <div className="bottom-card" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="bottom-card-detail">
                                            <p style={{ marginBottom: '1px', fontSize: '12px', color: '#acacac' }}>450ml</p>
                                            <p style={{ fontWeight: '700' }}>9500d</p>
                                        </div>
                                        <i className="fa-solid fa-circle-plus" style={{ display: 'flex', alignItems: 'center', color: 'red' }}></i>
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