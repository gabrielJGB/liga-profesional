import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import FixtureTable from '../components/fixture/FixtureTable'
import StandingsTable from '../components/standings/StandingsTable'
import FixtureButtons from '../components/fixture/FixtureButtons'
import HistoryCanvas from '../components/HistoryCanvas'
import MatchCanvas from '../components/MatchCanvas'
import FixtureArrows from '../components/fixture/FixtureArrows'
import { DataContext } from '../context/DataContext'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


const MainPage = () => {
    const data = useContext(DataContext)

    const [deviceWidth, setDeviceWidth] = useState(false)


    useEffect(() => {

        setDeviceWidth(window.innerWidth-4)

    }, [])


    return (


        <div>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand style={{ color: "white" }}>Liga Profesional 2023</Navbar.Brand>
                </Container>
            </Navbar>


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

                                <div style={{  marginTop: 10 }}>
                                    <div style={{ marginBottom: 10, textAlign:"center" }}>Goleadores</div>
                                    {
                                        deviceWidth?
                                            <iframe width={((deviceWidth<800?deviceWidth:(440)))} height="385" src={"https://www.fctables.com/argentina/torneo-inicial/iframe=/?type=top-scorers&lang_id=4&country=9&template=48&team=&timezone=America/Argentina/Tucuman&time=24&limit=10&ppo=1&pte=1&pgo=1&pma=1&pas=0&ppe=0&width=" + (deviceWidth<800?deviceWidth:(440)) + "&height=385&font=Tahoma&fs=12&lh=32&bg=212529&fc=ffffff&logo=1&tlink=0&ths=1&thb=1&thba=121212&thc=ffffff&bc=303030&hob=212529&hobc=303030&lc=333333&sh=0&hfb=1&hbc=002261&hfc=FFFFFF"}></iframe> :
                                            <></>
                                    }
                                </div>
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