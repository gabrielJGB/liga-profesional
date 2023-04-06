import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import Table from 'react-bootstrap/Table'

const Club = () => {
  const data = useContext(DataContext)
  const [club, setClub] = useState(false)

  const modifyNames = (clubs) => {


    clubs.forEach(club => {
      if (club.nombre_equipo === "Argentinos Juniors") {

        club.nombre_equipo = "Argentinos"

      }
      else if (club.nombre_equipo === "Arsenal de Sarandí") {
        club.nombre_equipo = "Arsenal"

      }
      else if (club.nombre_equipo === "Atlético Tucumán") {
        club.nombre_equipo = "Atl Tucuman"

      }

      else if (club.nombre_equipo === "CA Aldosivi") { // ------------------
        club.nombre_equipo = ""

      }
      else if (club.nombre_equipo === "CA Patronato") { // ---------------------
        club.nombre_equipo = ""

      }
      else if (club.nombre_equipo === "Platense") {
        club.nombre_equipo = "Platense"

      }
      else if (club.nombre_equipo === "Sarmiento") {
        club.nombre_equipo = "Sarmiento (J)"

      }
      else if (club.nombre_equipo === "CA Talleres") {
        club.nombre_equipo = "Talleres (C)"

      }
      else if (club.nombre_equipo === "CA Tigre") {
        club.nombre_equipo = "Tigre"

      }
      else if (club.nombre_equipo === "Central Córdoba SdE") {
        club.nombre_equipo = "Central Cba (SdE)"

      }
      else if (club.nombre_equipo === "Colón") {
        club.nombre_equipo = "Colon"

      }
      else if (club.nombre_equipo === "Defensa y Justicia") {
        club.nombre_equipo = "Def y Justicia"

      }
      else if (club.nombre_equipo === "Estudiantes de LP") {
        club.nombre_equipo = "Estudiantes (LP)"

      }
      else if (club.nombre_equipo === "Gimnasia La Plata") {
        club.nombre_equipo = "Gimnasia (LP)"

      }

      else if (club.nombre_equipo === "Huracán") {
        club.nombre_equipo = "Huracan"

      }

      else if (club.nombre_equipo === "Lanús") {
        club.nombre_equipo = "Lanus"

      }
      else if (club.nombre_equipo === "Newell’s Old Boys") {
        club.nombre_equipo = "Newells"

      }


      else if (club.nombre_equipo === "Unión Santa Fe") {
        club.nombre_equipo = "Union"

      }
      else if (club.nombre_equipo === "Vélez Sársfield") {
        club.nombre_equipo = "Velez"

      }
    })



  }

  const getClassName = (pos)=>{

    if(pos === "PO"){
      return "pos-0"
    }else if(pos[0] === "D"){
      return "pos-1"

    }
    else if(pos.includes("A")){
      return "pos-3"
    }
    else if(pos[0] === "M"){
      return "pos-2"
    }

  }

  const location = useLocation()

  useEffect(() => {
    if (data.clubs) {
      modifyNames(data.clubs)

      data.clubs.forEach(club => {
        if (club.nombre_equipo === location.state.club) {
          setClub(club)
        }
      })
    }
  }, [])

  return (
    <div className='club-main-container'>
      {
        club ?
          <>
            <div className='club-info-container'>
              <div className='club-img'>
                <img width={90} height={90} src={club.escudo} />
                <span className='club-name'>{club.nombre_equipo}</span>
              </div>
              <div className='club-info'>
                <div>
                  <div className='club-info-div'>{club.tecnico}</div>
                  <div className='club-info-title'>Tecnico</div>
                </div>
                <div>
                  <div className='club-info-div'>{club.fundacion}</div>
                  <div className='club-info-title'>Fundación</div>
                </div>
                <div>
                  <div className='club-info-div'>{club.estadio}</div>
                  <div className='club-info-title'>Estadio</div>
                </div>
                <div>
                  <div className='club-info-div'>{club.ubicacion}</div>
                  <div className='club-info-title'>Ciudad</div>
                </div>
              </div>
            </div>

            <Table className='player-table' bordered variant='dark'>
              <thead>
                <tr>
                  <th>Num</th>
                  <th>Foto</th>
                  <th>Nombre</th>
                  <th>Pos</th>
                  <th>Origen</th>
                  <th>Edad</th>
                </tr>
              </thead>
              <tbody>

                {
                  club.jugadores.map((jugador,i) => (
                    <tr key={i} className={getClassName(jugador.posicion_codigo)}>
                      <td>{jugador.numero === "0"?"-":jugador.numero}</td>
                      <td>
                        <img width={40} height={40} src={jugador.link_foto} alt={jugador.nombre_completo} />
                      </td>
                      <td>{jugador.nombre_completo}</td>
                      <td>{jugador.posicion_codigo}</td>
                      <td>{jugador.pais}</td>
                      <td>{jugador.edad}</td>
                    </tr>
                  ))
                }

              </tbody>
            </Table>
          </>
          :
          <></>
      }
    </div>
  )
}

export default Club