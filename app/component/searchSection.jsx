'use client'

import { useEffect, useState } from "react";
import Navbar from "../component/navbar";
import Navbar2 from "../component/navbar2";
import AddIcon from '@mui/icons-material/Add';
import { ExitToApp } from "@mui/icons-material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

let n = 1;
let height = 40 / n;
const list = [
    { flag: true, name: 'SEARCH' },
    { flag: false, name: 'PASSENGERS' },
    { flag: false, name: 'PAYMENT' },
    { flag: false, name: 'TICKETS' }
];
export default function SearchSection(){
    return(
<div>
    
            <div className="h-[60vh] bg-bg-img bg-cover">
                <Navbar/>
                <Navbar2/>

                <div>
                    <div className="flex gap-10 backdrop-blur-sm text-white bg-[#1C1C1C] mt-[20vh] pb-[87px] opacity-[70%] ml-[200px] mr-[200px] justify-center pt-[40px]">
                        <div>
                            <div>Travelling route</div>
                            <div className="flex gap-2">
                                <input type="text" className="p-1 rounded" placeholder="From" />
                                <button>&larr;&rarr;</button>
                                <input type="text" placeholder="To" className="p-1 rounded" />
                            </div>
                        </div>
                        <div>
                            Travelling date
                            <div>
                                <input type="date" className="p-1 rounded" />
                            </div>
                        </div>
                        <div className="flex-col">
                            <div>Travelling passengers</div>
                            <input type="text" placeholder="Number of passengers" className="p-1 rounded" />
                        </div>
                        <button className="bg-[#F03C07] rounded w-[150px] h-[40px] border-solid border-white hover:bg-white hover:duration-500 hover:text-[#F03C07] hover:opacity-[100%] absolute right-30 bottom-0 mb-4">
                            Search Tickets
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-black h-[40px] text-white text-2xl flex">
                {list.map((item, index) => (
                    <div key={index}  className={`h-[40px] ${item.flag?'bg-[#F03C07]' :'bg-[#1C1C1C]'}   w-[30%] relative flex justify-center items-center`}>
                        <div className="flex gap-2">
                            <span className="w-[30px] h-[30px] border-2 rounded-full flex justify-center items-center">
                                {index + 1}
                            </span>
                            <span>{item.name}</span>

                            
                                <div>
                                    {new Array(n).fill(0).map((_, i) => (
                                        <>

                                       <div
                                            key={i}
                                            style={{
                                                top: `${height * i}px`,
                                                borderLeftWidth: `${height}px`,
                                                borderTopWidth: `${height / 2}px`,
                                                borderBottomWidth: `${height / 2}px`,
                                            }}
                                            className={`absolute right-0 translate-x-[100%] w-0 h-0 ${item.flag?'border-l-[#F03C07]' :'border-l-[#1C1C1C]'} z-10 border-t-transparent border-b-transparent`}
                                        />
                                        {/* <div className="absolute h-[22px] w-[1px] right-0 top-0 bg-gray-400 origin-top-left rotate-[-63deg] z-10 translate-x-[100%]">

                                        </div> */}
                                        </>
                                    ))}
                                </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
)}