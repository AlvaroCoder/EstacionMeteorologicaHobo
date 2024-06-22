'use client'
import { useFetch } from '@/lib/customHooks';
import { formatearFecha, formatearFechaHora } from '@/lib/formatterTime';
import { FilterButtonsChart } from '@/ui'
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
        <section className='w-full bg-white h-screen rounded-lg mt-4 flex items-center justify-center'>
            { loading || loadingData ? <p>Cargando datos ... </p> : <ChartLine title='Gráfico de Radiación Solar' data={
                [
                    {
                        data : dataHobo['Solar Radiation']['si'],
                        lineWidth: 0.5,
                        name: 'Radiación en SI'
                    }
                ]
            } xAxisConfig={{
                categories : dataHobo['Solar Radiation']['time']
            }}/>}
        </section>
    </div>
  )
}
