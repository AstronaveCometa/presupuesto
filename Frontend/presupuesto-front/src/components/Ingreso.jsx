import React from 'react'

const Ingreso = (props) => {
  return (
    <div className='ingreso'>
      <h2>{props.nombre}</h2>
      <p>{props.cantidad}</p>
      <p>{props.fecha}</p>
    </div>
  )
}

export default Ingreso
