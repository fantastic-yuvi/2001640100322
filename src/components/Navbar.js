import { useState,useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
export const Navbar=()=>{
    // const navigate=useNavigate();
    const [color,setColor]=useState('transparent');
    const [textColor,setTextColor]=useState('white');
    useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 90) {
            setColor('#ffffff');
            setTextColor('#000000');
          } else {
            setColor('transparent');
            setTextColor('#ffffff');
          }
        };
        window.addEventListener('scroll', changeColor);
      }, []);

    return(
        <div style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div   className="flex mx-auto justify-between items-center h-24 max-w-[1240px] p-4 text-white">
                <Link to="/">
                <h1 style={{ color: `${textColor}` }} className="w-full font-bold text-4xl ">TRAINS APP</h1>
                </Link>
                <ul style={{ color: `${textColor}` }} className="flex">
                    <li className="p-4"><Link to="/">Home</Link></li>
                    <li className="p-4"><Link to="/find">Find Trains</Link></li>
                </ul>
            </div>
        </div>
    );
};