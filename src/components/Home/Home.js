import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import conf from "../../assets/conf.jpg";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");

  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };
  return (
    <div className="">
      {/* Navbar */}

      <Navbar />
      {/* Hero */}

      <div className="relative">
        {/* Image */}
        <div className="absolute h-[41rem] w-full flex overflow-hidden">
          <img src={conf} alt="" className="object-cover w-full h-full" />
        </div>
        {/* Overlay */}
        <div className="absolute h-[41rem] w-full flex overflow-hidden bg-black/60"></div>
        {/* Hero Info */}
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
          {/* Main */}
          <div className="pb-8 lg:flex flex-col items-center justify-center">
            <h1 className="text-[56px] md:text-[80px] text-white font-bold pt-6">
              Video Chat App
            </h1>
            <p className="text-[26px] text-white -mt-2">With ZegoCloud</p>
          </div>
          {/* Enter Code */}
          <form
            onSubmit={submitCode}
            className=" text-white md:pt-8 lg:flex flex-col items-center justify-center"
          >
            <div className="flex flex-col justify-center lg:items-center">
              <label
                htmlFor=""
                className="text-[30px] md:text-[40px]  font-bold"
              >
                Enter The Room Code
              </label>
              <input
                type="text"
                required
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6"
              />
            </div>

            <button
              type="submit"
              className="bg-white text-black font-bold rounded-full py-[5px]
                md:w-[7rem] md:py-[7px] mt-2 md:mt-4"
            >
              Go Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
