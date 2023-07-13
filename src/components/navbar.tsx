import React from 'react'
import Container from '@/components/ui/container'
import Link from 'next/link'
import MainNav from '@/components/mainNav'
import GetCategories from '@/actions/getCategories'

export const Navbar = async () => {
  const categories = await GetCategories()

  return (
    <div className='h-16 border-b'>
      <Container>
        <div className='flex justify-between py-4 text-xl'>
          <Link href='/'>
            <p>STORE</p>
          </Link>
          <MainNav data={categories} />
          <div>Right</div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
