import React, { useContext, useEffect, useState } from 'react'
import DateRow from './DateRow'
import MatchRow from './MatchRow'
import Table from 'react-bootstrap/Table'
import { DataContext } from '../../context/DataContext'

const FixtureTable = (props) => {
    const data = useContext(DataContext)
    const [rowsArray, setRowsArray] = useState(null)



    useEffect(() => {


        if (data.obj) {
            let fecha_actual = parseInt(data.obj.fecha_actual)
            data.setSelected(fecha_actual)

        }
    }, [data.obj])


    useEffect(() => {
        if (data.obj && data.selected) {

            let arr = []
            let dia = ""

            data.obj.fechas[data.selected - 1].partidos.forEach(partido => {
                if (partido.dia != dia) {
                    arr.push(partido.dia)
                    dia = partido.dia
                }
                arr.push(partido)
            })

            setRowsArray(arr)
        }
    }, [data.selected, data.obj])




    return (
        <div className='fixture-table'>
            <Table bordered variant='dark'>
                <tbody>

                    {
                        rowsArray ?
                            rowsArray.map((row, i) => {
                                if (typeof (row) === "string")
                                    return (<DateRow key={i} date={row} />)
                                else
                                    return (
                                            <MatchRow key={i} match={row} />
                                            
                                    )
                            })
                            :
                            <></>
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default FixtureTable