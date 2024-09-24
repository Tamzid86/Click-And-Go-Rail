import Image from "next/image";
import LandingPage from "./pages/landingpage";
import Trainlist from "./pages/trainlist";
import Payment from "./xyz/payment";
import Validation from "./xyz/validation";
import PassengerInfo from "./xyz/passengerInfo";

export default function Home() {
  return (
    <div className="grid grid-cols-1 min-h-[100vh]">
      {/* <LandingPage/> */}
      {/* <Trainlist /> */}
      <PassengerInfo/>
      {/* <Payment/> */}
      {/* <Validation/> */}
      {/* <div 
    on
      className="w-full h-[40px] bg-rose-500  flex self-end">

      </div> */}
    </div>
  );
}
