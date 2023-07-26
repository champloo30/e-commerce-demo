'use client'

import { Color, Size } from '@/app/types'
import Button from '@/components/ui/button'
import React, { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { Dialog } from '@headlessui/react'
import IconButton from '@/components/ui/iconButton'
import Filter from './filter'

interface MobileFiltersProps {
  sizes: Size[],
  colors: Color[]
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  sizes,
  colors
}) => {
  const [open, setOpen] = useState(false)

  function onOpen() {
    setOpen(true)
  }

  function onClose() {
    setOpen(false)
  }

  return (
    <>
      <Button onClick={onOpen} className='flex items-center gap-2 lg:hidden'>
        <Plus size={20} />
        Filters
      </Button>
      <Dialog className='relative z-40 lg:hidden' open={open} as='div' onClose={onClose}>
        {/* background */}
        <div className='fixed inset-0 bg-black bg-opacity-25' />
        {/* dialog position */}
        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel className='h-full w-full max-w-xs relative ml-auto flex flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            <div className="flex justify-end items-center px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div className="p-4">
              <Filter 
                valueKey='sizeId'
                name='Sizes'
                data={sizes}
              />
              <Filter 
                valueKey='colorId'
                name='Colors'
                data={colors}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFilters