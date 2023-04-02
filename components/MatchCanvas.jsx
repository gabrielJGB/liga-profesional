import React, { useContext, useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { DataContext } from '../context/DataContext'

const MatchCanvas = () => {
    const data = useContext(DataContext)
    const handleCloseBottom = () => data.setShowBottom(false);




    return (
        <Offcanvas
            scroll={true}
            backdrop={false}
            backdropClassName='backdrop'
            placement='bottom'
            show={data.showBottom}
            onHide={handleCloseBottom}
            
        >

             {/* <Offcanvas.Header style={{ backgroundColor: "#212529", color: "white" }} closeButton >
               <Offcanvas.Title >
                    {
                        data.matchInfo ?
                            <div className='match-title'>
                                <div className='match-number'>Fecha {data.matchInfo.fecha}</div>
                                <div className='match-day'>{data.matchInfo.dia}</div>
                            </div>
                            :
                            <></>
                    }
                </Offcanvas.Title>


            </Offcanvas.Header> */}
            <Offcanvas.Body style={{ backgroundColor: "#212529", color: "white",padding:"20px" }}>

                {
                    data.matchInfo ?
                    <div className='match-container'>
                         <div className='match-title'>
                                <div className='match-number'>Fecha {data.matchInfo.fecha}</div>
                                <div className='match-day'>{data.matchInfo.dia}</div>
                            </div>
                        <div className='match-body'>
                            <div className='match-team'>
                                <img style={{ marginRight: 5 }} src={"https://www.promiedos.com.ar/" + data.matchInfo.escudo_local} />
                                <div>{data.matchInfo.local}</div>
                                <div className='match-score'>{data.matchInfo.goles_local}</div>
                            </div>
                            <div className='match-team'>
                                <img style={{ marginRight: 5 }} src={"https://www.promiedos.com.ar/" + data.matchInfo.escudo_visitante} />
                                <div >{data.matchInfo.visitante}</div>
                                <div className='match-score'>{data.matchInfo.goles_visitante}</div>
                            </div>
                        </div>
                        </div>
                        :
                        <></>
                }


            </Offcanvas.Body>
        </Offcanvas>



    )
}

export default MatchCanvas