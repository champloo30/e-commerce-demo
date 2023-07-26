import React from 'react'
import Container from '@/components/ui/container'
import Link from 'next/link'
import MainNav from '@/components/mainNav'
import getCategories from '@/actions/getCategories'
import { NavActions } from '@/components/navActions'

export const revalidate = 0

export const Navbar = async () => {
  const categories = await getCategories()
  
  return (
    <div className='h-16 border-b'>
      <Container>
        <div className='flex items-center gap-8 py-4 px-6'>
          <Link href='/'>
            <p className='text-2xl'>STORE DEMO 1</p>
          </Link>
          <MainNav data={categories} />
          <NavActions />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
