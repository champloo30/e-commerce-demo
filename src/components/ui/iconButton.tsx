import { cn } from '@/lib/utils'
import React, { MouseEventHandler } from 'react'

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
  icon: React.ReactElement,
  className?: string,
  title?: string
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
  title
}) => {
  return (
    <button
      className={cn('rounded-full flex justify-center items-center bg-white border shadow-md p-2 hover:scale-110 transition', className)}
      onClick={onClick}
      title={title}
    >
      {icon}
    </button>
  )
}

export default IconButton