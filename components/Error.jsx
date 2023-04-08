import React from 'react'
import Button from 'react-bootstrap/Button'

const Error = () => {
  return (
    <div style={{ flex: 1, flexDirection: "column", textAlign: "center", color: "white", marginTop: 20, fontSize: 18 }}>
                            <div> {"Ha ocurrido un error :("}</div>

                            <Button
                                style={{ marginTop: 30 }}
                                variant="primary"
                                size='lg'
                                onClick={() => { window.location.reload(false) }}
                            >Recargar</Button>

                        </div>
  )
}

export default Error