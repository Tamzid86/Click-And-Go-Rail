'use client'
import { useEffect, useState} from "react";
import Navbar from "../component/navbar";
import Navbar2 from "../component/navbar2";
import AddIcon from '@mui/icons-material/Add';
import { ExitToApp } from "@mui/icons-material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import SearchSection from "../component/searchSection"
import Link from 'next/link';


export default function Trainlist() {

const [purchasedTickets, setPurchasedTickets]  =useState(0)
const [cart, setCart]=useState([])
const [showCart, setShowCart]=useState(false)
const [tickets, setTickets]=useState([
    {
        id:1,
        Class:"AC_CABIN",
        availableSeat:23,
        price:700,
        purchased:0,
        add: <AddIcon/>
        
    },
    {
        id:2,
        Class:"AC_CHAIR",
        availableSeat:23,
        price:700,
        purchased:0,

        add: <AddIcon/>

    },
    {
        id:3,
        Class:"SNIGHDHA",
        availableSeat:23,
        price:700,
        purchased:0,
        add: <AddIcon/>

    },
    {
        id:4,
        Class:"SHUVON",
        availableSeat:23,
        price:700,
        purchased:0,
        add: <AddIcon/>

    },
    {
        id:5,
        Class:"SHULOV",
        availableSeat:23,
        price:700,
        purchased:0,
        add: <AddIcon/>

    }
])

function TotalAmount(cart){
    let total=0;
    cart.map((item,key)=>{
        total+=item.price;
    })
    return total;
}


function AddTicketByID(id, value=1){
    let index;
    myParsedResponse["id"].forEach((item, idx)=>{
        if (item == id) index = idx;
    })
    AddTickets(index, value);
}
// function AddTicketByID(id, value = 1){
//     const index = myParsedResponse["id"].indexOf(id);
//     if(index !== -1){
//         AddTickets(index, value);
//     } else {
//         console.error("ID not found in the tickets list");
//     }
// }

        

function addToCart(index, id) {
    if (purchasedTickets >= 4) {
        alert("You cannot buy more than 4 tickets!");
        return;
    }
    changeCart(index);
    AddTicketByID(id);
}

function removeFromCart(index, id) {
    if (purchasedTickets <= 0) {
        alert("Cart is already empty!");
        return;
    }
    setShowCart(purchasedTickets == 1 ? false : true);
    changeCart(index, -1);
    AddTicketByID(id, -1);
}
function changeCart(index, value = 1) {
    if(value > 0) {
        setCart(prev=>{
            const temp=structuredClone(prev)
             temp.push({
                 name: myParsedResponse["Class"][index],
                 price: myParsedResponse["price"][index],
                 id: myParsedResponse["id"][index]
             })
             return temp;
         });
        
    }   else {
        setCart(prev=>{
            const newCart=[...prev]
            newCart.splice(index, 1)
            // const newCart = prev.filter((item, idx) => item.id !== myDeepCopy["id"][index]);
            return newCart
        })
    }
}

function AddTickets(index, value=1){
    console.log("ADDED TO TICKETS");
   

    const myDeepCopy = {};
    // const cartInfo = {
    //     "Class": [...cart.map(item => item.Class)], 
    //     "price": [...cart.map(item => item.price)], 
    // };
   

    for(let key of Object.keys(myParsedResponse)){
        const tempObj = [];
        for(let i = 0; i<myParsedResponse[key].length; i++){
            tempObj.push(myParsedResponse[key][i]);
        }
        myDeepCopy[key] = tempObj;
    }
    myDeepCopy["availableSeat"][index] -= value;
    myDeepCopy["purchased"][index] += value;

    if(value>0){
        
        // cartInfo["Price"][index]= myDeepCopy["price"][index]
       
        setPurchasedTickets(
            prev=>{
                console.log(prev);
                if(prev>=4){
                   
                    return prev;
                }
                return prev+1
               
            }
        )
    }
    
    else if(value<0){
       
        const temp = purchasedTickets;
        setPurchasedTickets(prev => prev - 1);
        if(temp == 1){
            setShowCart(false)
;
        }
    }
    setMyParseResponse(prev=>{
        console.log(prev);
        return myDeepCopy
    });
  
    
}


    // let n = 1;
    // let height = 40 / n;
    // const list = [
    //     { flag: true, name: 'TICKETS' },
    //     { flag: false, name: 'PASSENGERS' },
    //     { flag: false, name: 'PAYMENT' },
    //     { flag: false, name: 'VALIDATION' }
    // ];
    

    const keyHeaderObject = {
        id : "ID",
        class : "Class",
        availableSeat: "Seat",
        price: "Price",
        add:"Add "
    }

     const tempObj = {
     }
     
      
     
     tickets.forEach(ticket=>{
        
        Object.keys(ticket).forEach(key=>{
            if(key in tempObj){
                tempObj[key].push(ticket[key])
            } else {
                tempObj[key] = [key in keyHeaderObject? keyHeaderObject[key]: key, ticket[key]]
            }
        })
    });
    
    const [myParsedResponse, setMyParseResponse] = useState({});
    useEffect(()=>{
        setMyParseResponse(tempObj);
    }, []);

   

    
    return (
        <div className="w-[100vw] overflow-hidden">
            {/* <div className="h-[60vh] bg-bg-img bg-cover">
                <Navbar />
                <Navbar2 />
                <div>
                    <div className="flex gap-10 backdrop-blur-sm text-white bg-[#1C1C1C] mt-[20vh] pb-[87px] opacity-[70%] ml-[200px] mr-[200px] justify-center pt-[40px]">
                        <div>
                            <div>Travelling route</div>
                            <div className="flex gap-2">
                                <input type="text" placeholder="from" />
                                <button>&larr;&rarr;</button>
                                <input type="text" placeholder="to" />
                            </div>
                        </div>
                        <div>
                            Travelling date
                            <div>
                                <input type="date" />
                            </div>
                        </div>
                        <div className="flex-col">
                            <div>Travelling passengers</div>
                            <input type="text" placeholder="Number of passengers" />
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
                                            className={`absolute right-0 translate-x-[100%] w-0 h-0 ${item.flag?'border-l-[#F03C07]' :'border-l-[#381967]'} z-10 border-t-transparent border-b-transparent`}
                                        />
                                        <div className="absolute h-[22px] w-[1px] right-0 top-0 bg-gray-400 origin-top-left rotate-[-63deg] z-10 translate-x-[100%]">

                                        </div>
                                        </>
                                    ))}
                                </div>
                        </div>
                    </div>
                ))}
            </div> */}
            <SearchSection/>
            <div className=" p-10 flex flex-col gap-10 justify-center items-center">
                <div className="w-[70%] p-5 border border-solid border-slate-300 flex">
                    <div className="w-[40%] relative">
                        <div className="flex">
                            <img className="w-[90px] h-[70px]" src="images/logo.png" alt="" />
                            <span className="text-2xl font-bold p-5">Paharika Express</span> <br />

                        </div>
                        <div className="flex gap-8 pt-5 items-center">
                            <div className="flex flex-col items-center">
                                <span> <u> Arrival</u></span> 
                                <span className="font-semibold">8:30 pm, 12th Feb</span>
                                <span>Sylhet Station,</span> 
                                <span>SYLHET</span>
                            </div>
                            <div className=" h-[2px] w-[30px] bg-black"></div>
                            <div className="flex flex-col items-center">
                                <span> <u> Departure</u></span> 
                                <span className="font-semibold">5:30 am, 13th Feb</span>
                                <span>Airport Station,</span> 
                                <span>DHAKA</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-[1px] h-[200px] bg-black"></div>
                    <div className=" flex px-8 justify-center items-center pl-10">
                        {Object.keys(myParsedResponse).map((key, i) => {
                            if(key=="id" || key=="purchased") return;
                            return (
                            <div key={i}>
                                {myParsedResponse[key].map((value, j) => {

                                return (
                                    <div onClick={()=>{
                                        if(j == 0) return;
                                        else if( i==Object.keys(myParsedResponse).length-1 ){
                                            if(myParsedResponse["add"][j]) 
                                                console.log("Called");
                                                addToCart(j, myParsedResponse["id"][j])}                                    }
                                    } className={`flex justify-center p-1 px-8 ${myParsedResponse["id"][j] == 2? "bg-white":"" }  ${i==Object.keys(myParsedResponse).length-1 && j>=1 ?"opacity-[70%] hover:opacity-[100%] hover:scale-125":""}`} key={j}>
                                    {value}
                                    </div>
                                );
                                })}
                            </div>
                            );
                        })}
                    </div>
                    
                </div>
                <div className="w-[70%] p-5 border border-solid border-slate-300 flex">
                    <div className="w-[40%] relative">
                        <div className="flex">
                            <img className="w-[90px] h-[70px]" src="images/logo.png" alt="" />
                            <span className="text-2xl font-bold p-5">Paharika Express</span> <br />

                        </div>
                        <div className="flex gap-8 pt-5 items-center">
                            <div className="flex flex-col items-center">
                                <span> <u> Arrival</u></span> 
                                <span className="font-semibold">8:30 pm, 12th Feb</span>
                                <span>Sylhet Station,</span> 
                                <span>SYLHET</span>
                            </div>
                            <div className=" h-[2px] w-[30px] bg-black"></div>
                            <div className="flex flex-col items-center">
                                <span> <u> Departure</u></span> 
                                <span className="font-semibold">5:30 am, 13th Feb</span>
                                <span>Airport Station,</span> 
                                <span>DHAKA</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-[1px] h-[200px] bg-black"></div>
                    <div className=" flex px-8 justify-center items-center pl-10">
                        {Object.keys(myParsedResponse).map((key, i) => {
                            if(key=="id" || key=="purchased") return;
                            return (
                            <div key={i}>
                                {myParsedResponse[key].map((value, j) => {
                                return (
                                    <div onClick={()=>{
                                        if(j == 0) return;
                                        else if( i==Object.keys(myParsedResponse).length-1 ){
                                            if(myParsedResponse["add"][j]) 
                                                console.log("Called");
                                                addToCart(j, myParsedResponse["id"][j])}                                    }
                                    } className={`flex justify-center p-1 px-8 ${myParsedResponse["id"][j] == 2? "bg-white":"" }  ${i==Object.keys(myParsedResponse).length-1 && j>=1 ?"opacity-[70%] hover:opacity-[100%] hover:scale-125":""}`} key={j}>
                                    {value}
                                    </div>
                                );
                                })}
                            </div>
                            );
                        })}
                    </div>
                    
                </div>
                     
            </div>
            {
                purchasedTickets>0 &&(
                    <div onClick={()=>{setShowCart(true)}} className="hover:scale-125 w-[80px] h-[110px] rounded-b-xl  flex flex-col justify-center items-center bg-[#F03C07] border border-solid fixed z-2 right-10 bottom-10">
                {/* Cart System <br/>
                Ticket added : <span className="font-semibold text-lg rotate-12">{purchasedTickets}</span> 
                <button className="bg-[#F03C07] rounded w-[100px] h-[40px] border-solid border-white hover:bg-white hover:duration-500 hover:text-[#F03C07] hover:opacity-[100%]">
                    Payment </button> */}
                    <span className="font-semibold text-xl text-white">Tickets</span> 
                    <div className="w-[25px] h-[30px] bg-black text-white rounded-md flex justify-center items-center absolute top-[-10px] z-20 right-[-5px] rotate-45 ">
                        {purchasedTickets}
                    </div>
                    <div className="flex" >
                                    {new Array(10).fill(0).map((_, i) => (
                                        <>
                                       <div
                                            key={i}
                                            style={{
                                                borderBottomWidth: `${10}px`,
                                                borderLeftWidth: `${80 / 20}px`,
                                                borderRightWidth: `${80 / 20}px`,  
                                            }}
                                            className={` translate-y-[-730%] top-0 w-0 h-0  border-b-[#F03C07] z-10 border-l-transparent border-r-transparent`}//l->b t->l b->r
                                        />                                       
                                        </>
                                    ))}
                                </div>
            </div>
                )
            }
            {showCart && purchasedTickets > 0 && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="w-1/2 h-[300px] bg-slate-200 rounded-lg flex flex-col justify-center items-center gap-4 p-4">
                        {cart.map((item, idx) => (
                            <div key={idx} className="flex gap-8 justify-center items-center">
                                <div>{item.id}</div>
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                                <div onClick={() => removeFromCart(idx, item.id)} className="opacity-75 hover:opacity-100 cursor-pointer">
                                    <RemoveCircleOutlineIcon />
                                </div>
                            </div>
                        ))}
                        <div className="h-[1px] w-[80%] bg-black"></div>
                        <div>Total amount is: {TotalAmount(cart)}</div>
                        < Link href='/app/passengerInfo'>
                        <button  className="bg-[#F03C07] w-[280px] h-[40px] rounded-md mt-4 text-white hover:bg-white hover:text-[#F03C07]">
                            Proceed to Payment
                        </button>
                        </Link>
                        <button onClick={()=>{setShowCart(false)}} className="w-[280px] h-[40px] rounded-md mt-4 bg-[#0c9304] text-white hover:bg-white hover:text-[#0c9304]"> Cancel</button>
                    </div>
                </div>
            )}
            
        </div>
    );
}