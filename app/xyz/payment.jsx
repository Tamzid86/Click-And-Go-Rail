import SearchSection from "../component/searchSection";
export default function Payment(){
    let totalAmount=2150
    let passengerNumber=3
    let firstName="Tamzid";
    let lastName="Bakht";
    let age= 23
    let ContactNumber="123434221"
    let NID="1221214340987900"
    let ticketClass=['AC_CABIN','AC_CHAIR','SHUVON']
    return(
        <div className="flex flex-col overflow-hidden">
            <SearchSection/>
            <div className="flex m-10 gap-10 ml-20 justify-center">
                
                <div className="w-[40%] flex flex-col">
                    {/* <span><u>Travel information:</u> <br /> </span> */}

                    <span className="text-xl font-semibold"> Travel Information:</span>
                    <div className="h-[1px] w-[38%] bg-black mb-5"></div>

                    <div className=" flex gap-9 mt-5 ">
                        <div className="flex flex-col">
                            <span>From :</span>
                            <span> Sylhet Railway Station,<br /> Sylhet.</span>
                            <span><span className="font-semibold">Departure Time:</span> 1:00pm</span>
                            <span className="text-sm font-light">13th Feb, 2024</span>
                        </div>
                        <div className="w-[1px] h-[100px] bg-black"></div>
                        <div className="flex flex-col">
                            <span>To :</span>
                            <span>kamlapur Railway Station,<br /> Dhaka.</span>
                            <span> <span className="font-semibold">Arrival Time:</span> 8:30pm</span>
                            <span className="text-sm font-light">13th Feb, 2024</span>
                        </div>
                        <div>
                    
                </div>
                    </div>
                    <img className="w-[90px] h-[70px] ml-[160px] mt-8 " src="images/logo.png" alt="" />

<span className="font-bold text-3xl ml-[80px] ">Paharika Express</span>
<span className="text-sm ml-[150px]">Total Passengers: <span className="font-semibold">{passengerNumber}</span>  </span>

                </div>
                <div className="flex flex-col">
                <span className="text-xl font-semibold">Ticket Information:</span>
                    <div className="h-[1px] w-[45%] bg-black mb-5"></div>

                    {/* {Array.from({passengerNumber}).map((_,i)=>
                        <div>
                            
                        </div>
                    )} */}
                    <table className="table-auto border-separate border-spacing-x-16 border-spacing-y-2 border  text-center">
                        <thead>
                        <tr className="font-semibold">
                            <td>Class</td>
                            <td>Quantity</td>
                            <td>Price</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>AC_CABIN</td>
                            <td>2</td>
                            <td>1020</td>
                        </tr>
                        <tr>
                            <td>AC_CHAIR</td>
                            <td>1</td>
                            <td>920</td>
                        </tr>
                        <tr>
                            <td>SHUVON</td>
                            <td>1</td>
                            <td>750</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className=" mt-8 flex flex-col w-[80%] ml-16 items-center gap-4">
                        <span className="text-lg font-bold  text-[#F03C07]">Total amount to be paid is <span className="font-semibold">{totalAmount}</span> TK.</span>
                        <button className=" w-[150px] bg-[#F03C07] rounded opacity-[80%] text-white hover:opacity-[100%] h-[40px]">Make Payment</button>
                    </div>
                </div>
            </div>

        </div>
    )
}