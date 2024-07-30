import React from 'react'

function MobilePreview() {
  return (
    <div className='p-5 md:fixed'>
        <div className='border-[13px] min-w-[340px] w-full max-w-[400px] border-black max-h-[650px] h-screen rounded-[40px] m-2 shadow-md shadow-primary'> 

          <iframe title='Profile' src={process.env.NEXT_PUBLIC_BASE_URL+"tubeguruji"} width={'100%'} height={'100%'} className='rounded-[25px]' />
        </div>
    </div>
  )
}

export default MobilePreview
