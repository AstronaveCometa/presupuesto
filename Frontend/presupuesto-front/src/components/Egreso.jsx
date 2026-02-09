import React from 'react'

const Egreso = (nombre, cantidad, fecha) => {
  return (
    <div className='egreso'>
      <h2>{nombre}</h2>
      <p>{cantidad}</p>
      <p>{fecha}</p>
    </div>
  )
}

export default Egreso
