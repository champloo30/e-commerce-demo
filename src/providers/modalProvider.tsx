'use client'

import QuickViewModal from '@/components/quickViewModal'
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <QuickViewModal />
  )
}

export default ModalProvider