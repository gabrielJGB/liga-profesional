import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataContext'
import ball from '../../src/ball.png'

const MatchRow = (props) => {
    const data = useContext(DataContext)
    const [displayTr, setDisplayTr] = useState('none')


    const toggleDisplay = () => {
        if (displayTr === "none") {
            setDisplayTr("")
        } else {
            setDisplayTr("none")
        }
    }

    

    return (
        <>
            <tr className='match-row' onClick={() => {
                data.setMatchToShow(props.match.id)
                data.setShowBottom(true)
                toggleDisplay()
            }}>

                <td style={{ width: "15%" }}
                    className={props.match.estado === "jugando" ? "cronometro" : (props.match.estado === "finalizado" ? "fin" : "")}
                >{props.match.cronometro}</td>
                <td className="box" style={{ fontWeight: (props.match.resultado === "L" ? "bold" : "") }}>
                    <div></div>
                    <div>
                        <img style={{ marginRight: 5 }} src={"https://www.promiedos.com.ar/" + props.match.escudo_local} />
                        <span>{props.match.local}</span>
                    </div>

                    <div className="box">
                        {
                            Array.from(Array(props.match.rojas_local)).map((el, i) => (
                                <span key={i} className="roja"></span>
                            ))
                        }
                    </div>

                </td>

                <td style={{fontSize:13, width: "8%" }}>{props.match.goles_local}</td>
                <td style={{fontSize:13, width: "8%" }}>{props.match.goles_visitante}</td>

                <td className="box" style={{ fontWeight: (props.match.resultado === "V" ? "bold" : "") }}>
                    <div className="box">
                        {
                            Array.from(Array(props.match.rojas_visitante)).map((el, i) => (
                                <span key={i} className="roja"></span>
                            ))
                        }
                    </div>
                    <div>
                        <img style={{ marginRight: 5 }} src={"https://www.promiedos.com.ar/" + props.match.escudo_visitante} />
                        <span>{props.match.visitante}</span>
                    </div>
                    <div></div>
                </td>
            </tr>
            <tr style={{ display: (displayTr) }} >
                <td></td>
                <td colSpan={2}>
                    {props.match.autores_local.map((autor, i) => {
                        {
                            if (autor != "") {

                                return (<div className='scorers' key={i}>
                                    <img src={ball} />
                                    <div >{autor}</div>
                                </div>)
                            } else {
                                return ""
                            }
                        }
                    })}
                </td>

                <td colSpan={3}>
                    {props.match.autores_visitante.map((autor, i) => {
                        {
                            if (autor != "") {

                                return (<div className='scorers' key={i}>
                                    <img src={ball} />
                                    <div >{autor}</div>
                                </div>)
                            } else {
                                return ""
                            }
                        }
                    })}
                </td>
            </tr>

        </>
    )
}


export default MatchRow