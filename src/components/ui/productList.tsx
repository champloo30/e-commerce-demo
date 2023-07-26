import { Product } from '@/app/types'
import React from 'react'
import NoResults from '@/components/ui/noResults'
import ProductCard from '@/components/ui/productCard'

interface ProductListProps {
  title: string,
  items: Product[]
}

export const ProductList: React.FC<ProductListProps> = ({
  title,
  items
}) => {
  return (
    <div className='flex flex-col gap-8'>
      <h3 className='font-bold text-3xl'>{title}</h3>
      {items.length === 0 ? 
      <NoResults /> : 
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {items.map((item) => <ProductCard key={item.id} data={item} />)}
      </div>
      }
    </div>
  )
}

export default ProductList
