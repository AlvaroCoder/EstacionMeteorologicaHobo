import { Input } from '@/components/ui/input'
import React from 'react'

export default function timeInput({onChangeValue, values}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'hours' && /^\d*$/.test(value) && value >= 0 && value <= 23) {
      onChangeValue((prevTime) => ({ ...prevTime, [name]: value }));
    } else if (name === 'minutes' && /^\d*$/.test(value) && value >= 0 && value <= 59) {
      onChangeValue((prevTime) => ({ ...prevTime, [name]: value }));
    }
  };
  return (
    <div className=' flex flex-row' >
        <Input
          name="hours"
          value={values.hours}
          onChange={handleChange} 
          placeholder="00" 
          className="w-16" 
          inputMode="numeric"
          pattern="[0-9]*" 
          type="text"  />
        <div className='mx-4 flex items-center justify-center'>
            <p>:</p>
        </div>
        <Input 
          onChange={handleChange} 
          name="minutes"
          value={values.minutes}
          type="text" 
          inputMode="numeric"
          pattern="[0-9]*" 
          placeholder="00" 
          className="w-16"/>
    </div>
  )
}
