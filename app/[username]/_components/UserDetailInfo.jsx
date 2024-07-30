"use client"
import { TwicPicture } from '@twicpics/components/react'
import { MapPin } from 'lucide-react'
import React from 'react'

function UserDetailInfo({userDetail}) {
  return (
    <div className='flex flex-col md:justify-center h-screen md:h-screen'>
      <div className='w-full flex item-center justify-between'>
        <div className='flex md:flex-col items-center md:items-start gap-4'>
          <TwicPicture src={userDetail?.profileImage} className='w-[90px] h-[90px] md:w-[130px] md:h-[130px] rounded-full' />
          <div className='flex flex-col gap-4 mt-3'>
            <h2 className='font-bold text-lg md:text-2xl'>{userDetail.name}</h2>
            <h2 className='flex gap-2 items-center text-gray-500'> <MapPin/> {userDetail.location}</h2>
          </div>
        </div>
      </div>
      <h2 className='my-7'>{userDetail.bio}</h2>
      <div className='flex gap-2'>
        <input type="text" placeholder="Add your email here" className="input input-bordered w-full max-w-xs" />
        <button className='btn btn-primary'>Subscribe</button>
      </div>
    </div>
  )
}

export default UserDetailInfo