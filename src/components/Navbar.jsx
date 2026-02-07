import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar(){
   const [mobileMenuIsOpen , setMobileMenuIsOpen]= useState()
    return(
        <>
    <div className="sticky top-0 w-full z-30 transition-all duration-250 bg-green-950/30 backdrop-blur-sm  ">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-28 px-4">
           <div className="flex items-center space-x-1 ">
            <img src="/logo.png" className="w-25 h-15 sm:w-30 sm:h hover:scale-105 opacity-100 "/>
        </div>
        {/*nav links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        <a href="#home" className="px-4 py-2 rounded-full border border-gray-400 text-gray-400 transition-all duration-500 hover:bg-white  hover:text-black text-m lg:text-base">
            Home
        </a>
         <a href="#features" className="px-4 py-2 rounded-full border border-gray-400 text-gray-400 transition-all duration-500 hover:bg-white  hover:text-black text-m lg:text-base">
            Features
        </a>
         <a href="#pricing" className="px-4 py-2 rounded-full border border-gray-400 text-gray-400 transition-all duration-500 hover:bg-white  hover:text-black text-m lg:text-base">
            Pricing
        </a>
         <a href="#home" className="px-4 py-2 rounded-full border border-gray-400 text-gray-400 transition-all duration-500 hover:bg-white  hover:text-black text-m lg:text-base">
            Connect
        </a>
        </div>
        <button className="md:hidden text-gray-300 hover:text-white " onClick={()=>setMobileMenuIsOpen((prev)=>!prev)}>
           {mobileMenuIsOpen ? (<X className="w-5 h-5 sm:w-6 sm:h-5"/>):(<Menu className="w-5 h-5 sm:w-6 sm:h-5"/> )} 
        </button>
        </div>
    </div>
        
        {mobileMenuIsOpen &&(
            <div className=" md:hidden bg-green-950/30 backdrop-blur-md">
                <div className="px-4 py-4 space-x-4 space-y-3">
        <a href="#home" className="block px-4 py-2  border-gray-400 text-gray-400 transition-all duration-500 hover:bg-white  hover:text-black text-m lg:text-base" onClick={()=>setMobileMenuIsOpen(false)}>
            Home
        </a>
         <a href="#features" className="block px-4 py-2  border-gray-400 text-gray-400 transition-all duration-500 hover:bg-white  hover:text-black text-m lg:text-base"onClick={()=>setMobileMenuIsOpen(false)}>
            Features
        </a>
         <a href="#pricing" className="block px-4 py-2  border-gray-400 text-gray-400 transition-all duration-500 hover:bg-white  hover:text-black text-m lg:text-base"onClick={()=>setMobileMenuIsOpen(false)}>
            Pricing
        </a>
         <a href="#home" className="block px-4 py-2  border-gray-400 text-gray-400 transition-all duration-500 hover:bg-white  hover:text-black text-m lg:text-base"onClick={()=>setMobileMenuIsOpen(false)}>
            Connect
        </a>
                </div>
            </div>
        )}
        
        
        </>
    )
}