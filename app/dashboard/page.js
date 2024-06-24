'use client'
import { useFetch } from '@/lib/customHooks'
import { formatearFechaHora } from '@/lib/formatterTime';
import ChartLine from '@/ui/components/dashboard/ChartLine'
import Link from 'next/link';
import React from 'react'

export default function Page() {
  const fechaHoy = new Date();
  const fechaFinal = formatearFechaHora(fechaHoy);
  fechaHoy.setHours(0,0,0,0);
  const fechaInicio = formatearFechaHora(fechaHoy);


  const  {dataResponse, error, loading} = useFetch(`https://estacion-backend.fly.dev/hobolink?horaInicio=${fechaInicio}&horaFinal=${fechaFinal}`);
  const dataServerHobo = [
    {
      title : "Gráfico de Temperatura",
      dataHobo : [{
        data : dataResponse && dataResponse['Temperature']['si'],
        lineWidth : 0.5,
        name : '°C'
      }],
      xAxisConfig : {
        categories : dataResponse && dataResponse['Temperature']['time']
      },
      routeName : "/dashboard/temperatura"
    },

    {
      title : "Gráfico del Punto de Rocío",
      dataHobo : [{
        data : dataResponse && dataResponse['Dew Point']['si'],
        lineWidth : 0.5,
        name : '°C'
      }],
      xAxisConfig : {
        categories : dataResponse && dataResponse['Dew Point']['time']
      },
      routeName : "/dashboard/puntoRocio"

    },
    {
      title : "Gráfico de la Radiación Solar",
      dataHobo : [{
        data : dataResponse && dataResponse['Solar Radiation']['si'],
        lineWidth : 0.5,
        name : 'W/m2'
      }],
      xAxisConfig : {
        categories : dataResponse && dataResponse['Solar Radiation']['time']
      },
      routeName : "/dashboard/radiacion"

    },
    {
      title : "Gráfico de Lluvia",
      dataHobo : [{
        data : dataResponse && dataResponse['Rain']['si'],
        lineWidth : 0.5,
        name : 'Medición de lluvia'
      }],
      xAxisConfig : {
        categories : dataResponse && dataResponse['Rain']['time']
      },
      routeName : "/dashboard/lluvia"

    },
    {
      title : "Velocidad del viento",
      dataHobo : [{
        data : dataResponse && dataResponse['Wind Speed']['si'],
        lineWidth : 0.5,
        name : 'm/s'
      }],
      xAxisConfig : {
        categories : dataResponse && dataResponse['Wind Speed']['time']
      },
      routeName : "/dashboard/windspeed"

    },
    {
      title : "Dirección del viento",
      dataHobo : [{
        data : dataResponse && dataResponse['Wind Direction']['si'],
        lineWidth : 0.5,
        name : 'SI (°)'
      }],
      xAxisConfig : {
        categories : dataResponse && dataResponse['Wind Direction']['time']
      },
      routeName : "/dashboard/winddirection"

    },

  ]
  if (loading) return( <div className='h-full w-full bg-gray-300 flex items-center justify-center'>
    <p className='font-bold text-2xl'>Cargando datos ...</p>
  </div>)
  return (
      <div className='w-full  h-full p-6 bg-gray-300'>
        <h1 className='font-bold text-3xl py-4'>
          Mediciones 
        </h1>
        <section className='w-full min-h-screen h-full  rounded-lg grid grid-cols-1 gap-4 lg:grid-cols-2'>
          {
            dataServerHobo.map((item, key)=>{
              return (
                <div className='p-4 rounded-lg bg-white'>
                  <ChartLine
                    key={key}
                    title={item.title}
                    data={item.dataHobo}
                    xAxisConfig={item.xAxisConfig}
                  />
                  <div className='w-full p-4 hover:bg-slate-100 rounded-lg'>
                    <Link
                      className='w-full '
                      href={item.routeName}
                    >
                      <h1 className='font-bold'>Ver Gráfico </h1>
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </section>
      </div>
    )
}
