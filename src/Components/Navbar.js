import { useState } from "react";
// import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-opacity-80 select-none z-10 lg:flex lg:items-stretch w-full bg-slate-100">
      <div className="flex flex-no-shrink items-stretch  pb-8">
        <div className=" flex flex-col items-center">
          <p>
            {" "}
            <a
              href="/"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 lg:text-2xl font-light lg:tracking-wider leading-normal pt-4 hover:text-slate-400 text-slate-700 no-underline flex items-center hover:bg-grey-dark"
            >
              Dott. Paolo Valentini
            </a>
          </p>

          <p className="flex-no-grow flex-no-shrink lg:tracking-widest lg:font-medium lg:text-xl  relative px-4 leading-normal text-slate-700 no-underline flex items-center hover:bg-grey-dark">
            psicologo
          </p>
        </div>

        <button
          onClick={toggleMenu}
          className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4"
        >
          {isOpen ? (
            <svg
              className="fill-current text-slate-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          ) : (
            <svg
              className="fill-current text-slate-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`lg:flex pb-7 tracking-widest text-xl lg:text-base uppercase  lg:normal-case lg:items-stretch lg:flex-no-shrink lg:flex-grow ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div className="lg:flex  w-full items-center   ">
          <div className="lg:flex lg:tracking-widest font-semibold lg:gap-7 lg:items-stretch lg:justify-center mx-auto lg:ml-48">
            <a
              href="/"
              className="flex-no-grow flex-no-shrink relative py-4 px-8 lg:px-3  leading-normal  hover:text-slate-400 no-underline flex items-center hover:bg-grey-dark"
            >
              home
            </a>
            <a
              href="approccio"
              className="flex-no-grow flex-no-shrink relative py-4 px-8 lg:px-3 leading-normal  hover:text-slate-400 no-underline flex items-center hover:bg-grey-dark"
            >
              chi sono
            </a>
            <a
              href="/#servizi"
              className="flex-no-grow flex-no-shrink relative py-4 px-8 lg:px-3  leading-normal  hover:text-slate-400 no-underline flex items-center hover:bg-grey-dark"
            >
              servizi
            </a>
            <a
              href="/#approccio-terapeutico"
              className="flex-no-grow flex-no-shrink relative py-4 px-8 lg:px-3 leading-normal  hover:text-slate-400 no-underline flex items-center hover:bg-grey-dark"
            >
              approccio
            </a>
            <a
              href="/#tariffe"
              className="flex-no-grow flex-no-shrink relative py-4 px-8 lg:px-3 leading-normal   hover:text-slate-400 no-underline flex items-center hover:bg-grey-dark"
            >
              tariffe
            </a>
          </div>

          <div className="lg:ml-auto lg:mr-12 lg:mt-2">
            {/* <a
              href="#contatti"
              className="flex-no-grow flex-no-shrink relative py-4 px-8 lg:px-3 leading-normal  hover:text-slate-400 no-underline flex items-center hover:bg-grey-dark"
            >
              
            </a> */}
        
            <SecondaryButton href="#contatti" text="Contattami" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
