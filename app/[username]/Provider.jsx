"use client"
import { db } from '@/utils'
import { userInfo } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect } from 'react'
import { UserDetailContext } from '../_context/UserDetailContext';

function Provider({children}) {

  const {user}=useUser();
  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  useEffect(()=>{
    user&&GetUserDetails();
  },[user])
  const GetUserDetails=async()=>{
    const result=await db.query.userInfo.findMany({
      with:{
        project:true
      },
      where:eq(userInfo.email,user?.primaryEmailAddress.emailAddress)
    })
    
    console.log(result[0]);
    setUserDetail(result[0]);
  }
  return (
    <div data-theme={userDetail?.theme}>
        {children}
    </div>
  )
}

export default Provider