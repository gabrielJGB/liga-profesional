import React, { useContext } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext'


const HistoryCanvas = () => {
    const data = useContext(DataContext)
    const handleCloseEnd = () => data.setShowEnd(false);
    const handleShowEnd = () => data.setShowEnd(true);

    const getResultColor = (match) => {
        if (match.local === data.teamToShow.equipo && match.resultado === "L" || match.visitante === data.teamToShow.equipo && match.resultado === "V") {
            return "#0c7c0c"
        } else if (match.visitante === data.teamToShow.equipo && match.resultado === "L" || match.local === data.teamToShow.equipo && match.resultado === "V") {
            return "#c70202"
        } else if (match.resultado === "E") {
            return "#d7d705"
        }

    }

    const formatDate = (date) => {

        let day = date.match(/\d+/)
        let fechaLower = date.toLowerCase()
        if (day) {


            let month

            if (fechaLower.includes("enero")) {
                month = 1
            } else if (fechaLower.includes("febrero")) {
                month = 2
            } else if (fechaLower.includes("marzo")) {
                month = 3
            } else if (fechaLower.includes("abril")) {
                month = 4
            } else if (fechaLower.includes("mayo")) {
                month = 5
            } else if (fechaLower.includes("junio")) {
                month = 6
            } else if (fechaLower.includes("julio")) {
                month = 7
            } else if (fechaLower.includes("agosto")) {
                month = 8
            } else if (fechaLower.includes("septiembre")) {
                month = 9
            } else if (fechaLower.includes("octubre")) {
                month = 10
            } else if (fechaLower.includes("noviembre")) {
                month = 11
            } else if (fechaLower.includes("diciembre")) {
                month = 12
            }


            return day + "/" + month
        }
        else if (fechaLower === "a confirmar") {
            return "-"
        } else {
            return "Susp."
        }
    }

    return (
        <Offcanvas
            scroll={true}
            backdrop={false}
            backdropClassName='backdrop'
            placement='end' show={data.showEnd}
            onHide={handleCloseEnd}
        >
            <Offcanvas.Header style={{ backgroundColor: "#212529", color: "white" }} closeButton >
                <Offcanvas.Title>
                    <img style={{ marginRight: 5, marginBottom: 4 }} src={"https://www.promiedos.com.ar/" + data.teamToShow.escudo} />
                    {data.teamToShow.equipo}


                    <Link to="/club" state= {{ "club":data.teamToShow.equipo }}>

                        <Button style={{ marginLeft: 15 }} variant='outline-info' size='sm'>Plantel</Button>

                    </Link>


                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ backgroundColor: "#212529", color: "white" }}>

                <div className='history-table'>
                    <Table bordered variant='dark' >
                        <tbody>
                            {
                                data.teamHistory ?
                                    data.teamHistory.map((match, i) => (
                                        <tr key={i} className='history-row' onClick={() => {
                                            data.setMatchToShow(match.id)
                                            data.setShowEnd(true)
                                        }}
                                        >
                                            <td className='number'>{i + 1}</td>
                                            <td className='date'>{formatDate(match.dia)}</td>
                                            <td >
                                                {
                                                    match.local === data.teamToShow.equipo ? "L" : "V"
                                                }
                                            </td>
                                            <td className='rival'>{match.local === data.teamToShow.equipo ?
                                                (<>
                                                    <img style={{ marginRight: 5 }} src={"https://www.promiedos.com.ar/" + match.escudo_visitante} />
                                                    <div>{match.visitante}</div>
                                                </>
                                                )
                                                :
                                                (<>
                                                    <img style={{ marginRight: 5 }} src={"https://www.promiedos.com.ar/" + match.escudo_local} />
                                                    <div>{match.local}</div>
                                                </>
                                                )}
                                            </td>
                                            <td className='result' style={{ color: (getResultColor(match) === "#d7d705" ? "black" : "white"), backgroundColor: (getResultColor(match)) }}>
                                                {match.local === data.teamToShow.equipo ?
                                                    (match.goles_local + "-" + match.goles_visitante)
                                                    :
                                                    (match.goles_visitante + "-" + match.goles_local)
                                                }
                                            </td>
                                        </tr>
                                    ))
                                    :
                                    <></>
                            }

                        </tbody>
                    </Table>
                </div>
            </Offcanvas.Body>
        </Offcanvas>

    )
}

export default HistoryCanvas