import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
export const Home=()=>{
    const navigate= useNavigate();
    const gototrains=()=>{
        navigate("/find");
    }
    return (
    <div>
            <div className='flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover custom-img'>
                <div className='absolute top-0 bottom-0 right-0 left-0 bg-black/40 z-[2]'/>
                <div className=' p-5 text-white z-[2]  mt-[-10rem]'>
                    <h2 className='text-5xl font-bold hover:scale-105 duration-300'>Trains App</h2> 
                    <p className='py-5 text-xl hover:scale-105 duration-300'>Making Your Journey Happy 💌 </p>
                    
                    <button onclick={gototrains}
                     className="p-4 text-xl font-semibold text-white px-16 border-4 border-white rounded-md ml-8 shadow-lg hover:scale-105 duration-300 hover:shadow-black  ">
                        Find Trains 
                    </button>

                </div>
            </div>
            <div className="flex items-center justify-center">
                <h2 className="p-20 text-7xl font-bold  text-gradient bg-gradient-to-r from-rose-500 via-pink-500 to-orange-600 underline  underline-offset-8  decoration-orange-600 ">
                    List Of All the Trains 
                </h2>        
            </div>
            <div className="flex items-center justify-center flex-col space-y-16">
                {/* {calling_function()} */}
            </div>
            
    </div>
    );
};