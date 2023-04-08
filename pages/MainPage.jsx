import React from 'react'
import { useContext } from 'react'
import FixtureTable from '../components/fixture/FixtureTable'
import StandingsTable from '../components/standings/StandingsTable'
import FixtureButtons from '../components/fixture/FixtureButtons'
import HistoryCanvas from '../components/HistoryCanvas'
import FixtureArrows from '../components/fixture/FixtureArrows'
import ScorersTable from '../components/ScorersTable'
import Error from '../components/Error'
import Loading from '../components/Loading'
import { DataContext } from '../context/DataContext'


const MainPage = () => {
    const data = useContext(DataContext)

    return (

        <div>
            {
                data.loading ?
                    <Loading />
                    :
                    data.error ?
                        <Error />
                        :
                        <div className="main-container">
                            <div>
                                <StandingsTable />
                                <ScorersTable />
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