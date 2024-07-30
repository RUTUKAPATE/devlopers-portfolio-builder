import { TwicPicture } from '@twicpics/components/react'
import React from 'react'

function ProjectList({ProjectList}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
      {ProjectList?.map((project,index)=>(
        <div key={project.id} className='border shadow-sm rounded-lg p-5'>
         <div    lassName='flex gap-2 items-center'>
            <TwicPicture src={project?.logo} className='w-[40px] h-[40px] rounded-full' />
            <h2 className='font-bold justify-between flex-item'>{project?.name}
            <span className='text-xs bg-primary text-white rounded-sm'>{project.category}</span>
            </h2>                                          
          </div>
        </div>
      ))}                                                               
    </div>
  )
}
                                                                      
export default ProjectList                                                                                                                                                                                  
