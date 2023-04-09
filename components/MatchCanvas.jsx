import React, { useContext, useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Table from 'react-bootstrap/Table'
import ball from '../src/ball.png'
import { DataContext } from '../context/DataContext'

const MatchCanvas = () => {
    const data = useContext(DataContext)
    const handleCloseBottom = () => data.setShowBottom(false);


    const renderIncidencia = (esLocal, minuto, tipo, jugadores) => {

        return (
            <div className="incidencia">
                <div className='inc-local'>
                    {
                        esLocal ?
                            <>
                                <span></span>
                                <span>
                                    {
                                        jugadores.map((jugador, i) => (
                                            <div key={i}>{jugador}</div>
                                        ))
                                    }
                                </span>
                                <span>
                                    {
                                        tipo === "cambio" ?
                                            <>
                                                <div>In</div>
                                                <div>Out</div>
                                            </>
                                            :
                                            <div>{tipo}</div>
                                    }
                                </span>
                            </>
                            :
                            <></>

                    }

                </div>
                <div className='inc-minutos'>{minuto}'</div>
                <div className='inc-visitante'>
                    {
                        esLocal ?
                            <></>
                            :
                            <>
                                <span>
                                    {
                                        tipo === "cambio" ?
                                            <>
                                                <div>In</div>
                                                <div>Out</div>
                                            </>
                                            :
                                            <div>{tipo}</div>
                                    }
                                </span>
                                <span>
                                    {
                                        jugadores.map((jugador, i) => (
                                            <div key={i}>{jugador}</div>
                                        ))
                                    }
                                </span>
                                <span></span>
                            </>

                    }

                </div>
            </div>
        )
    }

    return (
        <Offcanvas
            scroll={true}
            backdrop={false}
            placement='bottom'
            show={data.showBottom}
            onHide={handleCloseBottom}
        >

            <Offcanvas.Header>



                <div className='match-close-div'>
                    <button className='match-close-button' onClick={handleCloseBottom}>Cerrar</button>
                </div>


                <iframe width="100%" height="202.5" //height = window.innerWidth * (9/16)
                    src="https://www.youtube.com/embed/0roEld33-Dk">
                </iframe>


                <div className='match-header'>
                    <div className='team1'>
                        <img src="https://www.promiedos.com.ar/images/18/13.png" alt="" />
                        <span>Baracas Central (SdE)</span>
                    </div>
                    <div className="score1">2</div>
                    <div className="score2">0</div>
                    <div className='team2'>
                        <span>Arsenal</span>
                        <img src="https://www.promiedos.com.ar/images/18/4.png" alt="" />
                    </div>
                </div>



            </Offcanvas.Header>

            <Offcanvas.Body className='match-body'>



                <div className="match-scroll-content">

                    <section className="sec estadisticas">
                        <div className="sec-header">ESTADÍSTICAS</div>

                        <div className="sec-body">

                            <div className='stat-container'>
                                <div className="stat-header">Posesión</div>
                                <div className="stat-body">
                                    <div className='stat-bar stat-bar1' style={{ width: "60%" }}> 60% </div>
                                    <div className='stat-bar stat-bar2' style={{ width: "40%" }}> 40% </div>
                                </div>
                            </div>

                            <div className='stat-container'>
                                <div className="stat-header">Tiros al arco</div>
                                <div className="stat-body">
                                    <div className='stat-bar stat-bar1' style={{ width: "40%" }}> 4 </div>
                                    <div className='stat-bar stat-bar2' style={{ width: "60%" }}> 6 </div>
                                </div>
                            </div>
                            <div className='stat-container'>
                                <div className="stat-header">Tiros totales</div>
                                <div className="stat-body">
                                    <div className='stat-bar stat-bar1' style={{ width: "20%" }}> 2 </div>
                                    <div className='stat-bar stat-bar2' style={{ width: "80%" }}> 8 </div>
                                </div>
                            </div>
                            <div className='stat-container'>
                                <div className="stat-header">Faltas cometidas</div>
                                <div className="stat-body">
                                    <div className='stat-bar stat-bar1' style={{ width: "90%" }}> 20 </div>
                                    <div className='stat-bar stat-bar2' style={{ width: "10%" }}> 2 </div>
                                </div>
                            </div>

                            <div className='stat-container'>
                                <div className="stat-header">Corners</div>
                                <div className="stat-body">
                                    <div className='stat-bar stat-bar1' style={{ width: "60%" }}> 6 </div>
                                    <div className='stat-bar stat-bar2' style={{ width: "40%" }}> 4 </div>
                                </div>
                            </div>




                        </div>

                    </section>

                    <section className="sec incidencias">
                        <div className="sec-header">INCIDENCIAS</div>
                        <div className="sec-body">
                            <div className="incidencias-body">

                                {renderIncidencia(true, 59, "cambio", ["G. Brunengo", "L. Messi"])}
                                {renderIncidencia(false, 22, "R", ["L. Messi"])}
                                {renderIncidencia(false, 33, "A", ["L. Paredes"])}
                                {renderIncidencia(true, 92, "G", ["L. Paredes"])}

                            </div>
                        </div>
                    </section>

                    <section className="sec formaciones">
                        <div className="sec-header">FORMACIONES</div>
                        <div className="sec-body">

                            <div className="header-formaciones"> TITULARES </div>
                            <div className="body-formaciones body-titulares">

                                <div className="lista-jugadores"> {/* titulares local */}
                                    <div className='jugador pos-0'>
                                        <span className='num'>32</span>
                                        <span className='flag'><img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569" /></span>
                                        <span>G. Brunengo</span>
                                    </div>

                                    <div className='jugador pos-1'>
                                        <span className='num'>32</span>
                                        <span className='flag'><img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569" /></span>
                                        <span>G. Brunengo</span>
                                    </div>

                                    <div className='jugador pos-1'>
                                        <span className='num'>32</span>
                                        <span className='flag'><img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569" /></span>
                                        <span>G. Brunengo</span>
                                    </div>

                                    <div className='jugador pos-1'>
                                        <span className='num'>32</span>
                                        <span className='flag'><img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569" /></span>
                                        <span>G. Brunengo</span>
                                    </div>

                                    <div className='jugador pos-2'>
                                        <span className='num'>32</span>
                                        <span className='flag'><img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569" /></span>
                                        <span>G. Brunengo</span>
                                    </div>

                                    <div className='jugador pos-3'>
                                        <span className='num'>32</span>
                                        <span className='flag'><img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569" /></span>
                                        <span>G. Brunengo</span>
                                    </div>

                                </div>

                                <div className="lista-jugadores"> {/* titulares visitante */}
                                    <div className='jugador pos-0'>
                                        <span className='num'>32</span>
                                        <span className='flag'><img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569" /></span>
                                        <span>G. Brunengo</span>
                                    </div>

                                    <div className='jugador pos-1'>
                                        <span className='num'>3</span>
                                        <span className='flag'><img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569" /></span>
                                        <span>G. Brunengo</span>
                                    </div>

                                    <div className='jugador pos-1'>
                                        <span className='num cap'>2</span>
                                        <span className='flag'><img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569" /></span>
                                        <span>G. Brunengo</span>
                                    </div>

                                    <div className='jugador pos-2'>
                                        <span className='num'>32</span>
                                        <span className='flag'><img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569" /></span>
                                        <span>G. Brunengo</span>
                                    </div>

                                    <div className='jugador pos-3'>
                                        <span className='num'>32</span>
                                        <span className='flag'><img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569" /></span>
                                        <span>G. Brunengo</span>
                                    </div>

                                    <div className='jugador pos-3'>
                                        <span className='num'>32</span>
                                        <span className='flag'><img src="https://tmssl.akamaized.net/images/flagge/verysmall/9.png?lm=1520611569" /></span>
                                        <span>G. Brunengo</span>
                                    </div>
                                </div>

                            </div>
                            <div className="header-formaciones"> SUPLENTES </div>
                            <div className="body-formaciones body-suplentes">

                                <div className="lista-jugadores"> {/* suplentes local */}
                                    <div className='jugador pos-0'> <span className='num'>32</span> <span>G. Brunengo</span></div>
                                    <div className='jugador pos-1'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-1'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-1'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-2'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-2'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-3'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-3'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-3'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-3'> <span className='num'>10</span> <span>L. Messi</span></div>
                                </div>

                                <div className="lista-jugadores"> {/* suplentes visitante */}
                                    <div className='jugador pos-0'> <span className='num'>32</span> <span>G. Brunengo</span></div>
                                    <div className='jugador pos-1'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-1'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-1'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-2'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-2'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-3'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-3'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-3'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-3'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-3'> <span className='num'>10</span> <span>L. Messi</span></div>
                                    <div className='jugador pos-3'> <span className='num'>10</span> <span>L. Messi</span></div>
                                </div>

                            </div>

                        </div>
                    </section>

                </div>

            </Offcanvas.Body>
        </Offcanvas>



    )
}

export default MatchCanvas