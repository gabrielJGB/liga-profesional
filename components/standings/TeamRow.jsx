import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext'

const TeamRow = (props) => {
    const data = useContext(DataContext)
    const [color, setColor] = useState("")

    const clicked = () => {
        data.setShowEnd(true)
        data.setTeamToShow(props.team)
        // console.log(props.team)

    }

    useEffect(() => {
        if (data.obj) {
            getColor(props.team.equipo)
        }
    }, [data])


    const isPlaying = (team) => {
        let playing = data.obj.fechas.filter(fecha => fecha.partidos.some(partido => (partido.estado === "jugando") && (partido.local === team || partido.visitante === team)))
        return playing.length ? true : false
    }

    const getColor = (team) => {

        data.obj.fechas.forEach(fecha => {
            fecha.partidos.forEach(partido => {

                if (partido.estado === "jugando" && (partido.local === team || partido.visitante === team)) {


                    if (partido.resultado === "L" && partido.local === team || partido.resultado === "V" && partido.visitante === team) {
                        setColor("#00ff00")
                    } else if (partido.resultado === "V" && partido.local === team || partido.resultado === "L" && partido.visitante === team) {
                        setColor("#ff0000")
                    } else if (partido.resultado === "E") {
                        setColor("#ffd400")
                    } else {
                        setColor("white")
                    }
                    

                }
            })
        })

    }


    // let playing = data.obj.fechas.filter(fecha => fecha.partidos.some(partido => (partido.estado === "jugando") && (partido.local === team || partido.visitante === team)))

    // if (playing.length) {
    //     console.log(playing[0].partidos.find(partido =>partido.));
    // }

    //  backgroundColor: "#0f260c"
    return (
        <tr onClick={clicked} className="team-row">
            <td>{props.team.posicion}</td>
            <td
                className='team-name'
                style={{
                    textAlign: "left",
                    paddingLeft: 10,
                }}>

                <img style={{ marginRight: 5 }} src={"https://www.promiedos.com.ar/" + props.team.escudo} />
                {props.team.equipo}
                <span
                    className='dot'
                    style={{
                        display: (isPlaying(props.team.equipo) ? "" : "none"),
                        backgroundColor: (color)
                    }}
                ></span>

            </td>
            <td style={{ fontWeight: "bold" }}>{props.team.puntos}</td>
            <td>{props.team.PJ}</td>
            <td>{props.team.PG}</td>
            <td>{props.team.PE}</td>
            <td>{props.team.PP}</td>
            <td>{props.team.GF}</td>
            <td>{props.team.GC}</td>
            <td>{props.team.dif}</td>
        </tr>
    )
}

export default TeamRow