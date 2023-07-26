'use client'

import Container from '@/components/ui/container'
import useBag from '@/hooks/useBag'
import React, { useEffect, useState } from 'react'
import BagItem from './components/bagItem'
import Summary from './components/summary'

const Bag = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const bag = useBag()

  if (!isMounted) {
    return null
  }

  return (
    <div className='bg-white'>
      <Container>
        <div className='py-16 px-6'>
          <h1 className='text-3xl font-bold'>Shopping Bag</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-12">
            <div className='lg:col-span-7'>
              {bag.items.length === 0 ? 
              <p className='text-neutral-500'>No items in bag</p> :
              <ul>
                {bag.items.map((item) => (
                  <BagItem 
                    key={item.id}
                    data={item}
                  />
                ))}
              </ul>
              }
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Bag