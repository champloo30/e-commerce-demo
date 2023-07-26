'use client'

import React, { useEffect, useState } from 'react'
import Button from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import useBag from '@/hooks/useBag'
import { useRouter } from 'next/navigation'

export const NavActions = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const router = useRouter()
  const bag = useBag()

  if (!isMounted) {
    return null
  }

  return (
    <div className='ml-auto flex items-center gap-4'>
      <Button className='flex items-center px-4 py-2 bg-white border' onClick={() => router.push('/bag')}>
        <ShoppingBag size={20} color='black' />
        <span className='ml-1 text-sm font-semibold text-black'>
          {bag.items.length}
        </span>
      </Button>
    </div>
  )
}
