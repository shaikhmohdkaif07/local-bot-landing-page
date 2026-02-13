import { useEffect, useState } from "react"

export default function Hero(){
    const[mousePosition , setMousePosition]=useState({x:0 , y:0});

    useEffect(()=> {
        function handleMouseMove(e){
            setMousePosition ( {x: e.clientX, y: e.clientY});
            
        }
        window.addEventListener("mousemove",handleMouseMove);
        return () => window.removeEventListener("mousemove",handleMouseMove);
    },[]);
    
    return(
        <>
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0  opacity-30 " style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(48, 116, 53, 0.6),transparent 40% )`,
        }}>
            </div>
            <div className="relative order-2 w-full">
            <div className="relative bg-black/15 rounded-xl sm:rounded-2xl backdrop-blur border-black/12">
                <div className="bg-gradient-to-br h-[280px] w-[350px]">
                    {/*Ide header*/}
                    <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3  bg-black/5 border-b border-black/15 ">
                        <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 "/>
                        <div className="w-2 h-2 rounded-full bg-yellow-500 "/>
                        <div className="w-2 h-2 rounded-full bg-green-500 "/>
                        <span className="text-xs sm:text-s text-gray-200  hover:text-white">Local-bot</span>
                        </div>    
                    </div>
                    </div>
                </div>
            </div>
        
        </section>
        
        </>
    )
}