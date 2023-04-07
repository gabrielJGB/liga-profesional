import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import Table from 'react-bootstrap/Table'

const Club = () => {
  const data = useContext(DataContext)
  const [club, setClub] = useState(false)

  const modifyNames = (clubs) => {


    clubs.forEach(club => {
      if (club.equipo === "CA River Plate") {
        club.equipo = "River Plate"
      }else if(club.equipo === "CA Boca Juniors"){
        club.equipo = "Boca Juniors"
      }else if(club.equipo === "CA Vélez Sarsfield"){
        club.equipo = "Velez"
      }else if(club.equipo === "Racing Club"){
        club.equipo = "Racing Club"
      }else if(club.equipo === "Club Atlético Talleres"){
        club.equipo = "Talleres (C)"
      }else if(club.equipo === "CA San Lorenzo de Almagro"){
        club.equipo = "San Lorenzo"
      }else if(club.equipo === "Club Atlético Tigre"){
        club.equipo = "Tigre"
      }else if(club.equipo === "CA Huracán"){
        club.equipo = "Huracan"
      }else if(club.equipo === "Club Atlético Lanús"){
        club.equipo = "Lanus"
      }else if(club.equipo === "CSD Defensa y Justicia"){
        club.equipo = "Def y Justicia"
      }else if(club.equipo === "Club Estudiantes de La Plata"){
        club.equipo = "Estudiantes (LP)"
      }else if(club.equipo === "CA Newells Old Boys"){
        club.equipo = "Newells"
      }else if(club.equipo === "Club Atlético Colón"){
        club.equipo = "Colon"
      }else if(club.equipo === "CA Rosario Central"){
        club.equipo = "Rosario Central"
      }else if(club.equipo === "AA Argentinos Juniors"){
        club.equipo = "Argentinos"
      }else if(club.equipo === "CA Banfield"){
        club.equipo = "Banfield"
      }else if(club.equipo === "Club de Gimnasia y Esgrima La Plata"){
        club.equipo = "Gimnasia (LP)"
      }else if(club.equipo === "Club Atlético Tucumán"){
        club.equipo = "Atl Tucuman"
      }else if(club.equipo === "CA Independiente"){
        club.equipo = "Independiente"
      }else if(club.equipo === "Club Atlético Belgrano"){
        club.equipo = "Belgrano"
      }else if(club.equipo === "CD Godoy Cruz Antonio Tomba"){
        club.equipo = "Godoy Cruz"
      }else if(club.equipo === "Club Atlético Unión"){
        club.equipo = "Union"
      }else if(club.equipo === "CA Platense"){
        club.equipo = "Platense"
      }else if(club.equipo === "Instituto AC Córdoba"){
        club.equipo = "Instituto"
      }else if(club.equipo === "CA Sarmiento (Junín)"){
        club.equipo = "Sarmiento (J)"
      }else if(club.equipo === "CA Central Córdoba (SdE)"){
        club.equipo = "Central Cordoba (SdE)"
      }else if(club.equipo === "CA Barracas Central"){
        club.equipo = "Barracas Central"
      }else if(club.equipo === "Arsenal Fútbol Club"){
        club.equipo = "Arsenal"
      }
      
      
    })



  }

  const getClassName = (pos)=>{

    if(pos === "Portero"){
      return "pos-0"
    }else if(pos === "Defensa"){
      return "pos-1"
    }
    else if(pos === "Medio campo"){
      return "pos-2"
    }
    else if(pos === "Delantero"){
      return "pos-3"
    }

  }

  const location = useLocation()

  useEffect(() => {
    if (data.clubs) {
      modifyNames(data.clubs)
  
      data.clubs.forEach(club => {
        if (club.equipo === location.state.club) {
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
                <img width={90} height={120} src={club.img_escudo} />
                <span className='club-name'>{club.equipo}</span>
              </div>
              <div className='club-info'>

                <div>
                  <div className='club-info-div'>{club.estadio}</div>
                  <div className='club-info-title'>Estadio</div>
                </div>
                <div>
                  <div className='club-info-div'>{club.capacidad}</div>
                  <div className='club-info-title'>Capacidad</div>
                </div>
                <div>
                  <div className='club-info-div'>{club.prom_edad} años</div>
                  <div className='club-info-title'>Promedio edad</div>
                </div>

              </div>
            </div>

            <Table className='player-table' bordered variant='dark'>
              <thead>
                <tr>
                  <th>Num</th>
                  <th>Foto</th>
                  <th>Nombre</th>
                  <th>Posición</th>
                  <th>Nac.</th>
                  <th>Edad</th>
                </tr>
              </thead>
              <tbody>

                {
                  club.jugadores.map((jugador,i) => (
                    <tr key={i} className={getClassName(jugador.pos)}>
                      <td>{jugador.numero}</td>
                      <td>
                        <img width={40} height={40} src={jugador.img_jugador} alt={jugador.nombre_corto} />
                      </td>
                      <td style={{padding:5}}>{jugador.nombre_completo}</td>
                      <td>{jugador.pos_completa}</td>
                      <td>
                        {
                          jugador.nacionalidad.map((flag,i)=>(
                            <img key={i} style={{padding:2}} src={flag.img_bandera} alt={flag.pais} />
                          ))
                        }
                      </td>
                      <td>{jugador.edad.split(" (")[1].slice(0,-1)}</td>
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