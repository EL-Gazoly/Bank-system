import React from 'react'

import transfer_money from "../assets/icons/transfer_money.svg"

function Home() {
  return (
    <div className="  overflow-hidden">
   
 
   <div className="h-screen w-screen bg-gray-50 flex items-start ">
    <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700 mt-14">
            <div className="w-full lg:w-1/2 mx-8">
    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl ml-12">
    <span className="block " >Bank system</span>
    <span className="block text-indigo-600 ">Transfer Money Easily</span>
    </h1>
    <p className=" mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-x1 sm:mx-auto md:mt-5 md:text-x1 lg:mx-0  xl:ml-12"> 
    Transfer Money easily between any two accounts 
    </p>
    <div className=" mt-48 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
    <div className="rounded-md shadow cursor-pointer ml-12">
        <a  href="/users" className="  h-full w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10" >
        Start Transfering
         </a>
        
    </div>
    </div>
    </div>
  <div className= '' >
        <img
          className='w-full h-full object-cover mt-9  '
          src= {transfer_money}
          alt=""
        />
      </div>
 

   </div>
</div>
 
  </div>
  )
}

export default Home