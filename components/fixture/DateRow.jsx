import React from 'react'

const DateRow = (props) => {
    return (
        <tr >
            <td className='day-row' colSpan={5} >{props.date}</td>
        </tr>
    )
}

export default DateRow