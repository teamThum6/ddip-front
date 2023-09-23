import React from 'react'

interface ModalProps {
  active: boolean
  children: React.ReactNode
}

export default function Modal({ active, children }: ModalProps) {
  return active ? (
    <div className='w-full h-full absolute blur-sm top-0 left-0 right-0 bottom-0'>
      <div className='flex flex-col justify-center w-40 border p-5 border-solid border-black items-center rounded-md gap-3 z-20'>
        {children}
      </div>
    </div>
  ) : null
}
