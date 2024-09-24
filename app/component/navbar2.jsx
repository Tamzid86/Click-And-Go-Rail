export default function Navbar2() {
    return (
        <div className="flex flex-col lg:flex-row h-[70px] opacity-[90%] bg-[#202121] font-semibold lg:items-center text-lg lg:justify-between gap-5">
            <div className="flex flex-col lg:flex-row gap-5 text-[#888891] ">
                <div className="lg:ml-[200px] hover:text-slate-100 hover:duration-500">Home</div>
                <div className="hover:text-slate-100 hover:duration-500"                >Blog</div>
                <div className="hover:text-slate-100 hover:duration-500"                >About</div>
                <div className="hover:text-slate-100 hover:duration-500"                >Contact Us</div>

            </div>
            <div className="mr-[285px] text-[#888891] hover:text-slate-100 hover:duration-500">
                Profile
            </div>
        </div>
    )
}
// className="hover:text-slate-100 hover:duration-500"