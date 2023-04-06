import React, { useEffect, useState } from 'react'

const ScorersTable = () => {
    const [deviceWidth, setDeviceWidth] = useState(false)


    useEffect(() => {
        setDeviceWidth(window.innerWidth-5)
    }, [])

    return (
        <div style={{ marginTop: 10 }}>
            <div style={{ marginBottom: 10, textAlign: "center" }}>Tabla de goleadores</div>
            {
                deviceWidth ?
                    <iframe width={((deviceWidth < 800 ? deviceWidth : (440)))} height="385" src={"https://www.fctables.com/argentina/torneo-inicial/iframe=/?type=top-scorers&lang_id=4&country=9&template=48&team=&timezone=America/Argentina/Tucuman&time=24&limit=10&ppo=1&pte=1&pgo=1&pma=1&pas=0&ppe=0&width=" + (deviceWidth < 800 ? deviceWidth : (440)) + "&height=385&font=Tahoma&fs=12&lh=32&bg=212529&fc=ffffff&logo=1&tlink=0&ths=1&thb=1&thba=121212&thc=ffffff&bc=303030&hob=212529&hobc=303030&lc=333333&sh=0&hfb=1&hbc=002261&hfc=FFFFFF"}></iframe> :
                    <></>
            }
        </div>
    )
}

export default ScorersTable