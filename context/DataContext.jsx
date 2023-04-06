import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext({
  obj: null,
  loading: null,
  error: null,
  selected: null,
  setSelected: null,
  standingsTable: null,
  setStandingsTable: null,
  showEnd: null,
  setShowEnd: null,
  teamToShow: null,
  setTeamToShow: null,
  teamHistory: null,
  setTeamHistory: null,
  matchToShow: null,
  setMatchToShow: null,
  showBottom: null,
  setShowBottom: null,
  matchInfo: null,
  clubs: null
})

export function DataProvider({ children }) {

  const [obj, setObj] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState(null);
  const [standingsTable, setStandingsTable] = useState(null);
  const [showEnd, setShowEnd] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const [teamToShow, setTeamToShow] = useState(false);
  const [teamHistory, setTeamHistory] = useState(false);
  const [matchToShow, setMatchToShow] = useState(false);
  const [matchInfo, setMatchInfo] = useState(false);
  const [playingArr, setPlayingArr] = useState(false);
  const [clubs, setClubs] = useState(false)

  // document.addEventListener('onKeyPress', (event) => {
  //   console.log(event)
  //   setSelected(prev => {
  //     let fecha
  //     if (event.key === "ArrowLeft") {
  //       fecha = prev - 1
  //     } else if (event.key === "ArrowRight") {
  //       fecha = prev + 1
  //     }
  //     if (fecha > 0 && fecha <= obj.fechas.length) {
  //       return fecha
  //     } else {
  //       return prev
  //     }
  //   })
  // })


  useEffect(() => {

    setLoading(true)
    fetch("https://gabrieljgb.github.io/pr-task/datos.json")
      .then(resp => resp.json())
      .then(parsed => {
        setObj(parsed)

        setStandingsTable(calculateStandingsTable(parsed.fechas))

      })
      .catch(error => {
        console.log(error)
        setError(error)
      })

    fetch("https://gabrieljgb.github.io/pr-task/planteles.json")
      .then(resp => resp.json())
      .then(parsed => {

        setClubs(parsed.paises[0].equipos)
      })
      .catch(error => {
        console.log(error)
        setError(error)
      })


  }, [])





  useEffect(() => {


    if (teamToShow) {

      let fullArr = []

      obj.fechas.forEach(fecha => {
        let arr = fecha.partidos.filter(partido => partido.local === teamToShow.equipo || partido.visitante === teamToShow.equipo)

        if (arr.length > 0) {
          fullArr.push(arr[0])
        }

      })

      setTeamHistory(fullArr)


    }

  }, [teamToShow])


  useEffect(() => {

    if (matchToShow) {

      let matchId

      obj.fechas.forEach(fecha => {
        matchId = fecha.partidos.filter(partido => matchToShow === partido.id)
        if (matchId.length > 0) {
          matchId[0]["fecha"] = fecha.fecha
          setMatchInfo(matchId[0])
        }
      })
    }

  }, [matchToShow])




  useEffect(() => {

    updateplayingArr()


  }, [playingArr])


  // useEffect(() => {
  //   setTimeout(() => {
  //       setPlayingArr([
  //         {
  //           "id":"132",
  //           "st":"1",
  //           "r1":"1",
  //           "r2":"1",
  //           "ti":"68",
  //           "g1":"",
  //           "g2":"",
  //           "roj1":[],
  //           "roj2":[]
  //         }
  //       ])
  //   }, 2000);

  // }, [])

  let partido_viejo = null

  const updateplayingArr = () => {
    if (obj) {
      if (playingArr.length > 0) {
        setObj(prevObj => {
          playingArr.forEach(partido_nuevo => {
            prevObj.fechas.forEach(fecha => {
              fecha.partidos.forEach(partido => {
                if (partido.id == partido_nuevo.id) {
                  partido_viejo = partido




                  partido.goles_local = partido_nuevo.r1 === "" ? "" : parseInt(partido_nuevo.r1)
                  partido.goles_visitante = partido_nuevo.r2 === "" ? "" : parseInt(partido_nuevo.r2)
                  partido.estado = getStatus(partido_nuevo)
                  partido.cronometro = getLabel(partido.estado, partido_nuevo.ti)
                  partido.resultado = getResult(partido.goles_local, partido.goles_visitante)
                  partido.rojas_local = parseInt(partido_nuevo.roj1)
                  partido.rojas_visitante = parseInt(partido_nuevo.roj2)
                  partido.autores_local = getScorerArr(partido_nuevo.g1)
                  partido.autores_visitante = getScorerArr(partido_nuevo.g2)
                  //ver grito de gol y resaltado. Idea: usando useRef. Setear la id como Ref en el div de los goles y hacer referencia a eso aca

                  // if(partido.goles_local != partido_viejo.goles_local){

                  //   console.log("hubo gol [L]",partido.id, new Date())
                  // }else if( partido.goles_visitante != partido_viejo.goles_visitante){
                  //   console.log("hubo gol [V]",partido.id,new Date())
                  // }
                  // else{
                  //   console.log("no hubo gol",partido.id,new Date());
                  // }




                }
              })
            })
          })
          setStandingsTable(calculateStandingsTable(prevObj.fechas))

          return prevObj
        })





      }
    }

    const getScorerArr = (g) => {
      return g.trim().slice(0, -1).split("; ").map(score => (score.replace("<i>", "").replace("</i>", "")))
    }

    const getLabel = (estado, cronometro) => {


      if (estado === "jugando" || estado === "no empezado") {
        return cronometro + (cronometro != "E. T." && !cronometro.includes(":") ? "\'" : "")

      } else if (estado === "finalizado") {
        return "Final"
      }

    }

    const getStatus = (partido_nuevo) => {
      const st = partido_nuevo.st

      if (st === "1" || st === "2" || st === "3") {
        return "jugando"
      } else if (st === "0") {
        return "no empezado"
      } else if (st === "4") {
        return "finalizado"
      } else {
        return "suspendido"
      }


    }

    const getResult = (goles_local, goles_visitante) => {
      if (goles_local != NaN && goles_visitante != NaN) {
        if (goles_local === goles_visitante) {
          return "E"
        } else if (goles_local > goles_visitante) {
          return "L"
        } else if (goles_local < goles_visitante) {
          return "V"
        } else {
          return ""
        }
      }
    }


  }

  let interval = null





  useEffect(() => {

    if (interval != null) {
      clearInterval(interval)
    }
    fetchScores()

    interval = setInterval(() => {
      fetchScores()
    }, 30000);

  }, [])




  const fetchScores = () => {

    let url = "https://cors-proxy-alt.onrender.com/https://www.promiedos.com.ar/scores84mjd7.json"
    let req_info = { headers: { 'X-Requested-With': 'XMLHttpRequest' } }
    fetch(url, req_info)
      .then(resp => resp.json())
      .then(parsed => {
        let x = parsed.pa.filter(partido => partido.li === "1") // 1 : argentina

        setPlayingArr(x)
      })
      .catch(error => {
        console.log(error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })

  }





  function calculateStandingsTable(fechas) {

    let equipos = []
    fechas[0].partidos.forEach(partido => {

      equipos.push({ "nombre": partido.local, "escudo": partido.escudo_local })
      equipos.push({ "nombre": partido.visitante, "escudo": partido.escudo_visitante })

    })



    let info_tabla = []
    let id_equipo = 0
    equipos.forEach(equipo => {
      let { goles_favor, goles_contra, dif_goles } = getInfoGoles(equipo.nombre, fechas)
      let { jugados, ganados, empatados, perdidos } = getInfoPartidos(equipo.nombre, fechas)
      let puntos = ganados * 3 + empatados

      info_tabla.push({
        "id": id_equipo++,
        "escudo": equipo.escudo,
        "equipo": getNombreCorto(equipo.nombre),
        "PJ": jugados,
        "puntos": puntos,
        "PG": ganados,
        "PE": empatados,
        "PP": perdidos,
        "GF": goles_favor,
        "GC": goles_contra,
        "dif": dif_goles
      })
    })



    // info_tabla.sort((a, b) => a.equipo.localeCompare(b.equipo))
    // info_tabla.sort(((a, b) => b.puntos - a.puntos))

    info_tabla.sort((a, b) => {
      let n = b.puntos - a.puntos
      if (n != 0) {
        return n
      }
      return b.dif - a.dif

    })


    let pos = 0
    info_tabla.forEach(equipo => {
      equipo.posicion = ++pos
    })


    return info_tabla
  }







  function getInfoGoles(equipo, fechas) {
    let goles_favor = 0
    let goles_contra = 0
    let dif_goles = 0

    fechas.forEach(fecha => {
      fecha.partidos.forEach(partido => {
        if (partido.local == equipo) {
          goles_favor += partido.goles_local != "" ? partido.goles_local : 0
          goles_contra += partido.goles_visitante != "" ? partido.goles_visitante : 0

        } else if (partido.visitante == equipo) {
          goles_favor += partido.goles_visitante != "" ? partido.goles_visitante : 0
          goles_contra += partido.goles_local != "" ? partido.goles_local : 0

        }
      })
    })

    dif_goles = goles_favor - goles_contra

    return { goles_favor, goles_contra, dif_goles }
  }


  function getInfoPartidos(equipo, fechas) {
    let jugados = 0
    let ganados = 0
    let empatados = 0
    let perdidos = 0
    fechas.forEach(fecha => {
      fecha.partidos.forEach(partido => {
        if (partido.local == equipo || partido.visitante == equipo) {
          if (partido.resultado != "") {
            jugados++
          }
        }

        if ((partido.local == equipo && partido.resultado == "L") || (partido.visitante == equipo && partido.resultado == "V")) {
          ganados++
        }

        if ((partido.local == equipo && partido.resultado == "E") || (partido.visitante == equipo && partido.resultado == "E")) {
          empatados++
        }

        if ((partido.local == equipo && partido.resultado == "V") || (partido.visitante == equipo && partido.resultado == "L")) {
          perdidos++
        }

      })
    })
    return { jugados, ganados, empatados, perdidos }


  }


  function getNombreCorto(equipo) {
    if (equipo == "Argentinos Juniors") {
      return "Argentinos"
    } else if (equipo == "Atlético Tucumán") {
      return "Atl. Tucumán"
    } else if (equipo == "Central Córdoba (SdE)") {
      return "Central Cba."
    } else if (equipo == "Defensa y Justicia") {
      return "Def y Justicia"
    } else if (equipo == "Gimnasia y Esgrima (LP)") {
      return "Gimnasia (LP)"
    } else if (equipo == "Newell's Old Boys") {
      return "Newells"
    } else {
      return equipo
    }
  }



  const contextValue = {
    obj,
    loading,
    error,
    selected,
    setSelected,
    standingsTable,
    setStandingsTable,
    showEnd,
    setShowEnd,
    teamToShow,
    setTeamToShow,
    teamHistory,
    setTeamHistory,
    matchToShow,
    setMatchToShow,
    showBottom,
    setShowBottom,
    matchInfo,
    clubs

  }

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider