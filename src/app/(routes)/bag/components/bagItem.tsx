'use client'

import React from 'react'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { X } from 'lucide-react'
import IconButton from '@/components/ui/iconButton'
import Currency from '@/components/ui/currency'
import useBag from '@/hooks/useBag'
import { Product } from '@/app/types'

interface BagItemProps {
  data: Product
}

const BagItem: React.FC<BagItemProps> = ({
  data
}) => {
  const bag = useBag()

  function onRemove() {
    bag.removeItem(data.id)
  }

  return (
    <li className='py-6 flex border-b'>
      <div className='h-24 w-24 relative rounded overflow-hidden sm:h-48 sm:w-48'>
        <Image 
          className='object-cover object-center'
          src={data.images[0].url}
          fill
          alt={`Image of ${data.name}`}
        />
      </div>
      <div className="relative ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
        <div className='absolute z-40 right-0 top-0'>
          <IconButton icon={<X size={15} />} onClick={onRemove} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-6 sm:pr-0">
          <div className="flex justify-between">
            <p className='text-lg font-semibold'>
              {data.name}
            </p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className='text-gray-500'>{data.color.name}</p>
            <p className='text-gray-500 ml-4 border-l border-gray-200 pl-4'>{data.size.name}</p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  )
}

export default BagItem