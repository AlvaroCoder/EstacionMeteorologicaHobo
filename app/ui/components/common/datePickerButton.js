'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar';


import { 
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale/es'
export default function datePickerButton({changeValue}) {
    const [date, setDate] = useState(null);
    const changeDateValue=(e)=>{
        changeValue(e)
        setDate(e)
    }
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                variant={"outline"}
                className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4"/>
                    {date ? format(date, "PPP",{locale:es}) : <span>Selecciona una fecha</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={changeDateValue}
                    initialFocus
                    />
            </PopoverContent>
        </Popover>
    )
}
