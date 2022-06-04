import React from "react";
import Filtro from "../../assets/Filtro.svg";
import Apple from "../../assets/apple.svg";
import Coffee from "../../assets/Coffee.png";
import Brands1 from "../../assets/1.svg";
import Brands2 from "../../assets/2.svg";
import Brands3 from "../../assets/3.svg";
import Brands4 from "../../assets/4.svg";
import Icon from "../../assets/icon.svg";

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
      <div className=" flex flex-col bg-[#FFFADA] h-[720px]">
        <div className="flex  w-[100%] items-center justify-between mt-12 h-8">
          <div className="w-[40%] border-b-4 border-[#A0583C] ml-8 "></div>
          <div className="w-[20%] flex items-center justify-center text-[#C08267] text-3xl font-sans">
            Explore the Coffee World
          </div>
          <div className="w-[40%] border-b-4 border-[#A0583C] mr-8"></div>
        </div>
        <div className=" flex justify-evenly h-[450px]">
          <div className="flex-col rounded-2xl w-64 bg-[#C08267] mt-28  h-[450px]">
            <div className="w-42  m-[15px]">
              <img src={Coffee} alt=""></img>
            </div>
            <div className="text-[white] p-3 w-[143px] mt-[10px] h-2 text-3xl font-sans ">
              Cappacino
            </div>
            <div className="text-[#FFFADA] w-[236px] p-3 mt-12 text-xs font-sans font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa,
              fermentum id id vitae, integer fermentum tellus. In vitae id nisl
              quis ornare diam commodo in vel dolor.
            </div>
            <div className="flex items-center justify-between p-3 mt-[25px] ">
              <div className="text-[white]">$8.60</div>
              <div>
                <button className="rounded-[10px] w-32 p-3     text-[white] bg-orange-800">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex-col rounded-2xl w-64 bg-[#C08267] mt-28  h-[450px]">
            <div className="w-42  m-[15px]">
              <img src={Coffee} alt=""></img>
            </div>
            <div className="text-[white] p-3 w-[143px] mt-[10px] h-2 text-3xl font-sans ">
              Cappacino
            </div>
            <div className="text-[#FFFADA] w-[236px] p-3 mt-12 text-xs font-sans font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa,
              fermentum id id vitae, integer fermentum tellus. In vitae id nisl
              quis ornare diam commodo in vel dolor.
            </div>
            <div className="flex items-center justify-between p-3 mt-[25px] ">
              <div className="text-[white]">$8.60</div>
              <div>
                <button className="rounded-[10px] w-32 p-3     text-[white] bg-orange-800">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex-col rounded-2xl w-64 bg-[#C08267] mt-28  h-[450px]">
            <div className="w-42  m-[15px]">
              <img src={Coffee} alt=""></img>
            </div>
            <div className="text-[white] p-3 w-[143px] mt-[10px] h-2 text-3xl font-sans ">
              Cappacino
            </div>
            <div className="text-[#FFFADA] w-[236px] p-3 mt-12 text-xs font-sans font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa,
              fermentum id id vitae, integer fermentum tellus. In vitae id nisl
              quis ornare diam commodo in vel dolor.
            </div>
            <div className="flex items-center justify-between p-3 mt-[25px] ">
              <div className="text-[white]">$8.60</div>
              <div>
                <button className="rounded-[10px] w-32 p-3     text-[white] bg-orange-800">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex-col rounded-2xl w-64 bg-[#C08267] mt-28  h-[450px]">
            <div className="w-42  m-[15px]">
              <img src={Coffee} alt=""></img>
            </div>
            <div className="text-[white] p-3 w-[143px] mt-[10px] h-2 text-3xl font-sans ">
              Cappacino
            </div>
            <div className="text-[#FFFADA] w-[236px] p-3 mt-12 text-xs font-sans font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa,
              fermentum id id vitae, integer fermentum tellus. In vitae id nisl
              quis ornare diam commodo in vel dolor.
            </div>
            <div className="flex items-center justify-between p-3 mt-[25px] ">
              <div className="text-[white]">$8.60</div>
              <div>
                <button className="rounded-[10px] w-32 p-3     text-[white] bg-orange-800">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col bg-[#FFFADA] h-[520px]">
        <div className="flex  w-[100%] items-center justify-between mt-12 h-8">
          <div className="w-[40%] border-b-4 border-[#A0583C] ml-8 "></div>
          <div className="w-[20%] flex items-center justify-center text-[#C08267] text-3xl font-sans">
            Brands We Work With{" "}
          </div>
          <div className="w-[40%] border-b-4 border-[#A0583C] mr-8"></div>
        </div>
        <div className="flex justify-around items-center">
          <div>
            <img src={Brands1} alt=""></img>
          </div>
          <div>
            <img src={Brands2} alt=""></img>
          </div>
          <div>
            <img src={Brands3} alt=""></img>
          </div>
          <div>
            <img src={Brands4} alt=""></img>
          </div>
        </div>
      </div>
      <div className=" flex flex-col bg-[#C08267] h-[460px]">
        <div className="flex  w-[100%] items-center justify-between mt-12 h-8">
          <div className="w-[40%] border-b-4 border-[#FFFADA] ml-8 "></div>
          <div className="w-[20%] flex items-center justify-center text-[#FFFADA] text-3xl font-sans">
            Get in Touch with Us
          </div>
          <div className="w-[40%] border-b-4 border-[#FFFADA] mr-8"></div>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col">
            <div className="text-[white] p-3 w-[143px] mt-[10px] h-2 text-3xl font-sans">
              Merchandise
            </div>
            <div className="text-[white] p-3 w-[143px] h-2 mt-[15px] text-2xl font-sans">
              T-shirts
            </div>
            <div className="text-[white] p-3 w-[143px] h-6 mt-[5px] text-2xl font-sans">
              T-shirts
            </div>
            <div className="text-[white] p-3 w-[143px] h-7 mt-[5px] text-2xl font-sans">
              T-shirts
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[white] p-3 w-[143px] mt-[10px] h-2 text-3xl font-sans">
              Merchandise
            </div>
            <div className="text-[white] p-3 w-[143px] h-2 mt-[15px] text-2xl font-sans">
              T-shirts
            </div>
            <div className="text-[white] p-3 w-[143px] h-6 mt-[5px] text-2xl font-sans">
              T-shirts
            </div>
            <div className="text-[white] p-3 w-[143px] h-7 mt-[5px] text-2xl font-sans">
              T-shirts
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[white] p-3 w-[143px] mt-[10px] h-2 text-3xl font-sans">
              Merchandise
            </div>
            <div className="text-[white] p-3 w-[143px] h-2 mt-[15px] text-2xl font-sans">
              T-shirts
            </div>
            <div className="text-[white] p-3 w-[143px] h-6 mt-[5px] text-2xl font-sans">
              T-shirts
            </div>
            <div className="text-[white] p-3 w-[143px] h-7 mt-[5px] text-2xl font-sans">
              T-shirts
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[white] p-3 w-[143px] mt-[10px] h-2 text-3xl font-sans">
              Merchandise
            </div>
            <div className="text-[white] p-3 w-[143px] h-2 mt-[15px] text-2xl font-sans">
              T-shirts
            </div>
            <div className="text-[white] p-3 w-[143px] h-6 mt-[5px] text-2xl font-sans">
              T-shirts
            </div>
            <div className="text-[white] p-3 w-[143px] h-7 mt-[5px] text-2xl font-sans">
              T-shirts
            </div>
          </div>
        </div>
        <div className="w-[100%] mt-36 border-b-4 border-[#FFFADA] mr-8"></div>
        <div className="flex justify-center items-center mt-6">
          <div>
            <img src={Icon} alt=""></img>
          </div>
          <div>
            <img src={Filtro} alt=""></img>
          </div>
          <div className="text-[white] text-3xl font-sans">
            All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
