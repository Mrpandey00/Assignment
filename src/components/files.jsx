import File from '../assests/file-logo.svg'

const Files = () => {

    const data ={
        d:[{
                title:'Check Up Results.pdf'
        },
        {
            title:'Check Up Results.pdf'
        },
        {
            title:'Check Up Results.pdf'
        },
        {
            title:'Check Up Results.pdf'
        }]
    }

  return (
    <div className='w-fit '>

        <h1 className='p-3 text-xl'>Files / Documents</h1>

        <div className='p-3 flex flex-col gap-2 w-56 cursor-pointer'>
        { data.d.map((files)=>(
            <div className='p-2 bg-gray-200 text-center flex flex-row gap-2'><img src={File} alt="" className='w-5' /><span className=''>{files.title}</span></div>
        ))}


        </div>



    </div>
  )
}

export default Files