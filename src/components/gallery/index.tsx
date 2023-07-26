'use client'

import React from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { Image as ImageType } from '@/app/types'
import GalleryTab from '@/components/gallery/galleryTab'

interface GalleryProps {
  images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({
  images
}) => {
  return (
    <Tab.Group className='flex flex-col-reverse gap-8' as='div'>
      <div className='w-full h-full sm:block lg:max-w-none mx-auto hidden'>
        <Tab.List className='grid grid-cols-6 sm:grid-cols-5 lg:grid-cols-4 gap-6'>
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className='w-full aspect-square'>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className='h-full w-full relative aspect-square rounded overflow-hidden'>
              <Image 
                className='object-cover object-center'
                src={image.url}
                fill
                alt='Image'
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Gallery