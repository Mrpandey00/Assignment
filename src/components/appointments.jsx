import Note from '../assests/note-logo.svg'
const Appointments = () => {

    const data ={
        d:[{
            date:'26 Nov`19',
            time:'09.00-10.00',
            treatment:'Open Access',
            dentist:'Drg.Adam H.',
            Nurse:'Jessicamila'

        },
        {
            date:'12 Nov`19',
            time:'09.00-10.00',
            treatment:'Root Canal',
            dentist:'Drg.Adam H.',
            Nurse:'Jessicamila'

        }]
    }

  return (
    <div className='w-fit '>

        <div className='flex flex-row bg-gray-200 gap-5 px-3 py-2 w-[34rem]'> 
            <h5 className=' w-fit bg-white text-center text-blue-300 p-1'> Upcoming Appointments</h5>
            <h5 className='w-fit text-center p-1'> Past Appointments</h5>
            <h5 className='w-fit  text-center p-1'> Medical Records</h5>
        </div>

        <div className='w-[50rem] bg-gray-200 mt-6 rounded-lg '>
            <div className='flex flex-row justify-around p-1 p-y-5 border-b-2 border-gray-500'>
                    <h5 className='p-1 '>Root Canal Treatment</h5>
                    <button className=' text-center p-1 border-black border-1 bg-white '>Show Previous Treatments</button>
            </div>

            <div className=' flex flex-col gap-4 bg-gray-200 p-5'>
                {
                    data.d.map((appoints)=>(
                        <div className=' flex flex-row bg-white gap-4 '>
                            <div className='flex flex-col px-6 py-2 border-r-2 border-gray-100'>
                                <h1 className='text-2xl'>{appoints.date}</h1>
                                <p className='font-thin'>{appoints.time}</p>
                            </div>
                            <div className='flex flex-col px-6 py-2 border-r-2 border-gray-100'>
                                <p className='font-thin text-sm'>Treatment</p>
                                <h3>{appoints.treatment}</h3>
                            </div>
                            <div className='flex flex-col px-6 py-2 '>
                                <p className='font-thin'>Dentist</p>
                                <h3>{appoints.dentist}</h3>
                            </div>
                            <div className='flex flex-col px-6 py-2'>
                                <p className='font-thin'>Nurse</p>
                                <h3>{appoints.Nurse}</h3>
                            </div>
                            <img src={Note} alt="" className='w-11 h-11' />
                            <span className='text-sm text-blue-500 mt-5'>Note</span>
                        </div>
                    ))

                }


            </div>



        </div>

    </div>
  )
}

export default Appointments