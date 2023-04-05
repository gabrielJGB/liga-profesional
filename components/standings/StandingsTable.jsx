import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table'
import TeamRow from './TeamRow'
import { DataContext } from '../../context/DataContext'

const StandingsTable = () => {
  const data = useContext(DataContext)

  return (
    <div className="standings-table">
      <div className='standings-title'>Tabla de puntos</div>
      <Table  striped={window.innerWidth<800?true:false} bordered  variant='dark' >
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>Pts</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PE</th>
            <th>PP</th>
            <th>GF</th>
            <th>GC</th>
            <th>Dif</th>
          </tr>
        </thead>
        <tbody>

          {
             data.standingsTable?
            data.standingsTable.map((team,i)=>(
              <TeamRow key={i} team={team} />
            ))
            :
            <></>
          }

        </tbody>
      </Table>
      <div style={{marginLeft:5}}>La tabla se actualiza automáticamente durante el transcurso de los partidos.</div>

    </div>

  )
}

export default StandingsTable