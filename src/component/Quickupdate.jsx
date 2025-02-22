import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/image.png";
import {  Search, ChevronsUpDown, ChevronLeft, House, Upload, BookOpenText } from "lucide-react";

const Quickupdate = () => {

       const [isOpen, setIsOpen] = useState(false);

       const [selectedRound2, setSelectedRound2] = useState(null);

        const [isClicked, setIsClicked] = useState('');
        
        const handleClick2 = (buttonId) => {
            setIsClicked(buttonId); 
        };

        const [selectedOption, setSelectedOption] = useState("bulk");
    
        const options = [
            { id: "bulk", label: "Bulk Update" },
            { id: "quick", label: "Quick Update" },
        ];

  return (
    <div className='w-full px-1 py-2 sm:p-5'>
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

        <div className="mx-auto flex flex-col justify-center items-center p-2 lg:px-40">
            <div className="">
                <div className="flex py-5">
                    <button className="border-r border-[#344054] h-[23px] flex items-center pr-4">
                    <ChevronLeft className="w-[20px] h-[20px] text-[#344054]" />
                    <span className="pl-2 text-[#344054]">Back</span>
                    </button>

                    <div className="px-4 flex">                   
                        <House className="w-[20px] h-[20px]"/>
                        <div className="pl-5"><span>Home &nbsp;/</span> 
                        pricing Engine</div>                   
                    </div>
                </div>

            
                <div className=" mb-10">
                    <h1 className="font-[600] text-[24px] leading-[28.8px]">
                        Pricing Engine
                    </h1>
                    <p className="font-[400] text-[14px] leading-[20.3px] text-[#667185]">Capital pricing engine allows you to effciently manage pricing strategies with bulk updates, quick adjustments, and realtime marketplace sync</p>
                </div>

                <div>
                    <h2 className="font-[600] text-[16px] leading-[23.2px] text-[#101928]">
                        Update method
                    </h2>
                    <p className="font-[400] text-[12px] leading-[16.8px] text-[#667185] mb-5">
                        Choose between a bulk update for multiple produts or a quick update for a single product to streamine your pricing adjustments with ease
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

            <div className="flex flex-wrap w-full mt-10 sm:mt-14 gap-4">
                <div className="w-full flex-[1_0_20px]">
                    <div className="border p-2 sm:p-[16px] rounded-lg">
                        <div className="text-[#101928] pb-5 border-b">
                            <h1 className="font-[600]">Product pricing rule</h1>
                            <p className="font-[400] pb-5">Upload the .csv file containing your product data</p>
                            <label className="flex items-center gap-2 px-4 py-2 text-[#101928] rounded-lg cursor-pointer border border-[#101928] w-[150px]">
                                <Upload className="w-5 h-5" />
                                <span>Upload File</span>
                                <input type="file" className="hidden" />
                            </label>
                        </div>

                        <div className="border-b py-5 ">
                            <p>Product details</p>
                            <p className="mb-10">Provide the header title for the product line you want to update</p>

                            <div className="flex gap-x-4 mb-4">
                                <div className="relative flex-1 py-2">
                                    <input type="text" name="Brand ID" id="Brand ID" placeholder="e.g Brand ID" className="border w-full px-2 py-1 rounded-lg italic font-[400] text-[#98A2B3] text-[14px]" />
                                    <label htmlFor="Brand ID" className="absolute left-0 translate-y-[-25px] text-[#344054] text-[14px] font-[500] leading-[20.3px]">Brand ID</label>
                                </div>

                                <div className="relative flex-1 py-2">
                                    <input type="text" name="PartTypeName" id="PartTypeName" placeholder="e.g PartTypeName" className="border w-full px-2 py-1 rounded-lg italic font-[400] text-[#98A2B3] text-[14px]" />
                                    <label htmlFor="PartTypeName" className="absolute left-0 translate-y-[-25px] text-[#344054] text-[14px] font-[500] leading-[20.3px]">PartTypeName</label>
                                </div>
                            </div>

                            <div className="relative w-full py-5">
                                <input type="text" name="Category" id="Category" placeholder="e.g categoryTypeName" className="border w-full px-2 py-1 rounded-lg italic font-[400] text-[#98A2B3] text-[14px]" />
                                <label htmlFor="Brand ID" className="absolute left-0 translate-y-[-25px] text-[#344054] text-[14px] font-[500] leading-[20.3px]">Category (optional)</label>
                            </div>

                            <div className="relative w-full  ">
                                <p className="py-2">price range</p>

                                <div className="grid lg:grid-cols-3 gap-4 pt-1 pb-10">
                                    <div className="pl-10 flex relative">
                                        <input type="text" name="From" id="From" placeholder="e.g From" className="border w-full px-2 py-1 rounded-lg italic font-[400] text-[#98A2B3] text-[14px]" />
                                        <label htmlFor="From" className="absolute left-[-2px] text-[#344054] text-[14px] font-[500] leading-[20.3px] translate-y-[5px]">From</label>
                                    </div>

                                    <div className="pl-5 flex relative">
                                        <input type="text" name="To" id="To" placeholder="e.g To" className="border w-full px-2 py-1 rounded-lg italic font-[400] text-[#98A2B3] text-[14px]" />
                                        <label htmlFor="To" className="absolute left-[0] text-[#344054] text-[14px] font-[500] leading-[20.3px] translate-y-[5px]">To</label>
                                    </div>

                                    <div className="pl-[80px] flex relative">
                                        <input type="text" name="Set margin" id="Set margin" placeholder="e.g Margin" className="border w-full px-2 py-1 rounded-lg italic font-[400] text-[#98A2B3] text-[14px]" />
                                        <label htmlFor="Set margin" className="absolute left-[-1px] text-[#344054] text-[14px] font-[500] leading-[20.3px] translate-y-[5px]">:set margin</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div className="mt-5">
                                    <h1 className="font-[600] text-md leading-[23.2px] text-[#101928]">Round up options</h1>
                                    <p>Choose whether to round up the selling price and specify rounding rules.</p>
                                </div>

                                <div className="flex gap-x-10 gap-y-2 flex-wrap py-3">
                                    <div>
                                        <label htmlFor="no-round2" className="flex items-center gap-2 cursor-pointer rounded-lg">
                                            <div className="w-4 h-4 border border-[#192231] rounded-full flex justify-center items-center">
                                                <input
                                                    type="radio"
                                                    name="round-up2"
                                                    id="no-round2"
                                                    className="hidden peer"
                                                    checked={selectedRound2 === "no-round2"}
                                                    onChange={() => setSelectedRound2("no-round2")}
                                                />
                                                <div className="w-1.5 h-1.5 bg-transparent rounded-full peer-checked:bg-[#192231]"></div>
                                            </div>
                                            <span className="text-[#192231] text-sm">Do not round</span>
                                        </label>
                                    </div>

                                    <div>
                                        <label htmlFor="round-up2" className="flex items-center gap-2 cursor-pointer rounded-lg">
                                            <div className="w-4 h-4 border border-[#192231] rounded-full flex justify-center items-center">
                                                <input
                                                    type="radio"
                                                    name="round-up2"
                                                    id="round-up2"
                                                    className="hidden peer"
                                                    checked={selectedRound2 === "round-up2"}
                                                    onChange={() => setSelectedRound2("round-up2")}
                                                />
                                                <div className="w-1.5 h-1.5 bg-transparent rounded-full peer-checked:bg-[#192231]"></div>
                                            </div>
                                            <span className="text-[#192231] text-sm">Round up</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="relative w-full py-1 mt-10">
                                    <input type="text" name="Round up to" id="round up to" placeholder=".99" className="border w-full px-2 py-1 rounded-lg italic font-[400] text-[#98A2B3] text-[14px]" />
                                    <label htmlFor="Round up to" className="absolute left-0 translate-y-[-25px] text-[#344054] text-[14px] font-[500] leading-[20.3px]">Round up to:</label>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="w-full mt-10 flex-[1_0_200px]">
                    <div >
                        <div className="border p-1 rounded-lg">
                            <h1 className="text-[#101928] font-medium pb-5">
                                <BookOpenText className="inline h-5 w-5"/>
                                <span className="inline pl-2 font-[600] text-[16px] leading-[23.2px] text-[#101928]">Documentation</span>
                            </h1>

                            <div className="w-full bg-[#F6F6F6] border-[#E4E7EC] border rounded-lg p-[16px] font-[500] text-[14px] leading-[20.3px] text-black">
                                <div className="mb-2 font-bold">
                                    <p>BrandID JTWM</p>
                                    <p>Part Type = Tire</p>
                                </div>

                                <div className="mb-2 font-light">
                                    <p>Cost from 0-50$ = 50% GP (COST/.5)</p>
                                    <p>Cost from 50-99.99$ = 47.5% GP (COST/.525)</p>
                                    <p>Cost from 100-199.99$ = 45% GP (COST/.55)</p>
                                </div>
                            </div>
                        </div>

                        <div className="border rounded-lg mt-[45px] py-5 px-10 flex flex-wrap gap-x-8 gap-y-2 w-full">
                                    
                            <button
                                type="button"
                                id="cancel-btn"
                                className={`px-4 py-2 rounded-lg flex-[1_0_120px] transition border border-[#192231] ${
                                    isClicked === "cancel-btn" ? "bg-[#192231] text-white" : "bg-white text-[#192231]"
                                }`}
                                onClick={() => handleClick2("cancel-btn")}
                            >
                                Cancel
                            </button>

                            <Link to="/home2"
                                type="button"
                                id="start-btn"
                                className={`p-2 rounded-lg flex-[1_0_120px] min-w-max transition border border-[#192231] ${
                                    isClicked === "start-btn" ? "bg-[#192231] text-white" : "bg-white text-[#192231]"
                                }`}
                                onClick={() => handleClick2("start-btn")}
                            >
                                Start bulk update
                            </Link>
                        </div>

                    </div> 
                </div>

            </div>
        </div>
    </div>
  )
}

export default Quickupdate
