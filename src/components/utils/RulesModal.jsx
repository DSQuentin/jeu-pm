import React from "react";
import RulesCarousel from "../utils/RulesCarousel";

export default function RulesModal({ isModalOpen, setIsModalOpen }) {
  return (
    <>
      {isModalOpen && (
        <div className="modal-animation">
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
                      <span className="w-5 text-black inline aspect-square fill-current -pt-0.5">
                        &times;
                      </span>
                    </div>
                  </button>
                </div>

                <RulesCarousel />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
