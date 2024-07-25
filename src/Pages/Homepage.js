import Navbar from "../Components/Navbar";
// import PrimaryButton from "../Components/PrimaryButton";
import About from "../Components/Sezioni/About";
import headerbg from "../header-bg-sky-800-2.png";
import paolovalentini from "../paolovalentini-prf.png";
import Servizio from "../Components/Sezioni/Servizio";
import { servizi } from "../data";
import TitleSection from "../Components/TitleSection";
import servizibg from "./../header-bg-emerald-100.png";
import ApproccioTerapeutico from "../Components/Sezioni/ApproccioTerapeutico";
function Homepage() {
  return (
    <>
      <div
        className=" bg-cover max-h-fit"
        style={{
          backgroundImage: `url(${headerbg})`,
        }}
      >
        <div className=" bg-cover bg-bottom pb-20  ">
          <Navbar />
          <div className="flex  flex-col items-center lg:flex-row lg:justify-center">
            <div
              className=" lg:basis-1/3 w-80 h-80 bg-contain  lg:bottom-32  lg:relative lg:bg-cover bg-top bg-no-repeat -mt-12 lg:mt-16 lg:mr-10  lg:h-[500px] lg:w-80  "
              style={{
                backgroundImage: `url(${paolovalentini})`,
              }}
            ></div>
            <div className="relative lg:leading-6 lg:bottom-16 lg:basis-2/5   ">
              <p className="leading-10  px-5 tracking-wider text-lg lg:text-left  text-sky-100 lg:ml-16">
                Sono <b className="tracking-widest">Paolo Valentini,</b> <br />{" "}
                32 anni, <b>psicologo</b> iscritto all'Albo A dell'Ordine degli
                psicologi delle Marche (n°3136). <br /> Mi sono laureato nella
                facoltà di psicologia di Urbino.
              </p>

              <p className="hidden lg:text-right lg:relative right-16 font-light lg:mt-8 lg:mr-24 text-sky-100 tracking-widest leading-7">
                Ho maturato esperienze con gli <b>adolescenti.</b> <br /> Cerco
                a mio modo di educere, cioè di trarre fuori.
              </p>
              <p className="lg:text-sky-100 text-sky-800 lg:mt-3 relative lg:top-0 top-16 px-3">
                Frequento il secondo anno della scuola di{" "}
                <b>psicoterapia analitica-archetipico-gestaltica "Atanor"</b>{" "}
                che mi accompagna nello studio della psicologia del profondo.{" "}
              </p>
            </div>
          </div>
          <div className="mt-0 relative bottom-24">
            {/* <PrimaryButton
               
                testo="contattami"
              /> */}
          </div>
        </div>
      </div>
      <About />
      <ApproccioTerapeutico />
      <div
        style={{
          backgroundImage: `url(${servizibg})`,
        }}
        className=" py-8"
      >
        <TitleSection text="I Servizi" />
        <div className="flex flex-col lg:flex-row lg:flex-wrap">
          {servizi.map((servizio, index) => (
            <Servizio
              key={index}
              title={servizio.title}
              description={servizio.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;
