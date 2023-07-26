'use client'

import React, { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import IconButton from '@/components/ui/iconButton'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean,
  onClose: () => void,
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children
}) => {
  
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog className='relative z-10' as='div' onClose={onClose}>
        <div className='fixed inset-0 bg-black bg-opacity-50' />
        <div className='fixed inset-0 overflow-y-auto'>
          <div className="min-h-full flex justify-center items-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-3xl overflow-hidden rounded text-left align-middle'>
                <div className="w-full relative flex items-center overflow-hidden bg-white p-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <div className='absolute right-4 top-4'>
                    <IconButton icon={<X size={15} />} onClick={onClose} />
                  </div>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal