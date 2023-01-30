import Concept from '../assests/main-logo.png'
import Add from '../assests/addfile.svg'
import Person from '../assests/person.svg'
import Folder from '../assests/folder-open.svg'
import Logout from '../assests/logout.svg'
import Summarize from '../assests/summarize.svg'
import Upload from '../assests/upload.svg'
import Settings from '../assests/settings.svg'



const Sidenav = () => {
  return (
    <div className='w-24 h-screen border-2 border-gray-200 flex flex-col gap-4 justify-evenly text-gray-500 cursor-pointer ' >
      <div className='justify-self-start	 '>
        <img src={Concept} alt=""  className='w-24 h-16'/>
      </div>
      <div className='flex flex-col '>
        <img src={Add} alt="" className='w-6 h-6 translate-x-9' />
        <span className='text-center'> NEW </span>
      </div>
      <div className='flex flex-col '>
        <img src={Person} alt="" className='w-6 h-6 translate-x-9' />
       <span className='text-center'> PATIENT </span>
      </div>
      <div className='flex flex-col '>
        <img src={Folder} alt="" className='w-6 h-6 translate-x-9' />
        <span className='text-center'>FOLDER </span>
      </div>
      <div className='flex flex-col   '>
        <img src={Upload} alt="" className='w-6 h-6 translate-x-9'/>
       <span className='text-center'> UPLOAD </span>
      </div>
      <div className='flex flex-col '>
        <img src={Summarize} alt="" className='w-6 h-6 translate-x-9'/>
       <span className='text-center'> REPORT </span>
      </div>
      <div className='flex flex-col '>
        <img src={Settings} alt="" className='w-6 h-6 translate-x-9'/>
       <span className='text-center'> SETTING </span>
      </div>
      <div className='flex flex-col '>
        <img src={Logout} alt="" className='w-6 h-6 translate-x-9'/>
        <span className='text-center'>LOGOUT</span>
      </div>
    </div>
  )
}

export default Sidenav