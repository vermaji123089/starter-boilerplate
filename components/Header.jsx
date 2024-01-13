import React, { useEffect, useState } from "react";
import Wraper from "./Wraper";
import Link from "next/link";
import Menu from "./Menu";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Mobilenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  const [shoeCatMenu, setShoeCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrolly, setLastScrolly] = useState(0);
 const controlNavbar= ()=>{
if(window.scrollY > 200){
    if(window.scrollY > lastScrolly && !mobileMenu){

        setShow("-translate-y-[80px]")
    }else{
setShow("shadow-sm")
    }
}else{
    setShow("translate-y-0")
}
setLastScrolly(window.scrollY);
 };
useEffect(()=>{
    window.addEventListener("scroll", controlNavbar);
    return()=>{
        window.removeEventListener("scroll",controlNavbar)
    }
},[lastScrolly])

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wraper className="h-[60px] flex justify-between  items-center">
        <Link href={"/"}>
          <img src="./logo.svg" alt="" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu shoeCatMenu={shoeCatMenu} setShoeCatMenu={setShoeCatMenu} />
       {mobileMenu &&<Mobilenu
          shoeCatMenu={shoeCatMenu}
          setShoeCatMenu={setShoeCatMenu}
          setmobileMenu={setmobileMenu}
        />}
        {/*  */}
        <div className="flex items-center gap-2 text-black">
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex 
                 justify-center items-center hover:bg-black/[0.5] cursor-pointer relative"
          >
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px} md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] ">
              20
            </div>
          </div>

          {/*  */}
<Link href="/cart"  >
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex 
                 justify-center items-center hover:bg-black/[0.5] cursor-pointer relative"
          >
            <BsCart className="text-[15px] md:text-[20px]" />
            <div className="h-[14px} md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] ">
              5
            </div>
          </div>
</Link>
          {/* mob icon */}
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex  md:hidden
                 justify-center items-center hover:bg-black/[0.5] cursor-pointer relative -mr-2 "
          >
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setmobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[26px]"
                onClick={() => setmobileMenu(true)}
              />
            )}
          </div>
          {/* monicon end */}
        </div>
      </Wraper>
    </header>
  );
};

export default Header;
