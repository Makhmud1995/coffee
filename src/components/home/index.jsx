import React from "react";
import Filtro from "../../assets/Filtro.svg";
import Apple from "../../assets/apple.svg";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Navbar start */}
      <div className="flex flex-col bg-[url('./assets/background.png')] bg-cover bg-center bg-[#212123,#C0826700] h-[720px]">
        <div className="flex items-center justify-around space-x-4 border-2  w-full h-[90px]">
          <div className="flex items-center w-[67px] h-[23] ">
            <img src={Filtro} alt="" />
          </div>
          <div className="flex border-2 text-[white] ">
            <p className="m-8 cursor-pointer rounded-full p-3 hover:bg-orange-800">
              Home
            </p>
            <p className="m-8 cursor-pointer rounded-full p-3 hover:bg-orange-800">
              Explore Us
            </p>
            <p className="m-8 cursor-pointer rounded-full p-3 hover:bg-orange-800">
              Brands
            </p>
            <p className="m-8 cursor-pointer rounded-full p-3 hover:bg-orange-800">
              Contact Us
            </p>
          </div>
          <div className="flex p-5 border-2 border-slate-100 items-end">
            <button className="rounded-2xl p-3  mr-4 text-[white]  bg-orange-800 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
              Sign Up/Login
            </button>
            <button className="flex rounded-2xl p-3 ml-4 text-[white] bg-orange-800 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
              <img src={Apple} alt=""></img>Get the App
            </button>
          </div>
        </div>
        {/* navbar finish */}
        {/* contant 1 start */}
        <div className="flex text-center  ml-[22%] mt-[190px] text-8xl text-[#FFFADA] font-sans not-italic font-bold">
          Power up with coffee
        </div>
        <div className="flex text-center  ml-[32%] text-3xl mt-3 text-[#CCB9B1] font-sans not-italic ">
          Start your exciting day with a cup of Brew Coffee
        </div>
        <button className="rounded-2xl w-64 p-5 ml-[44%] mr-4  mt-9 text-[white] bg-orange-800 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          Explore Us
        </button>
      </div>
      {/* contant 1 finish */}
      {/* contant 2 start */}
      <div className=" flex bg-[#FFFADA] h-[720px]"></div>
    </div>
  );
};

export default HomePage;
