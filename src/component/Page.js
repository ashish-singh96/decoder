import React from 'react'

const Page = () => {
  return (
    <div> 
    <div className='bg-gray-700'>
  <h1>.</h1>
    </div>
            <div className=" bg-gray-50 p-4">
                <div className="flex flex-col max-w-7xl w-full md:w-[70%]">
                    <div className="flex flex-col lg:flex-row ">
                        <div className="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                            <div className="flex items-center justify-start w-full">
                                <div className="flex-col w-[85%]">
                                    <div className="text-sm font-medium text-violet-600 my-2">Total Accounts</div>
                                    <div className="className flex items-center">
                                        <div className="text-3xl font-bold text-gray-700">$2,30,568</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                            <div className="flex items-center justify-start w-full">
                                <div className="flex-col w-[85%]">
                                    <div className="text-sm font-medium text-violet-600 my-2">Total Income</div>
                                    <div className="className flex items-center">
                                        <div className="text-3xl font-bold text-red-300">$2,30,568</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                            <div className="flex items-center justify-start w-full">
                                <div className="flex-col w-[85%]">
                                    <div className="text-sm font-medium text-violet-600 my-2">Equity Ratio</div>
                                    <div className="className flex items-center">
                                        <div className="text-3xl font-bold text-gray-700">75.38%</div>
                                        <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                                            <div className="text-xs bg-red-200 px-2 rounded-lg"></div>
                                        </div>
                                    </div>
                                    
                                  
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                            <div className="flex items-center justify-start w-full">
                                <div className="flex-col w-[85%]">
                                    <div className="text-sm font-medium text-violet-600 my-2">Debt Equity</div>
                                    <div className="className flex items-center">
                                        <div className="text-3xl font-bold text-gray-700">1.10%</div>
                                        <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                                            <div className="text-xs bg-red-200 px-2 rounded-lg"></div>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                        <img src='./Images/6.png'/>
                        
                    </div>
                </div>
            </div>
         
         <div className='flex flex-row pl-4 space-x-32'>
            <div >
                <img src='./Images/1.png' alt=''/>
            </div>
            <div>
                <img src='./Images/2.png' alt=''/>
            </div>
            <div>
                <img src='./Images/3.png' alt=''/>
            </div>
            <div>
                <img src='./Images/2.png' alt=''/>
            </div>
         </div>

         <div className='flex flex-row pl-4 space-x-2'>
            <div>
                <img src='./Images/4.png' alt=''/>
            </div>

            <div>
                <img src='./Images/5.png' alt='' />
            </div>
         </div>
                                        
        </div>
  )
}

export default Page
