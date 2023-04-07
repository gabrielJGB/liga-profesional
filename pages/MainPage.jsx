import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import FixtureTable from '../components/fixture/FixtureTable'
import StandingsTable from '../components/standings/StandingsTable'
import FixtureButtons from '../components/fixture/FixtureButtons'
import HistoryCanvas from '../components/HistoryCanvas'
import MatchCanvas from '../components/MatchCanvas'
import FixtureArrows from '../components/fixture/FixtureArrows'
import { DataContext } from '../context/DataContext'

import Button from 'react-bootstrap/Button'
import ScorersTable from '../components/ScorersTable'


const MainPage = () => {
    const data = useContext(DataContext)

    return (

        <div>
            {
                data.loading ?
                    <div className="loading" style={{ textAlign: "center", color: "white", marginTop: 20, fontSize: 18 }}>Cargando partidos...</div>
                    :
                    data.error ?
                        <div style={{ flex: 1, flexDirection: "column", textAlign: "center", color: "white", marginTop: 20, fontSize: 18 }}>
                            <div> {"Ha ocurrido un error :("}</div>

                            <Button
                                style={{ marginTop: 30 }}
                                variant="primary"
                                size='lg'
                                onClick={() => { window.location.reload(false) }}
                            >Recargar</Button>

                        </div>
                        :
                        <div className="main-container">
                            <div>
                                <StandingsTable />
                                <ScorersTable/>
                            </div>
                            <div className="fixture-container">
                                <FixtureButtons />
                                <FixtureArrows />
                                <FixtureTable />

                            </div>

                            <HistoryCanvas />


                        </div >

            }
        </div>
    )
}



export default MainPage