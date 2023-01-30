import React from 'react'
import Logo from '../assests/concept-logo.png'

const Details = () => {
  return (
    <div className='font-sans flex flex-row gap-x-14	'>
        <div>
          <div className='pl-5 pt-3'>
            <img src={Logo} alt='' className='w-24 h-24 m-3 ' />
            </div>
            <h1 className='text-2xl p-2 '>Diane Cooper</h1>
            <p className='text-sm font-thin px-1'>diane.cooper@example.com</p>
            
            
            <div className='flex p-2 '>
                <div className='border-r-2 border-gray-500 px-5'>
                        <h5 className='text-2xl'>15</h5>
                        <p className='text-sm font-thin'>Past</p>
                </div>
                <div className='px-5 '>
                        <h5 className='text-2xl pl-4'>02</h5>
                        <p className='text-sm font-thin'>Upcoming</p>
                </div>

            </div>
            <button className=' w-40 border-2 border-black text-center p-1 mt-7 ml-2 hover:bg-black hover:text-white'> Send Message</button>



        </div>
        <div className="flex flex-col gap-3 self-center">
            <div className='flex gap-16 '>

            <div className='flex flex-col'>
            <label  className='text-sm	font-thin	'>Gender</label>
            <input type="text"  value={'Female'} className='pb-2 border-b-2 border-gray-500'/>
            </div>

            <div className='flex flex-col'>
            <label className='text-sm	font-thin	'>Birthday</label>
            <input type="text"  value={'Feb 24th,1996'} className='pb-2 border-b-2 border-gray-500'/>
            </div>

            <div className='flex flex-col'>
            <label className='text-sm	font-thin	'>Phone Number</label>
            <input type="text"  value={'(239)555-0188'} className='pb-2 border-b-2 border-gray-500'/>
            </div>

            <div className='flex flex-col'>
            <label className='text-sm	font-thin	'>Registered Date</label>
            <input type="text"  value={'Feb 24th,1997'} className='pb-2 border-b-2 border-gray-500'/>
            </div>

            </div>

            <div className='flex gap-16'>

            <div className='flex flex-col'>
            <label className='text-sm	font-thin	' >Street Address</label>
            <input type="text"  value={'Jl,Diponegro'} className='pb-2 border-b-2 border-gray-500'/>
            </div>

            <div className='flex flex-col'>
            <label className='text-sm	font-thin	'>City</label>
            <input type="text"  value={'Cilacap'} className='pb-2 border-b-2 border-gray-500'/>
            </div>

            <div className='flex flex-col'>
            <label className='text-sm	font-thin	'>Zip code</label>
            <input type="text"  value={'655849'} className='pb-2 border-b-2 border-gray-500'/>
            </div>

            <div className='flex flex-col'>
            <label className='text-sm	font-thin	'>Member Status</label>
            <input type="text"  value={'Active Member'} className='pb-2 border-b-2 border-gray-500'/>
            </div>

            </div>
        
        
        
        </div>


    </div>
  )
}

export default Details