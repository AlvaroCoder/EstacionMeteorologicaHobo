import { SideNav } from '@/ui'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className='h-screen flex flex-row w-full '>
        <SideNav/>
        <div className='w-full py-6 bg-gray-300 h-screen flex flex-col overflow-x-auto'>
        {children}
        <footer className='w-full  bg-gray-300 mt-6  h-64 flex justify-center items-end'>
          <p className='text-white'>@AlvaCode</p>
        </footer>
        </div>
    </div>
  )
}
