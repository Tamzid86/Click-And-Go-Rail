import Navbar from "../component/navbar";
import Navbar2 from "../component/navbar2";
export default function LandingPage(){
    return(
        <div className="bg-bg-img h-[100vh] w-[100%] bg-cover">
            <Navbar/>
            <div>
                <Navbar2/>
                <div className="flex  justify-center items-center gap-[100px] backdrop-blur-sm h-[calc(100vh-120px)]">
                    <div className="pr-[100px]">
                        <div>
                            <div className="text-7xl font-semibold text-white"> Welcome to</div> <div className="text-5xl text-white">Click<span className="text-[#F03C07]">&</span>GoRail </div> 
                        </div>
                        <div className="text-white pt-[20px] text-2xl">
                            The easiest way to your destination.
                        </div>
                    </div>
                    <div className="bg-[#1C1C1C] w-[500px] h-[400px] p-5 opacity-[70%] text-white">
                        <div className="pb-2 text-lg pt-10">Travelling Route</div>
                        <div className="flex gap-5">
                            <input className="w-[40%] pl-2" type="text" placeholder="from" />
                            <button className="bg-white text-gray-900">&larr;&rarr;</button>

                            <input className="w-[40%] pl-2" type="text" placeholder="to" />
                        </div>
                        <div className=" flex">
                            <div>
                                <div className="pb-2 pt-10 text-lg">Travelling Date</div>
                                <input className="w-[130%]" type="date" />
                            </div>
                            <div className="ml-[120px]">
                                <div className="pb-2 pt-10 text-lg ">Travelling Persons</div>
                                <input className="w-[92%] pl-2" type="text" placeholder="Number of passenger" />
                            </div>
                        </div>
                        <button className="bg-[#F03C07] rounded w-[150px] h-[40px] border-solid border-white mt-11 ml-[150px] hover:bg-white hover:duration-500 hover:text-[#F03C07]"> Search Tickets</button>
                    </div>
                </div>
            </div>
        </div>

    )
}