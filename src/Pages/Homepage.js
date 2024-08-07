// import PrimaryButton from "../Components/PrimaryButton";
import About from "../Components/Sezioni/About";
// import headerbg from "../header-bg-sky-800-2.png";
import paolovalentini from "../paolovalentini-prf.png";
import Servizio from "../Components/Sezioni/Servizio";
import { servizi } from "../data";
import TitleSection from "../Components/TitleSection";
// import servizibg from "./../header-bg-emerald-100.png";
import PrimaryButton from "../Components/PrimaryButton";
import Tariffe from "../Components/Sezioni/Tariffe";
import IndicazioniStudio from "../Components/Sezioni/IndicazioniStudio";
import SostegnoPsicologico from "../Components/Sezioni/SostegnoPsicologico";
// import Formazione from "../Components/Sezioni/Formazione";
// import Studio from "../Components/Sezioni/Studio";
import Contatti from "../Components/Contatti";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";

function Homepage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <div
        className=" bg-cover max-h-fit bg-bottom"
        // style={{
        //   backgroundImage: `url(${headerbg})`,
        // }}
      >
        <div className=" ">
          <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:pt-5 pt-7 max-h-fit">
            <div
              className=" lg:basis-1/3 w-10/12 h-96 bg-contain  lg:bottom-32  lg:relative lg:bg-cover bg-top bg-no-repeat  lg:mt-16 lg:mr-10  lg:h-[560px] lg:w-80"
              style={{
                backgroundImage: `url(${paolovalentini})`,
              }}
            ></div>
            <div className="relative lg:leading-6 lg:bottom-16 lg:basis-2/5 mt-4 lg:mt-0 ">
              <p className="leading-10  px-5 tracking-wider text-lg lg:text-left mb-16  text-neutral-700 lg:ml-16 ">
                Sono <b className="tracking-widest"> Paolo Valentini</b>, 33 anni,{" "}
                <b>psicologo</b> laureato presso l'Università degli studi di
                Urbino, in Psicologia Clinica. Sono iscritto all'ordine degli
                psicologi delle Marche e sono uno specializzando in psicologia
                analitica - archetipica presso la scuola di specializzazione
                Atanor.
              </p>

              {/* <p className="hidden lg:text-right lg:relative right-16 font-light lg:mt-8 lg:mr-24 text-slate-100 tracking-widest leading-7">
                Ho maturato esperienze con gli <b>adolescenti.</b> <br /> Cerco
                a mio modo di educere, cioè di trarre fuori.
              </p> */}

              <PrimaryButton
                href="#contatti"
                testo="Prenota il primo colloquio"
                cta="true"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-neutral-700 px-6 text-2xl leading-snug  text-center lg:mt-0 mt-14">
        Mi potete trovare al <b>Centro di psicologia e psicoterapia Legàmi</b>{" "}
        di Via Italia, 32, 63813 Monte Urano (FM)
      </p>
      <div className="mt-20 mb-20">
        <TitleSection text="I Servizi" />
        <div id="servizi" className="mt-8 flex flex-col items-center">
          <div className="flex justify-center w-full">
            <div className="relative">
              <Servizio
                title={servizi[0].title}
                description={servizi[0].description}
                image={servizi[0].image}
                onclick={() => navigate("#sostegno-psicologico")}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between w-full lg:max-w-4xl lg:gap-32 mt-8">
            {servizi.slice(1).map((servizio, index) => (
              <div key={index} className="flex-1 flex justify-center">
                <Servizio
                  title={servizio.title}
                  description={servizio.description}
                  image={servizio.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <About id="chi-sono" />

      {/* <Studio /> */}
      <SostegnoPsicologico />
      {/* <Formazione /> */}
      <Tariffe />

      <Contatti />

      <IndicazioniStudio />
    </>
  );
}

export default Homepage;
