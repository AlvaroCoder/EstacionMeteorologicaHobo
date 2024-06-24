'use client'
import React from 'react'
import { NavLinks } from './components'
import Link from 'next/link'

export default function Dashboard() {
  const links = [
    { routeName: "Inicio", routeHref:'/dashboard'},
    {routeName : "Temperatura", routeHref:"/dashboard/temperatura"},
    {routeName:"Punto de Rocio", routeHref:"/dashboard/puntoRocio"},
    { routeName : "Radiacion Solar", routeHref : '/dashboard/radiacion'},
    {routeName:"Lluvia", routeHref:"/dashboard/lluvia"},
    {routeName : "Velocidad del Viento", routeHref:"/dashboard/windspeed"},
    {routeName:"Dirección del Viento", routeHref:"/dashboard/winddirection"}
  ]
  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <Link 
        className='mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40'
        href={'/'}>
        <div className='w-32 text-white md:w-40'>
          <h1>Estación Meteorologica UDEP</h1>
        </div>

      </Link>
      <div className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        {links.map((elem,idx)=>(<NavLinks key={idx} {...elem} />))}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
      
    </div>
)
}
