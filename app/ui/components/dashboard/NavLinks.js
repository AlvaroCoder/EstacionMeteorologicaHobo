import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import clsx from 'clsx';

export default function NavLinks({routeName, routeHref}) {
  const pathname = usePathname()
  return (
    <>
      <Link 
      href={routeHref}
      className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
      {
        'bg-sky-100 text-blue-600': pathname === routeHref,
      }
      )}
      >
      <p className="hidden md:block">{routeName}</p>
   </Link>
    </>
  )
}
