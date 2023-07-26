'use client'

import { Product } from '@/app/types'
import React, { MouseEventHandler } from 'react'
import Currency from '@/components/ui/currency'
import Button from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import useBag from '@/hooks/useBag'

interface InfoProps {
  data: Product
}

const Info: React.FC<InfoProps> = ({
  data
}) => {
  const bag = useBag()

  const onAddToBag: MouseEventHandler<HTMLButtonElement> = (event) => {
    bag.addItem(data)
  }

  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
      <div className="mt-3 flex justify-between items-end">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className='my-4' />
      <div className='flex flex-col gap-6'>
        <div className="flex items-center gap-4">
          <h3 className='font-semibold text-black'>Size:</h3>
          <div>
            {data?.size?.value}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <h3 className='font-semibold text-black'>Color:</h3>
          <div className='h-6 w-6 rounded-full border border-gray-600' style={{ backgroundColor: data?.color?.value }} />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-4">
        <Button className='flex flex-row-reverse items-center gap-2' onClick={onAddToBag}>
          Add To Bag
          <ShoppingBag />
        </Button>
      </div>
    </div>
  )
}

export default Info