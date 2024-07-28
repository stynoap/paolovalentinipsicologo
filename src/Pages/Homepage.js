// import PrimaryButton from "../Components/PrimaryButton";
import About from "../Components/Sezioni/About";
// import headerbg from "../header-bg-sky-800-2.png";
import paolovalentini from "../paolovalentini-prf.png";
import Servizio from "../Components/Sezioni/Servizio";
import { servizi } from "../data";
import TitleSection from "../Components/TitleSection";
// import servizibg from "./../header-bg-emerald-100.png";
import ApproccioTerapeutico from "../Components/Sezioni/ApproccioTerapeutico";
import PrimaryButton from "../Components/PrimaryButton";
import Tariffe from "../Components/Sezioni/Tariffe";
import IndicazioniStudio from "../Components/Sezioni/IndicazioniStudio";
import SostegnoPsicologico from "../Components/Sezioni/SostegnoPsicologico";
import Formazione from "../Components/Sezioni/Formazione";
import Studio from "../Components/Sezioni/Studio";
import Contatti from "../Components/Contatti";
function Homepage() {
  return (
    <>
      <div
        className=" bg-cover max-h-fit bg-bottom"
        // style={{
        //   backgroundImage: `url(${headerbg})`,
        // }}
      >
        <div className=" bg-cover bg-bottom ">
        
       
          <div className="flex  flex-col items-center lg:flex-row lg:justify-center lg:pt-5 pt-20">
            <div
              className=" lg:basis-1/3 w-10/12 h-96 bg-contain  lg:bottom-32  lg:relative lg:bg-cover bg-top bg-no-repeat  lg:mt-16 lg:mr-10  lg:h-[560px] lg:w-80  "
              style={{
                backgroundImage: `url(${paolovalentini})`,
              }}
            ></div>
            <div className="relative lg:leading-6 lg:bottom-16 lg:basis-2/5 mt-12 lg:mt-0   ">
              <p className="leading-10  px-5 tracking-wider text-lg lg:text-left mb-16  text-slate-700 lg:ml-16">
                Sono <b className="tracking-widest">Paolo Valentini,</b> <br />{" "}
                32 anni, <b>psicologo</b> iscritto all'Albo A dell'Ordine degli
                psicologi delle Marche (n°3136). <br /> Mi sono laureato nella
                facoltà di psicologia di Urbino.
              </p>

              <p className="hidden lg:text-right lg:relative right-16 font-light lg:mt-8 lg:mr-24 text-slate-100 tracking-widest leading-7">
                Ho maturato esperienze con gli <b>adolescenti.</b> <br /> Cerco
                a mio modo di educere, cioè di trarre fuori.
              </p>

              <PrimaryButton href="#contattami" testo="Contattami" />
            </div>
          </div>
          <div className="mt-0 relative bottom-24">
          </div>
        </div>
      </div>
      <About id="chi-sono" />
      <Formazione />
      <Studio />
      <SostegnoPsicologico />

      <div
        // style={{
        //   backgroundImage: `url(${servizibg})`,
        // }}
        className=" py-8"
      >
        <TitleSection text="I Servizi" />
        <div id="servizi" className="mt-8 flex flex-col lg:gap-2 lg:flex-row lg:flex-wrap">
          {servizi.map((servizio, index) => (
            <Servizio
              key={index}
              title={servizio.title}
              description={servizio.description}
              image={servizio.image}
            />
          ))}
        </div>
        <div class="border-t border-8 border-slate-50 mt-24"></div>
      </div>
      <Tariffe />

      <ApproccioTerapeutico />
      <Contatti />
     
      <IndicazioniStudio />
    </>
  );
}

export default Homepage;
