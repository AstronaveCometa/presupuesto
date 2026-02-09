import React from 'react'
import egresos from '../assets/egresos.json'
import Egreso from './Egreso'

const TablaEgresos = () => {
    const egresosArray = Object.values(egresos.egresos);
    console.log(egresosArray);
  return (
    <div>
        {egresosArray.map((ingreso, index) => (
            <Egreso key={index} nombre={egresos.nombre} cantidad={egresos.cantidad} fecha={egresos.fecha} />
        ))}
    </div>
  )
}

export default TablaEgresos
