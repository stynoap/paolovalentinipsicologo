import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative select-none bg-transparent z-10 lg:flex lg:items-stretch w-full">
      <div className="flex flex-no-shrink items-stretch  pb-8">
        <div className=" flex flex-col items-center">
          <p>
            {" "}
            <a
              href="#"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 lg:text-2xl font-light lg:tracking-wider leading-normal pt-4 text-sky-100 no-underline flex items-center hover:bg-grey-dark"
            >
              Dott. Paolo Valentini
            </a>
          </p>

          <p className="flex-no-grow flex-no-shrink lg:tracking-widest lg:font-medium lg:text-xl  relative px-4 leading-normal text-sky-100 no-underline flex items-center hover:bg-grey-dark">
            psicologo
          </p>
        </div>

        <button
          onClick={toggleMenu}
          className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4"
        >
          {isOpen ? (
            <svg
              className="fill-current text-sky-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          ) : (
            <svg
              className="fill-current text-sky-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div className="lg:flex lg:tracking-widest font-semibold lg:items-stretch lg:justify-end ml-auto mr-14">
          <a
            href="#"
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-sky-100 no-underline flex items-center hover:bg-grey-dark"
          >
            chi sono
          </a>
          <a
            href="#"
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-sky-100 no-underline flex items-center hover:bg-grey-dark"
          >
            servizi
          </a>
          <a
            href="#"
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-sky-100 no-underline flex items-center hover:bg-grey-dark"
          >
            approccio terapeutico
          </a>
          <a
            href="#"
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-sky-100 no-underline flex items-center hover:bg-grey-dark"
          >
            tariffe
          </a>
          <a
            href="#"
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-sky-100 no-underline flex items-center hover:bg-grey-dark"
          >
            contatti
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
