import React from 'react'
import ingresos from '../assets/ingresos.json'
import Ingreso from './Ingreso'

const TablaIngresos = () => {
    const ingresosArray = Object.values(ingresos.ingresos);
    console.log(ingresosArray);
  return (
    <div>
        {ingresosArray.map((ingreso, index) => (
            <Ingreso key={index} nombre={ingreso.nombre} cantidad={ingreso.cantidad} fecha={ingreso.fecha} />
        ))}
    </div>
  )
}

export default TablaIngresos
