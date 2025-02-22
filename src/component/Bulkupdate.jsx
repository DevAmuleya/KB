import React, { useState } from 'react';
import logo from "../assets/image.png";
import {  Search, ChevronRight, ChevronsUpDown, ChevronLeft, House, Upload, BookOpenText } from "lucide-react";

const Bulkupdate = () => {
    const [isOpen, setIsOpen] = useState(false);

     const [value, setValue] = useState(10);
  
    // Function to update value
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
    setIsSelected((prev) => !prev);
    
    };

    const [isClicked, setIsClicked] = useState("");

    const handleClick2 = (button) => {
        setIsClicked(button);
    };

    const [selectedOption, setSelectedOption] = useState("bulk");

    const options = [
        { id: "bulk", label: "Bulk Update" },
        { id: "quick", label: "Quick Update" },
    ];

    return (
        <div className='w-full p-2'>
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

            <div className='w-full'>
                <div className='flex lg:ml-[200px]'>
                    <div className=''>
                        <div className="mt-2 sm:mb-4">
                            <h1 className="font-[600] text-[24px] leading-[28.8px]">Pricing Engine</h1>
                            <p className="font-[400] text-[14px] leading-[20.3px] text-[#667185]">
                            Capital pricing engine allows you to efficiently manage pricing strategies with bulk updates, quick adjustments, and real-time marketplace sync
                            </p>
                        </div>

                        <h2 className="font-[600] text-[16px] leading-[23.2px] text-[#101928]">Update Method</h2>
                        <p className="font-[400] text-[12px] leading-[16.8px] text-[#667185] mb-5">
                        Choose between a bulk update for multiple products or a quick update for a single product to streamline your pricing adjustments with ease
                        </p>

                        <div className="flex flex-wrap gap-5 w-full p-2">
                            {options.map(({ id, label }) => (
                                <div key={id} className="flex-[1_0_200px]">
                                    <label
                                        htmlFor={id}
                                        className={`flex items-center max-w-[254px] p-3 cursor-pointer rounded-lg border border-[#192231] 
                                            ${selectedOption === id ? "bg-gray-700 text-white" : "bg-white text-gray-700"}`}
                                        onClick={() => setSelectedOption(id)}
                                    >
                                        <div className={`w-[20px] h-[20px] border-[4px] rounded-full flex items-center 
                                            ${selectedOption === id ? "border-white" : "border-[#192231]"}`}>
                                            <input 
                                                type="radio" 
                                                name="updateType" 
                                                id={id} 
                                                className="hidden peer"
                                                checked={selectedOption === id} 
                                                onChange={() => setSelectedOption(id)}
                                            />
                                            <div className="w-[6px] h-[6px] bg-transparent rounded-full"></div>
                                        </div>
                                        <span className="text-sm pl-5 min-w-fit">{label}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full p-2 mt-5'>
                <div className='flex mx-auto max-w-[1000px] justify-center'>
                    <div className='flex flex-wrap gap-5 w-full'>
                        <div className=' w-full flex-[1_0_150px]'>
                            <div className="text-[#101928] pb-5 border-b p-5 w-full border rounded-lg">
                                <div>
                                    <h1 className="font-[600]">Product Pricing Rule</h1>
                                    <p className="font-[400] pb-5">Upload the .csv file containing your product data</p>
                                    <label className="flex items-center gap-2 px-4 py-2 text-[#101928] rounded-lg cursor-pointer border border-[#101928] w-[150px]">
                                        <Upload className="w-5 h-5" />
                                        <span>Upload File</span>
                                        <input type="file" className="hidden" />
                                    </label>
                                </div>
                                

                                <div className="mt-10">
                                    <p>Product Details</p>
                                    <p className="mb-10">Provide the header title for the product line you want to update</p>
                                </div>

                                <div className="flex gap-4 gap-y-10 flex-wrap w-full mb-4">
                                    <div className="relative flex-[1_0_100px]">
                                        <input type="text" name="Brand ID" id="BrandID" placeholder="e.g Brand ID" className="border w-full px-2 py-1 rounded-lg italic font-[400] text-[#98A2B3] text-[14px]" />
                                        <label htmlFor="BrandID" className="absolute left-0 translate-y-[-25px] text-[#344054] text-[14px] font-[500] leading-[20.3px]">Brand ID</label>
                                    </div>

                                    <div className="relative flex-[1_0_100px]">
                                        <input type="text" name="PartTypeName" id="PartTypeName" placeholder="e.g PartTypeName" className="border w-full px-2 py-1 rounded-lg italic font-[400] text-[#98A2B3] text-[14px]" />
                                        <label htmlFor="PartTypeName" className="absolute left-0 translate-y-[-25px] text-[#344054] text-[14px] font-[500] leading-[20.3px]">Part Type Name</label>
                                    </div>
                                </div>

                                <div className="relative w-full h-[60px] py-5">
                                    <input type="text" name="Category" id="Category" placeholder="e.g categoryTypeName" className="border w-full px-2 py-1 rounded-lg italic font-[400] text-[#98A2B3] text-[14px]" />
                                    <label htmlFor="Category" className="absolute left-0 translate-y-[-25px] text-[#344054] text-[14px] font-[500] leading-[20.3px]">Category (optional)</label>
                                </div>

                                <div className="pt-1 pb-10">
                                    <p className="py-4">Price Range</p>
                                    <div className="grid lg:grid-cols-3 gap-4 w-full relative">
                                        <div className="relative w-full">
                                            <label htmlFor="From" className="absolute top-[-10px] left-2 bg-white px-1 text-[#344054] text-[14px] font-[500]">From</label>
                                            <input type="text" name="From" id="From" placeholder="e.g From" className="border px-2 py-2 rounded-lg w-full italic font-[400] text-[#98A2B3] text-[14px]" />
                                        </div>

                                        <div className="relative w-full">
                                            <label htmlFor="To" className="absolute top-[-10px] left-2 bg-white px-1 text-[#344054] text-[14px] font-[500]">To</label>
                                            <input type="text" name="To" id="To" placeholder="e.g To" className="border px-2 py-2 rounded-lg w-full italic font-[400] text-[#98A2B3] text-[14px]" />
                                        </div>

                                        <div className="relative w-full">
                                            <label htmlFor="UpdatedPrice" className="absolute top-[-10px] left-2 bg-white px-1 text-[#344054] text-[14px] font-[500]">:set Margin</label>
                                            <input type="text" name="UpdatedPrice" id="UpdatedPrice" placeholder="e.g Margin" className="border px-2 py-2 rounded-lg w-full italic font-[400] text-[#98A2B3] text-[14px]" />
                                        </div>
                                    </div>

                                </div>

                                <div className="border w-full"></div>

                                <div className="mt-5">
                                    <h1 className="font-[300] text-md leading-[23.2px] text-[#101928] mb-2">Round up options</h1>
                                    <p>Choose whether to round up the selling price and specify rounding rules.</p>
                                </div>   

                                <div className="flex gap-2">
                                    <label htmlFor="no-round" className="flex items-center gap-2 cursor-pointer rounded-lg">
                                        <div className="w-4 h-4 border-[1px] border-[#192231] rounded-full flex justify-center items-center">
                                        <input type="radio" name="round-up" id="no-round" className="hidden peer" />
                                        <div className="w-1.5 h-1.5 bg-transparent peer-checked:bg-[#192231] rounded-full"></div>
                                        </div>
                                        <span className="text-[#192231] text-sm"> Do not round</span>
                                    </label>
                                    
                                    <label htmlFor="round-up" className="flex items-center gap-2 cursor-pointer p-[12px] px-12 rounded-lg">
                                        <div className="w-4 h-4 border-[1px] border-[#192231] rounded-full flex justify-center items-center">
                                        <input type="radio" name="round-up" id="round-up" className="hidden peer" />
                                        <div className="w-1.5 h-1.5 bg-transparent peer-checked:bg-[#192231] rounded-full"></div>
                                        </div>
                                        <span className="text-[#192231] text-sm">Round up</span>
                                    </label>   
                                </div>

                                <div className="relative w-full mt-10">
                                    <input type="text" name="Round up to" id="round up to" placeholder=".99" className="border w-full px-2 py-1 rounded-lg italic font-[400] text-[#98A2B3] text-[14px]" />
                                    <label htmlFor="round up" className="absolute left-0 translate-y-[-25px] text-[#344054] text-[14px] font-[500] leading-[20.3px]">Round up to:</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className=' w-full flex-[1_0_150px]'>
                            <div>                              
                                <div className=" w-full">
                                    <div className={`${isSelected ? "flex" : "hidden"} p-2 border rounded-lg my-5 w-full`}>
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
                                    
                                            <div>
                                                <ChevronRight className=" w-14 top-1 right-0 text-gray-500" />
                                            </div>
                                        </div>
                                        <p>
                                            {`${value}% of the complete `}
                                        </p>
                                        
                                    </div> 
                                                    
                                    <div className=" border p-2 rounded-lg">
                                        <h1 className="text-[#101928] font-medium pb-5">
                                            <BookOpenText className="inline h-5 w-5"/>
                                            <span className="inline pl-2">Documentation</span>
                                        </h1>                                        

                                        <div className=" lg:h-[430px] h-[400px] bg-gray-200 border-[#E4E7EC] border p-2 rounded-lg relative mx-auto">
                                            <h1 className=" mb-5 font-[600] text-[24px] leading-[28.8px] pt-5">
                                                Sample Doc
                                            </h1>
                                            <div className="tableStyle relative w-full">
                                                <table className="table ">
                                                    <thead>
                                                        <tr>
                                                            <th>BrandID</th>
                                                            <th>PartTypeName</th>
                                                            <th>Category</th>
                                                            <th>From</th>
                                                            <th>To</th>
                                                            <th>Margin</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>DWRT</td>
                                                            <td>Wheel Lug Stud</td>
                                                            <td></td>
                                                            <td>0</td>
                                                            <td>50</td>
                                                            <td>20</td>
                                                        </tr>
                                                        <tr>
                                                            <td>FBFT</td>
                                                            <td>Tire</td>
                                                            <td>Tire</td>
                                                            <td>20</td>
                                                            <td>50</td>
                                                            <td>10</td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div> 

                                <div className="border rounded-lg mt-[45px] py-5 px-10 flex gap-x-8">
                                    <button
                                        type="button"
                                        className={`px-4 py-2 rounded-lg transition w-[131px] border border-[#192231] ${
                                            isClicked === "cancel" ? "bg-[#192231] text-white" : "bg-white text-[#192231]"
                                        }`}
                                        onClick={() => handleClick2("cancel")}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="button"
                                        className={`py-2 rounded-lg transition w-[150px] border border-[#192231] ${
                                            isClicked === "start" ? "bg-[#192231] text-white" : "bg-white text-[#192231]"
                                        }`}
                                        onClick={() => handleClick2("start")}
                                    >
                                        Start bulk update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    );
}

export default Bulkupdate;
