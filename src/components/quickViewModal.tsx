'use client'

import useQuickViewModal from '@/hooks/useQuickViewModal'
import React from 'react'
import Modal from '@/components/ui/modal'
import Gallery from '@/components/gallery'
import Info from '@/components/info'

const QuickViewModal = () => {
  const quickView = useQuickViewModal()
  const product = useQuickViewModal((state) => state.data)

  if (!product) {
    return null
  }

  return (
    <Modal
      open={quickView.isOpen}
      onClose={quickView.onClose}
    >
      <div className="w-full grid grid-cols-1 sm:grid-cols-12 items-start gap-6 lg:gap-8">
        <div className='sm:col-span-4 lg:col-span-5'>
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  )
}

export default QuickViewModal