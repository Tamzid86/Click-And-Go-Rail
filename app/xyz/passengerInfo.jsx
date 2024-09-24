'use client'
import SearchSection from "../component/searchSection"

export default function PassengerInfo() {
    let passengerNumber = 2

    return (
        <div className="w-[100vw] overflow-hidden">
            <SearchSection />
            <form action="">
                {Array.from({ length: passengerNumber }).map((item, i) => (
                    <div key={i}>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-[65%] bg-slate-200 h-auto flex flex-col gap-5 p-3 mt-9 rounded">
                                <span>Passenger {i + 1}</span>
                                <div className="h-[1px] w-[100%] bg-black"></div>
                                <div className="flex gap-5">
                                    <span className="flex flex-col gap-2"><label htmlFor="">First Name </label> <input className="rounded" type="text" /></span>
                                    <span className="flex flex-col gap-2"><label htmlFor="">Last Name </label> <input className="rounded" type="text" required /></span>
                                    <span className="flex flex-col gap-2"><label htmlFor="">Age </label> <input className="rounded" type="number" /></span>
                                </div>
                                <div className="flex gap-5">
                                    <span className="flex flex-col gap-2"><label htmlFor="">Contact Number</label> <input className="rounded" type="number" /></span>
                                    <span className="flex flex-col gap-2"><label htmlFor="">NID/Birth Certificate</label><input className="rounded" type="number" /></span>
                                    <button
                                        type="submit"
                                        className={`bg-[#F03C07] ${i == (passengerNumber - 1) ? "w-[200px]" : "w-[80px]"}  h-[40px] rounded mt-4 text-white hover:bg-white hover:text-[#F03C07]`}>{i == passengerNumber - 1 ? "Proceed to Payment" : "Next"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </form>
        </div>
    )

}