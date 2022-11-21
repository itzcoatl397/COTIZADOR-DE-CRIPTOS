import React from 'react'

export const Alerta = ({mensaje}) => {
  return (
    <div className="bg-red-600 w-7/6 p-2 mb-5 rounded-full">
    <h2 className="text-white font-bold text-center uppercase">
    {mensaje}
    </h2>
  </div>
  )
}
