'use client'
import { useFetch } from '@/lib/customHooks'
import { formatearFechaHora } from '@/lib/formatterTime';
import ChartLine from '@/ui/components/dashboard/ChartLine'
import React from 'react'

export default function Page() {
  const fechaHoy = new Date();
  const fechaFinal = formatearFechaHora(fechaHoy);
  fechaHoy.setHours(0,0,0,0);
  const fechaInicio = formatearFechaHora(fechaHoy);

  const  {dataResponse, error, loading} = useFetch(`https://estacion-backend.fly.dev/hobolink?horaInicio=${fechaInicio}&horaFinal=${fechaFinal}`)
  return (
    <div className='w-full min-h-screen h-full'>
      {loading ? <p>Cargando datos ...</p>:      <section className='w-full min-h-screen px-6 flex md:flex-row flex-col justify-center mt-6'>
        <div className='rounded-lg mx-4'>
          <ChartLine title='Gráfico de Lluvia'
            data={
              [
                {
                  data : dataResponse['Rain']['si'],
                  lineWidth : 0.5,
                  name : 'Medición de lluvia'
                }
              ]
            } xAxisConfig={{
              categories : dataResponse['Rain']['time']
            }}
          />
        </div>
        <div className='rounded-lg mx-4'>
          <ChartLine title='Gráfico de Temperatura'
            data={
              [
                {
                  data : dataResponse['Temperature']['si'],
                  lineWidth : 0.5,
                  name : 'Medición de la temperatura'
                }
              ]
            } xAxisConfig={{
              categories : dataResponse['Temperature']['time']
            }}
          />
        </div>
      </section>}
      {loading ? <p>Cargando datos ...</p>:      <section className='w-full min-h-screen px-6 flex md:flex-row flex-col justify-center mt-6'>
        <div className='rounded-lg mx-4'>
          <ChartLine title='Gráfico del Punto de rocío'
            data={
              [
                {
                  data : dataResponse['Dew Point']['si'],
                  lineWidth : 0.5,
                  name : 'Medición del punto de rocío'
                }
              ]
            } xAxisConfig={{
              categories : dataResponse['Dew Point']['time']
            }}
          />
        </div>
        <div className='rounded-lg mx-4'>
          <ChartLine title='Gráfico de la Radiación Solar'
            data={
              [
                {
                  data : dataResponse['Solar Radiation']['si'],
                  lineWidth : 0.5,
                  name : 'Medición de la temperatura'
                }
              ]
            } xAxisConfig={{
              categories : dataResponse['Solar Radiation']['time']
            }}
          />
        </div>
      </section>}
    </div>
  )
}
