export default function Navbar() {
    return (
        <div className="bg-navbar h-[50px] w-[100%] flex justify-between">
            <div className="flex gap-10 ml-[200px] items-center">
                <img className="w-10 h-10 mt-1" src="./images/logo2.png" alt="" />
                <div className="font-bold text-2xl text-white">Click<span className="text-[#F03C07]">&</span>GoRail</div>
            </div>
            <div className="flex gap-10 items-center mr-[200px] text-[#888891] text-lg">
                <div className="hover:text-slate-100 hover:duration-500"> Signup </div>
                <div className="hover:text-slate-100 hover:duration-500"> Login </div>
            </div>
        </div>
    );
}