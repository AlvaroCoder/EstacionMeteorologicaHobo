import { SideNav } from '@/ui'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className='h-screen flex flex-row w-full '>
        <SideNav/>
        <section className='w-full py-2 bg-gray-300 overflow-y-auto'>
          <section className='w-full'>
          {children}

            <footer className='w-full  bg-gray-300 py-6  flex justify-center items-end'>
              <p className='text-white'>@AlvaCode</p>
            </footer>
          </section>
        </section>

    </div>
  )
}
