import React from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import { cn } from '@/lib/utils'
import { Image as ImageType } from '@/app/types'

interface GalleryTabProps {
  image: ImageType
}

const GalleryTab: React.FC<GalleryTabProps> = ({
  image
}) => {
  return (
    <Tab className='bg-white relative aspect-square flex justify-center items-center cursor-pointer rounded'>
      {({ selected }) => (
        <div>
          <span className='h-full w-full absolute aspect-square inset-0 overflow-hidden rounded'>
            <Image 
              className='object-cover object-center'
              src={image.url}
              fill
              alt=''
            />
          </span>
          <span className={cn('h-full w-full absolute inset-0 rounded ring-2 ring-offset-2', selected ? 'ring-black' : 'ring-transparent')} />
        </div>
      )}
    </Tab>
  )
}

export default GalleryTab