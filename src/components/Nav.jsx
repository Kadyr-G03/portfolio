import Links from "./Links.jsx"
import { useState } from 'react';

function Nav() {

  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

    return (
      <>
        <span onClick={handleClick} className="min-[800px]:hidden z-30 fixed w-[45px] h-[45px] rounded-[10px] my-[5px] mx-[15px] right-0 bg-zinc-800 flex items-center justify-center">
          <svg className="fill-zinc-200 w-8 h-8 transition-all hover:fill-zinc-50" viewBox="0 0 25 25">
              <path d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" />
          </svg>
        </span>
        <section className={isToggled ? 'z-20 transition-all w-full max-w-[350px] min-[800px]:hidden right-0 h-screen fixed bg-zinc-950 max-w-[1920px] flex flex-col items-center justify-between' : 'z-20 w-full max-w-[350px] min-[800px]:hidden right-0 h-screen fixed bg-zinc-950 max-w-[1920px] flex flex-col items-center justify-between right-[-350px] transition-all '} id="nav">
          <span className="block w-full flex flex-row justify-between items-center h-[55px]">
              <a className="mx-[20px] text-zinc-50 font-semibold text-[30px]" href="#">Menu</a>
          </span>
          <span className="flex flex-col items-center">
              <a className="px-[20px] text-zinc-200 text-[25px] py-[20px] transition-all hover:text-zinc-50" href="">Gallery</a>
              <a className="text-zinc-200 text-[25px] py-[20px] transition-all hover:text-zinc-50" href="">About me</a>
              <a className="text-zinc-200 text-[25px] py-[20px] transition-all hover:text-zinc-50" href="">Skills & Tools</a>
              <a className="text-zinc-200 text-[25px] py-[20px] transition-all hover:text-zinc-50" href="">Contact</a>
          </span>
          <Links /> 
          
        </section>
        <span className={isToggled ? 'transition-all hidden' : 'transition-all block w-full h-screen bg-zinc-950/60 backdrop-blur-md z-10 fixed'}></span>
      </>
    )
  }
  
  export default Nav