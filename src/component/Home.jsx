import React, { useState } from 'react';
import logo from "../assets/image.png";
import { Search, Plus, X, UserMinus, ChevronLeft, UserRoundCheck, Laptop, ChevronRight, Rocket, ChevronsUpDown } from 'lucide-react';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const [email, setEmail] = useState("");

    const handleClick = () => {
        setIsNavOpen((prev) => !prev);
        };

  return (
    <div className="w-full mx-auto justify-center flex p-2">
        <div className='w-full'>
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

            <div className=' mx-auto flex justify-center'>
                <div>
                    <div className='w-full mx-auto flex justify-center items-center'>
                        <div className="flex-col max-w-[795px] items-center mt-5">
                            <div className="mb-4">
                                <h1 className="font-semibold text-3xl lg:text-4xl text-[#000000] pb-1">
                                    Welcome Admin
                                </h1>
                                <h2 className="font-normal text-[16px] sm:text-2xl text-[#475367]">
                                    Manage and optimize your product prices seamlessly across multiple platforms.
                                    <span className="block">Launch the pricing engine to get started</span>
                                </h2>
                            </div>
                            <div className="mt-3" >
                                <button 
                                    className="p-3 w-[261px] border bg-[#192231] text-white rounded-lg flex items-center justify-center gap-2"
                                >
                                    <Rocket className="h-5" /> Launch Pricing Engine
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='w-full border my-10'></div>

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

                    <div className='w-full border my-10'></div>
                    
                    <div className='w-full mx-auto flex justify-center mb-10'>
                        <div className='border rounded-lg w-full max-w-[795px] p-2'>                   
                            <div className='mb-2 w-full'>
                                    <p className='font-[600] text-[16px] leading-[23.3px] text-[#101928] flex items-center mb-2'>
                                        <Laptop className='inline mr-4'/>
                                        <span>Login history</span>
                                    </p>
                                    <p className='font-[400] text-sm leading-[16.8px] text-[#667185]'>
                                        Accounts that have logged in to pricing engine in the last 28 days.
                                    </p>
                            </div>

                            <div className ='bg-[#F6F6F6] border-[#E4E7EC] border rounded-lg '>
                                <div className='border-b-2'>
                                    <div className='p-2'>
                                        <h1 className='mb-1 font-[600] text-[14px] leading-[20.3px] text-[#344054]'>felicia.reid@example.com</h1>
                                        <div className='pl-[80px]'>
                                            <p>Logged in via password from IP 84.17.35.89 <span className='block mt-1'>3 days ago</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-b-2'>
                                    <div className='p-2'>
                                        <h1 className='mb-1 font-[600] text-[14px] leading-[20.3px] text-[#344054]'>tim.jennings@example.com</h1>
                                        <div className='pl-[80px]'>
                                            <p>Logged in via password from IP 84.17.35.89 <span className='block mt-1'>5 days ago</span></p>
                                        </div>
                                    </div>

                                    <div className='p-2'>
                                        <h1 className='mb-1 font-[600] text-[14px] leading-[20.3px] text-[#344054]'>debra.holt@example.com</h1>
                                        <div className='pl-[80px]'>
                                            <p>Logged in via password from IP 84.17.35.89 <span className='block mt-1'>6 days ago</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex my-auto p-[16px] '>
                                    <div className='h-[36px] w-[124px] flex items-center gap-x-2'>
                                        <div className='h-[36px] w-[36px] flex justify-center items-center bg-white border rounded-lg'><ChevronLeft className='w-[30px] h-[30px] text-[#344054]'/></div>
                                        <div className='h-[36px] w-[36px] flex justify-center items-center bg-white border rounded-lg font-[400] leading-[20.3px] text-[#000000] text-2xl'>1</div>
                                        <div className='h-[36px] w-[36px] flex justify-center items-center bg-white border rounded-lg'><ChevronRight className='w-[30px] h-[30px] text-[#344054]'/></div>
                                    </div>
                                </div>
                            </div>    
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
