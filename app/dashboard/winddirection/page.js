'use client'
import { useFetch } from '@/lib/customHooks';
import { formatearFechaHora } from '@/lib/formatterTime';
import { FilterButtonsChart } from '@/ui';
import ChartLine from '@/ui/components/dashboard/ChartLine';
import React, { useState } from 'react'

export default function Page() {
    const fechaHoy = new Date()
    const fechaFinal = formatearFechaHora(fechaHoy);
    fechaHoy.setHours(0,0,0,0)
    const fechaInicio = formatearFechaHora(fechaHoy)

    const [startDate, setStartDate] = useState(fechaHoy);
    const [endDate, setEndDate] = useState(fechaFinal);
    const [timeStart, setTimeStart] = useState({hours:"00",minutes:"00"});
    const [timeEnd, setTimeEnd] = useState({hours:"00",minutes:"00"});
    
    const [dataHobo, setDataHobo] = useState(null);
    const {dataResponse, error, loading} = useFetch(`https://estacion-backend.fly.dev/hobolink?horaInicio=${fechaInicio}&horaFinal=${fechaFinal}`, setDataHobo)

    const [loadingData, setLoadingData] = useState(false);

    const handleSubmit=async()=>{
        setLoadingData(true);
        const fechaInicioFormateada = formatearFecha(startDate)+` ${timeStart.hours}:${timeStart.minutes}:00`;
        const fechaFinalFormateada = formatearFecha(endDate)+` ${timeEnd.hours}:${timeEnd.minutes}:00`
        
        const URL = `https://estacion-backend.fly.dev/hobolink?horaInicio=${fechaInicioFormateada}&horaFinal=${fechaFinalFormateada}`
        const response= await fetch( URL,{method:'GET'});
        const responseJSON = await response.json()
        setDataHobo(responseJSON)
        setLoadingData(false);
    }
  return (
    <div className='bg-gray-300 w-full h-screen px-6 flex flex-col'>
        <FilterButtonsChart 
            valuesStartTime={timeStart}
            valuesEndTime={timeEnd}
            setEndDate={setEndDate} 
            setTimeEnd={setTimeEnd} 
            setStartDate={setStartDate} 
            setTimeStart={setTimeStart} 
            handleSubmit={handleSubmit} 
        />
      <section className='w-full  mt-4 flex items-center justify-center'>
        <div className='w-full min-h-[400px] px-4 py-24 bg-white rounded-lg'>
        { loading || loadingData ? <p>Cargando datos ... </p> : <ChartLine title='Gráfico de Temperatura' data={
                [
                    {
                        data : dataHobo['Temperature']['si'],
                        lineWidth: 0.5,
                        name: 'Temperatura en SI'
                    }
                ]
            } xAxisConfig={{
                categories : dataHobo['Temperature']['time']
            }}/>}
        </div>
        </section>
    </div>
  )
}
