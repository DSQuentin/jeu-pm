import React, { useState } from "react";
import { Link } from "react-router-dom";
import RulesModal from "../components/utils/RulesModal";
import icone from "../components/images/icone.png";
import backgroundImage from "../components/images/background-image-menu.jpg";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="concrete flex h-screen w-screen items-center text-white">
        <div
          alt="background-cover"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          id="background"
          className="lcd-overlay absolute inset-0 z-1 h-full min-h-screen bg-cover bg-fixed bg-center bg-no-repeat before:transition-all before:duration-500 bg-indigo-900"
        ></div>
        <div className="z-20 px-16 flex flex-col flex-wrap justify-center overflow-x-hidden">
          <div className="flex flex-row items-center">
            <img src={icone} alt="icone popcorn" className="w-1/5 mr-6" />
            <h1 className="w-full -ml-4 sm:ml-0 font-bold 2xl:mt-24 2xl:mb-12 text-white text-7xl">
              Pop Corn <br /> Movie Night
            </h1>
          </div>

          <Link to="/team-selection">
            <div className="mt-8">
              <button className="text-2xl sm:text-5xl font-black hover:opacity-100 wrapper group relative sm:opacity-80 mt-6 inline-block ">
                <span className="group-hover:top-[-4px] relative top-0 transition-all duration-150 cursor-pointer">
                  Commencer
                </span>
              </button>
            </div>
          </Link>

          <div className="">
            <span
              className="text-xl sm:text-3xl font-semibold hover:opacity-100 wrapper group relative sm:opacity-80 mt-6 inline-block cursor-pointer md:mt-8"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="group-hover:top-[-4px] relative top-0 transition-all duration-150">
                Les règles
              </span>
            </span>

            <RulesModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
}
