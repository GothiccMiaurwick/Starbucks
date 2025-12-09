import React from "react";

const StarbucksMain2 = ({textoH, textoS, btn, img, colorSelected, des}) => {
  return (
    <div className="w-full">
      <div className="my-8 md:my-8">
        <div className="w-full">
          <div className="flex flex-col md:flex-row">
            {/* Panel de texto - Primero en desktop */}
            <div
              className="w-full md:w-1/2 order-2 md:order-1 flex items-center justify-center py-8 px-8 md:py-8 md:px-12"
              style={{backgroundColor: colorSelected || '#d5d0ea'}}
            >
              <div className="text-center max-w-[83%]">
                <h1 className="mb-6">
                  <span className="inline-flex text-3xl md:text-5xl font-bold tracking-wide text-[#1e3932]">
                    {textoH}
                  </span>
                </h1>
                <div className="text-lg md:text-2xl leading-relaxed text-[#1e3932] mb-8">
                  {textoS}
                </div>
                <div className="flex justify-center">
                  <a 
                    href="" 
                    className="inline-flex items-center justify-center border border-black rounded-full px-4 py-2 text-lg md:text-xl font-semibold bg-transparent hover:bg-black hover:text-white transition-colors"
                  >
                    {btn}
                  </a>
                </div>
              </div>
            </div>
            {/* Imagen - Segundo en desktop */}
            <div className="w-full md:w-1/2 order-1 md:order-2 overflow-hidden">
              <img 
                src={img} 
                alt={des}
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarbucksMain2;
