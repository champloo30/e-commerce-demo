'use client'

import React, { useEffect } from 'react'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import Button from '@/components/ui/button'
import Currency from '@/components/ui/currency'
import useBag from '@/hooks/useBag'
import { toast } from 'react-hot-toast'

const Summary = () => {
  const searchParams = useSearchParams()
  const items = useBag((state) => state.items)
  const removeAll = useBag((state) => state.removeAll)

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.')
      removeAll()
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.')
      removeAll()
    }
  }, [searchParams, removeAll])

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  async function onCheckout() {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id)
    })
    window.location = response.data.url
  }

  return (
    <div className='mt-16 lg:mt-0 px-4 py-6 sm:p-6 lg:p-8 lg:col-span-5 rounded bg-gray-50'>
      <h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
      <div className='mt-6 space-y-4'>
        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
          <h3 className='text-base font-medium text-gray-900'>
            Order Total
          </h3>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button className='w-full mt-6' disabled={items.length === 0} onClick={onCheckout}>Checkout</Button>
    </div>
  )
}

export default Summary