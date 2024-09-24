import SearchSection from "../component/searchSection";

export default function Validation(){
    let passengerNumber=4;
    let firstName="Tamzid";
    let lastName="Bakht";
    let age= 23
    let ContactNumber="123434221"
    let NID="1221214340987900"
    let totalAmount=5500

    return(
        <div className="overflow-hidden">
            <SearchSection/>
            <div className="p-5 ml-10">
                <div className="flex justify-between">
                </div>

                <div className="flex gap-20">
                <div className="flex flex-col items-center gap-5 bg-[#1C1B20] text-slate-300 p-3 rounded">
                    
                    <span className="text-xl pt-[40px]">Summary</span> 
                    <span className="text-lg font-semibold">Paharika Express</span>
                    <div className="flex flex-col">
                        <span>From :</span>
                        <div className="w-[100%] h-[1px] bg-slate-300"></div>
                        <span> Sylhet Railway Station,<br /> Sylhet.</span>
                        <span><span className="font-semibold">Departure Time:</span> 1:00pm</span>
                        <span className="text-sm font-light">13th Feb, 2024</span>
                    </div>
                    <div className="flex flex-col">
                        <span>To :</span>
                        <div className="w-[100%] h-[1px] bg-slate-300"></div>
                        <span>kamlapur Railway Station,<br /> Dhaka.</span>
                        <span> <span className="font-semibold">Arrival Time:</span> 8:30pm</span>
                        <span className="text-sm font-light">13th Feb, 2024</span>
                    </div>
                    <div className="text-xl font-semibold text-[#F03C07]">
                        Total Cost: TK <span>{totalAmount}</span>/= 
                    </div>
                </div>
                <div className="flex flex-col items-center  " >
                    <span className=" pb-[30px]"><u className="text-2xl font-semibold">Passengers Information:</u> </span>

                    {Array.from({length:passengerNumber}).map((_,i)=>(
                        <div key={i}>
                            <div  className="flex flex-col w-[880px]  bg-slate-50 border border-solid border-black shadow-2xl  p-5">
                                <span><u className="text-lg">Passenger {i+1}</u> </span>
                                <span><span className="font-semibold">Passenger Name:</span>  {firstName+" "+lastName} </span>
                                <span><span className="font-semibold">Passenger Age: </span>{age}</span>
                                <span><span className="font-semibold">Contact Number:</span> {ContactNumber}</span>
                                <span><span className="font-semibold">NID/Birth Certificate:</span> {NID}</span>
                            </div>
                        </div>
                    ))
                    }
                    <button className="bg-[#F03C07] mt-5 w-[90px] h-[40px] rounded opacity-[80%] hover:opacity-[100%]">Confirm</button>
                </div>
                
                </div>
            </div>
        </div>
    )
}