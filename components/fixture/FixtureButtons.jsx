import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { DataContext } from '../../context/DataContext';
import ProgressBar from 'react-bootstrap/ProgressBar';

const FixtureButtons = () => {
  const data = useContext(DataContext)
  const variant = "success"


  return (
    <div className='fixture-buttons'>
      {

        data.obj ?
          data.obj.fechas.map((e, key) => (
            
              <Button
                variant={data.selected === e.fecha ? variant : "outline-" + variant}
                size='sm'
                className='fixture-button'
                key={key}
                onClick={() => {
                  data.setSelected(e.fecha)
                }}

              >{e.fecha}</Button>
            
          ))
          :
          <></>
        }
        <ProgressBar now={50} label={"P"} visuallyHidden />
    </div>
  )
}

export default FixtureButtons