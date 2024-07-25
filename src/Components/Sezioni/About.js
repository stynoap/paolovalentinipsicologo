import TitleSection from "../TitleSection";
import LoStudio from "./LoStudio";
import PrimaryButton from "../PrimaryButton";

function About() {
  return (
    <>
      <div className=" py-1 mb-16">
        <div className="flex flex-col items-center lg:-mt-28">
          <h1 className="lg:text-5xl text-3xl font-semibold  mb-5 lg:mb-9 text-sky-800">
            Dott. Paolo Valentini
          </h1>
          <p className="w-3/4 my-6 text-sky-700 text-xl font-medium leading-9 tracking-wide">
            Mi sono occupato negli anni di adolescenti e famiglie in carico ai
            servizi sociali, ho lavorato a lungo nelle scuole come assistente
            all'educativa scolastica, ho avuto esperienze lavorative e di
            tirocinio nell'ambito di comunità residenziali per la salute
            mentale, nelle comunità per tossicodipenti e negli attuali sistemi
            di accoglienza e integrazione. Ho continuato la formazione in
            Psicologia tramite un tirocinio nell'università di Urbino in cui ho
            integrato al corso di studi universitario modalità e diversi appocci
            specifici di intervento. Ho approfondito i temi della mia tesi di
            laurea magistrale attraverso un lavoro di ricerca scientifica con un
            focus specifico verso i disturbi dello spettro della schizofrenia e
            altri disturbi psicotici nel setting della terapia individuale con
            orientamento psicodinamico e analitico.
          </p>

          <p className="lg:text-sky-700 my-6 text-sky-700 font-medium leading-9 text-xl w-3/4 py-5">
            Attualmente frequento il secondo anno della scuola di{" "}
            <b>psicoterapia analitica-archetipico-gestaltica "Atanor"</b> che mi
            accompagna nello studio della <b>psicologia del profondo.</b>{" "}
          </p>
          <div className="bg-sky-50 w-full py-10">
            <TitleSection text="Lo studio" />
            <LoStudio />
            <p className="text-slate-700 px-2 py-6">
              Mi potete trovare al{" "}
              <b>Centro di psicologia e psicoterapia - Legami</b> Via Italia,
              32, 63813 Monte Urano (FM)
            </p>


            <div className="flex flex-col justify-center items-center text-slate-700 ">
              <p className="font-medium bg-opacity-10  lg:text-xl w-fit rounded-xl py-2 lg:px-20 px-3 ">
                {" "}
                Nello studio al centro <b>Legami</b> mi occupo di adolescenti e
                adulti e nello specifico fornisco <b>sostegno psicologico</b>{" "}
                per{" "}
              </p>

              <ul className=" w-3/5 flex rounded-xl flex-col gap-2 tracking-wider lg:text-lg font-bold px-7 py-2 text-slate-700">
                <li className="py-1 ">disturbi d'ansia </li>
                <li className="p-1 ">
                  disturbi dell'umore e della depressione{" "}
                </li>
                <li className="p-1 ">disturbi ossessivi-compulsivi</li>
                <li className="p-1 "> disturbi da Stress Post-Traumatico</li>
                <li className="p-1 "> disturbi di personalità</li>
                <li className="p-1 "> schizofrenia</li>
                <li className="p-1 "> terapia di coppia</li>
              </ul>
            </div>

            <p className="text-slate-600 font-bold text-xl mt-5  p-3">
              Nella terapia con l'adolescente valuto caso per caso se fare un
              primo incontro con i genitori
            </p>
            <p className="lg:text-slate-600 text-sky-700 text-lg py-5">
              Opero invii a diverse figure professionali nell'ambito della
              salute mentale quali:
            </p>

            <p className="font-bold text-center lg:text-slate-700 text-lg text-slate-700 mb-7">
              psicoterapeuti, psichiatri, neurologi, psicodiagnosti.
            </p>

            <PrimaryButton testo="Prenota un appuntamento" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
