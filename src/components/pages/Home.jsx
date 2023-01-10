import React, { useState } from "react";
import { Link } from "react-router-dom";
import RulesCarousel from "../utils/RulesCarousel";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="concrete flex h-screen w-screen items-center text-white overflow-hidden">
        <div
          alt="background-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')",
          }}
          id="background"
          className="lcd-overlay absolute inset-0 z-1 h-full min-h-screen bg-cover bg-fixed bg-center bg-no-repeat before:transition-all before:duration-500 bg-indigo-900"
        ></div>
        <div className="z-20 px-16 flex flex-col flex-wrap justify-center overflow-x-hidden">
          <div className="flex flex-row items-center">
            <img
              src="./img/icone.png"
              alt="icone popcorn"
              className="w-1/5 mr-6"
            />
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
            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex h-full w-full flex-col items-center justify-center bg-[#550e1ba5]">
                <div className="mx-2 flex w-full max-w-4xl flex-wrap items-center justify-center md:flex-nowrap md:space-x-4">
                  <div className="relative rounded-lg bg-gray-100 p-8 text-black px-24 text-center text-2xl shadow-lg shadow-red-500">
                    <div className="absolute right-6 -top-6">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="text-black bg-slate-100
                      rounded-full h-14 w-14
                    group relative overflow-hidden border-2 border-white transition-all duration-200"
                      >
                        <div className="relative top-0 flex items-center justify-center pb-0.5 transition-all duration-200 sm:group-hover:top-[-4px] sm:group-active:top-0">
                          <span className="w-5text-black inline aspect-square fill-current -pt-0.5">
                            &times;
                          </span>
                        </div>
                      </button>
                    </div>

                    <RulesCarousel/>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
