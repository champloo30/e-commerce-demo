'use client'

import { Product } from '@/app/types'
import Image from 'next/image'
import React, { MouseEventHandler } from 'react'
import IconButton from '@/components/ui/iconButton'
import { Expand, ShoppingBag } from 'lucide-react'
import Currency from '@/components/ui/currency'
import { useRouter } from 'next/navigation'
import useQuickViewModal from '@/hooks/useQuickViewModal'
import useBag from '@/hooks/useBag'

interface ProductCardProps {
  data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({
  data
}) => {
  const quickView = useQuickViewModal()
  const bag = useBag()
  const router = useRouter()

  function handleClick() {
    router.push(`/product/${data?.id}`)
  }

  const onQuickView: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    quickView.onOpen(data)
  }

  const onAddToBag: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    bag.addItem(data)
  }

  return (
    <div onClick={handleClick} className=' bg-white group cursor-pointer rounded border p-3 space-y-4'>
      {/* Images and Actions */}
      <div className='aspect-square rounded bg-gray-100 relative'>
        <Image 
          className='aspect-square object-cover rounded'
          src={data?.images?.[0]?.url}
          fill
          alt={`Image of ${data?.name}`}
        />
        <div className='w-full px-6 absolute bottom-5 opacity-0 group-hover:opacity-100 transition'>
          <div className="flex justify-center gap-4">
            <IconButton 
              onClick={onQuickView}
              icon={<Expand size={20} className='text-gray-600' />}
              title='Quick View'
            />
            <IconButton 
              onClick={onAddToBag}
              icon={<ShoppingBag size={20} className='text-gray-600' />}
              title='Add To Bag'
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className='font-semibold text-lg'>{data.name}</p>
        <p className='text-sm text-gray-500'>{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className='flex justify-between items-center'>
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard