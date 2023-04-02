import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { DataContext } from '../../context/DataContext'

const FixtureArrows = () => {
    const data = useContext(DataContext)
    const variant = "success"

    return (
        <div className='fixture-arrows'>
            <Button
                variant={variant}
                size='lg'
                style={{ fontSize: 15 }}
                onClick={()=>{data.setSelected(prev=>{
                    let fecha = prev-1
                    
                    if(fecha > 0 && fecha <= data.obj.fechas.length){
                        return fecha
                    }else{
                        return prev
                    }
                })}}
            
            >{"<"} </Button>

            <div>Fecha {data.selected}</div>
            
            <Button
                variant={variant}
                size='lg'
                style={{ fontSize: 15 }}
                onClick={()=>{data.setSelected(prev=>{
                    let fecha = prev+1
                       
                    if(fecha > 0 && fecha <= data.obj.fechas.length){
                        return fecha
                    }else{
                        return prev
                    }

                })}}
            
            >{">"} </Button>

        </div>
    )
}

export default FixtureArrows