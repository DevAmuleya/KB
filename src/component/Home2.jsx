import React, { useState } from 'react';
import { Search,  Rocket, ChevronsUpDown,Laptop, ChevronLeft,ChevronRight, UserRoundCheck, Plus,UserMinus } from 'lucide-react';
import logo from "../assets/image.png";

const Home2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
    setIsSelected((prev) => !prev);
    
    }; 
    
    const [value, setValue] = useState(10); // Default value

    // Function to update value
    const handleChange = (event) => {
        setValue(event.target.value);
    };

  return (
    <div className='px-2 '>
        <div className="flex gap-x-14 p-4 gap-y-10 flex-wrap items-start">       
            <div className="flex items-center flex-[1_1_150px] mr-14">
            <img src={logo} alt="logo" className="h-auto max-w-[193px]" />
            </div>

            
            <div className="relative flex items-center flex-[1_1_250px] p-2 l">
                <div className="w-full relative">
                    <input 
                    type="text" 
                    id="search"
                    placeholder="Search here ...." 
                    className="border rounded-lg w-full pl-3 pr-10 py-2"
                    />
                    <Search size={24} className="absolute top-1/2 right-2 transform -translate-y-1/2" />
                </div>
            </div>

            
            <div className="flex gap-4  flex-[1_1_250px] p-2 w-full" onMouseLeave={() => setTimeout(() => setIsOpen(false), 300)}>
                <div className='w-full '>
                    <div className="border rounded-lg flex justify-between items-center p-2 bg-white shadow max-w-[25rem] ">
                        <div className="flex items-center gap-2">
                            <div className="bg-[#192231] text-white flex justify-center items-center h-[40px] w-[40px] leading-[23.2px] text-[16px] font-[600] rounded">
                                AO
                            </div>

                            <div className="px-2">
                                <p>
                                    <span className="block font-[600] text-[14px] leading-[20.3px] text-[#101928]">
                                        Amuda Oluwaseun
                                    </span>
                                    <span className="font-[400] text-[14px] leading-[20.3px">
                                        Administrator
                                    </span>
                                </p>
                            </div>
                        </div>
                        <ChevronsUpDown 
                            className="text-gray-600 group cursor-pointer" 
                            onMouseEnter={() => setIsOpen(true)}
                        />
                    </div>

                    <div className={`flex-col ${isOpen ? "flex" : "hidden"} mt-2 max-w-[25rem] border p-2 text-xl rounded-lg bg-white shadow-lg transition-all duration-500`}>
                        <p className="font-semibold cursor-pointer">Sign out</p>
                        <p className="text-[#CB1A14] cursor-pointer">Delete account</p>
                    </div>
                </div>            
            </div>   
        </div>
            
        <div className='mx-auto flex justify-center'> 
            <div className='w-full max-w-[795px] mx-auto'>            
                <div className="flex flex-col mx-auto mt-5 max-w-[900px]">
                    <div className="mb-4 w-full">
                        <h1 className="font-semibold text-[24px] text-[#000000] pb-1">
                            Welcome Admin
                        </h1>
                        <h2 className="font-normal text-[16px] text-[#475367]">
                            Manage and optimize your product prices seamlessly across multiple platforms.
                            <span className="block">Launch the pricing engine to get started</span>
                        </h2>
                    </div>
                    <div className="mt-3">
                        <button className="p-3 max-w-[261px] border bg-[#192231] text-white rounded-lg flex items-center justify-center gap-2">
                            <Rocket size={24} /> Launch Pricing Engine
                        </button>
                    </div>
                </div>

                <div className='border max-w-[900px]  hidden sm:block mt-10 my-5 w-full'></div>

                <div className="p-5 max-w-[795px] mx-auto border rounded-lg my-10 sm:mt-14 ">
                    <div className='mb-4'>
                        <h1>In Queue</h1>
                        <p>View pricing updates that are in queue</p>
                    </div>
                    
                    <div className='w-full'>
                        <h1>Updating Pricing rule...</h1>
                        <div className="w-full flex justify-between items-center">
                            <div className='flex w-full'>
                                <input 
                                    id="search-input"
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={value}
                                    onChange={handleChange}
                                    placeholder="Search here"
                                    className=" range py-2 border w-full rounded-lg transition-all duration-300 focus:outline-none  focus:opacity-50"
                                />

                                <label htmlFor="search-input" className="hidden">Search</label>
                            </div>
                    
                            <div className=''>
                                <ChevronRight className=" w-14 top-1 right-0 text-gray-500" />
                            </div>
                        </div>
                        <p>
                            {`${value}% of the complete `}
                        </p>
                        
                    </div>
                </div>
                
                <div className='border mx-auto hidden sm:block w-full my-10'></div>

                <div className='w-full mx-auto flex justify-center mb-10'>
                    <div className='max-w-[795px] border p-2 rounded-lg w-full'>
                        <div className="flex flex-col gap-2 lg:flex-row justify-between w-full">
                            <div className="flex-1 flex-col w-full gap-2 justify-start mr-auto">
                                <div className="text-[16px] font-[600] leading-[23.2px] text-[#101928] flex items-center p-2">
                                    <UserRoundCheck className="w-[20px] h-[20px]" />
                                    <p className="px-2">Admins</p>
                                </div>
                                <p className="text-sm text-[#101928]">
                                    Admins have full access to the pricing engine and can effect changes.
                                </p>
                            </div>

                            <div className='flex-1 w-full'>
                                <div className='flex lg:justify-end mr-4'>
                                    <button onClick={handleClick} className="border rounded-lg w-[125px] h-10 mt-2 sm:mt-0 px-[12px] py-[8px] font-[600] leading-[20.3px] text-sm border-[#5E758C] flex items-center hover:scale-105">
                                        <Plus className="h-[20px] w-[20px]" />
                                        <span>Add admin</span>
                                    </button>
                                </div>
                            </div>     
                        </div>

                        <div className='border p-2 border-[#E4E7EC] rounded-lg bg-[#F6F6F6] mt-8 flex flex-col w-full'>
                            <div className='relative w-full flex justify-between border-b-2 py-2'>
                                <p >                                
                                    <span className="font-semibold text-[14px] leading-[20.3px] text-[#344054] pr-2 ">
                                        Jerome Bell
                                    </span>
                                    nathan.roberts@example.com &nbsp;&nbsp;  
                                    <span className="bg-[#D0D5DD] px-2 py-1 rounded-full text-[#344054] text-sm mb-1 sm:mb-0 inline-block hover:bg-red-400 transition-all">
                                        Invitation pending
                                    </span>                                 
                                </p>
                                <div><UserMinus className='h-[24px]' /></div>
                            </div>

                            <div className='relative w-full flex justify-between border-b-2 py-2'>
                                <p >                                
                                    <span className="font-semibold text-[14px] leading-[20.3px] text-[#344054] pr-2 ">
                                        Floyd Miles
                                    </span>
                                    bill.sanders@example.com                  
                                </p>
                                <div><UserMinus className='h-[24px]' /></div>
                            </div>

                            <div className='relative w-full flex justify-between border-b-2 py-2'>
                                <p >                                
                                    <span className="font-semibold text-[14px] leading-[20.3px] text-[#344054] pr-2 ">
                                        Wade Warren
                                    </span>
                                    alma.lawson@example.com                  
                                </p>
                                <div><UserMinus className='h-[24px]' /></div>
                            </div>

                            <div className='relative w-full flex justify-between border-b-2 py-2'>
                                <p >                                
                                    <span className="font-semibold text-[14px] leading-[20.3px] text-[#344054] pr-2 ">
                                        Bessie
                                    </span>
                                    georgia.young@example.com                 
                                </p>
                                <div><UserMinus className='h-[24px]' /></div>
                            </div>


                            <div className='flex my-auto px-[16px] py-4'>
                                <div className='h-[36px] w-[124px] flex items-center gap-x-2'>
                                    <div className='h-[36px] w-[36px] flex justify-center items-center bg-white border rounded-lg'><ChevronLeft className='w-[30px] h-[30px] text-[#344054]'/></div>
                                    <div className='h-[36px] w-[36px] flex justify-center items-center bg-white border rounded-lg font-[400] leading-[20.3px] text-[#000000] text-2xl'>1</div>
                                    <div className='h-[36px] w-[36px] flex justify-center items-center bg-white border rounded-lg'><ChevronRight className='w-[30px] h-[30px] text-[#344054]'/></div>
                                </div>
                            </div>   
                        </div> 
                    </div>
                </div>

                <div className="flex w-full my-12 max-w-[795px] mx-auto ">
                    <div className="w-full border p-2 sm:p-10 border-[#C8D1DA] rounded-lg">
                        <div className="">
                            {/* Header */}
                            <p className="font-semibold text-lg text-[#101928] flex items-center mb-4">
                                <Laptop className="mr-3" />
                                <span>Login history</span>
                            </p>
                            <p className="text-sm text-[#667185] mb-2">
                                Accounts that have logged in to the pricing engine in the last 28 days.
                            </p>
                        </div>

                        {/* Login History List */}
                        <div className="p-5 bg-[#F6F6F6] border border-[#E4E7EC] rounded-lg w-full">
                            {/* User 1 */}
                            <div className="border-b p-4">
                                <h1 className="font-semibold text-base text-[#344054] mb-1">felicia.reid@example.com</h1>
                                <p className="pl-20 text-sm">
                                    Logged in via password from IP 84.17.35.89 <span className="block mt-1">3 days ago</span>
                                </p>
                            </div>

                            {/* User 2 */}
                            <div className="border-b p-4">
                                <h1 className="font-semibold text-base text-[#344054] mb-1">tim.jennings@example.com</h1>
                                <p className="pl-20 text-sm">
                                    Logged in via password from IP 84.17.35.89 <span className="block mt-1">5 days ago</span>
                                </p>
                            </div>

                            {/* User 3 */}
                            <div className="p-4">
                                <h1 className="font-semibold text-base text-[#344054] mb-1">debra.holt@example.com</h1>
                                <p className="pl-20 text-sm">
                                    Logged in via password from IP 84.17.35.89 <span className="block mt-1">6 days ago</span>
                                </p>
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-center items-center mt-5 p-4">
                                <div className="h-9 w-9 flex justify-center items-center bg-white border rounded-lg cursor-pointer hover:bg-gray-100">
                                    <ChevronLeft className="w-6 h-6 text-[#344054]" />
                                </div>
                                <div className="h-9 w-9 flex justify-center items-center bg-white border rounded-lg font-medium text-lg text-black">
                                    1
                                </div>
                                <div className="h-9 w-9 flex justify-center items-center bg-white border rounded-lg cursor-pointer hover:bg-gray-100">
                                    <ChevronRight className="w-6 h-6 text-[#344054]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

        </div>
    </div>
  )
}

export default Home2
