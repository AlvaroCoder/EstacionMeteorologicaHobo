import { Button } from '@/components/ui/button'
import { DatePickerButton, TimeInput } from '@/ui'
import React from 'react'

export default function FilterButtonsChart({setEndDate,setStartDate,setTimeEnd, handleSubmit, setTimeStart, valuesStartTime, valuesEndTime}) {
  return (
    <div className='w-full bg-white rounded-lg h-24 flex flex-row items-center px-6'>
        <div>
            <h1>Fecha de Inicio</h1>
            <DatePickerButton changeValue={setStartDate}/>
        </div>
        <div className='ml-4'>
            <h1>Hora de Inicio</h1>
            <TimeInput onChangeValue={setTimeStart} values={valuesStartTime} />
        </div>
        <div className='mx-4 border-[1px] border-gray-400 h-6 w-0'></div>
        <div>
            <h1>Fecha de Fin</h1>
            <DatePickerButton changeValue={setEndDate} />
        </div>
        <div className='ml-4'>
            <h1>Hora de Fin</h1>
            <TimeInput onChangeValue={setTimeEnd} values={valuesEndTime} />
        </div>
        <div className='ml-6 flex-1'>
            <Button       onClick={handleSubmit} className="w-full mt-6 bg-blue-600">
                <p>Buscar</p>
            </Button>
        </div>
    </div>
  )
}
