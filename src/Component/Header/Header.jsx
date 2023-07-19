import React from 'react'

const Header = () => {
    return (
        <>
        <div className='min-w-full h-[100px] bg-white flex fixed'>
        <div className='w-[20%] h-[100px] flex items-center justify-center'>
        <h1 className='text-[40px] font-bold font-serif'>Dribbble</h1>
        </div>
        <div className='w-[40%] h-[100px] flex items-center justify-evenly text-[20px] '>
        
        <h1 className='hover:text-blue-300 cursor-pointer border-b-4 border-red-700 text-rose-700 hover:bg-red-600 hover:rounded-xl '>Find talent</h1>
        <h1 className=' hover:text-blue-500 cursor-pointer'>For designers</h1>
        <h1 className=' hover:text-blue-700 cursor-pointer'>Inspiration</h1>
        <h1 className=' hover:text-blue-900 cursor-pointer'>Learn design</h1>
        <h1 className=' text-pink-500'>Go Pro</h1>
        
        </div>
        <div className='w-[40%] h-[100px] flex items-center gap-4 justify-end pr-[25px]'>
       <a href="https://dribbble.com/session/new"> <button className='w-[130px] h-[60px] border-2 rounded-2xl text-black hover:bg-red-600 hover:text-white'>Log in</button></a>
       <a href="https://dribbble.com/signup/new">
       <button className='w-[130px] h-[60px] border-2 rounded-2xl bg-blue-950 text-yellow-50 hover:bg-black hover:text-white'>Sign in</button>
       </a>
        </div>
       
        
        </div>
      
        </>)
        
    }
    
    export default Header
    