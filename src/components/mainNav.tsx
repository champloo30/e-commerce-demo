'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Category } from '@/app/types'

interface MainNavProps {
  data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname()

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}` 
  }))

  return (
    <nav
      className='flex items-center gap-4 text-base'
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'font-medium transition-colors hover:text-black',
            route.active ? 'text.active' : 'text-neutral-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
