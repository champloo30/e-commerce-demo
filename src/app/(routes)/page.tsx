import getBillboard from '@/actions/getBillboard'
import getProducts from '@/actions/getProducts'
import Billboard from '@/components/ui/billboard'
import ProductList from '@/components/ui/productList'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0

const Home = async () => {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard('c2ffbc4a-fa4e-45bb-b787-22e7e9c045b3')

  return (
    <div className='h-full w-screen space-y-8 mb-4'>
      <Billboard data={billboard} />
      <Container>
        <div className='px-6 py-6 sm:py-4 lg:py-8 flex flex-col gap-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </Container>
    </div>
    
  )
}

export default Home