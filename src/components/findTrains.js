import { useState } from "react";
import {axios} from "axios";
export const FindTrains=()=>{
    const [trainno,setTrainno]=useState("");
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try {
           
        } catch (error) {
            alert("Wrong Input");
        }  
    }
    return (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
        <div className="auth-container flex items-center  max-w-[1240px] m-auto p-4 ">
            
            <form  className='m-auto' >
                <h2 className='text-4xl text-white font-bold text-center p-4 underline underline-offset-2'>Enter Train Number</h2>
                <h4 className="text-sm">Welcome</h4>
                <div className="form-group">
                    <input className='border shadow-lg p-3 w-full  rounded-lg my-2 hover:scale-105 duration-300 border-purple-600' type="text" id="trainno" value={trainno} placeholder="Train No..."
                     onChange={(event)=>setTrainno(event.target.value)}/>
                </div>
                <button onClick={handleSubmit} className='border  shadow-lg rounded-lg p-3 w-72 mt-2 bg-white/40 hover:scale-105 duration-300 hover:shadow-red-600'> Submit</button>
            </form>
        </div>
        </div>
    );
};