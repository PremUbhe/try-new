import React from 'react'
import Image from 'next/image'
import loader from '@/public/loading.gif'


const loading = () => {
  return (
    <div className='absolute flex left-0 top-0 h-screen w-full items-center justify-center z-50 bg-white'>
        <Image src={loader} alt='loading ...' />
    </div>
  )
}

export default loading