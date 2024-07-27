
import SecondaryButton from "../SecondaryButton";

function About() {
  return (
    <>
      <div id="chi-sono" className=" py-1 mb-16">
        <div className="flex flex-col items-center lg:-mt-28">
          <h1 className="lg:text-5xl text-3xl font-semibold  mb-5 lg:mb-9 text-slate-800">
            Dott. Paolo Valentini
          </h1>
          <p className="w-3/4 my-6 py-6 text-slate-700 text-xl font-medium leading-9 tracking-wide">
            Mi sono occupato negli anni di adolescenti e famiglie in carico ai
            servizi sociali, ho lavorato a lungo nelle scuole come assistente
            all'educativa scolastica, ho avuto esperienze lavorative e di
            tirocinio nell'ambito di comunità residenziali per la salute
            mentale, nelle comunità per tossicodipenti e negli attuali sistemi
            di accoglienza e integrazione. 
            <br />
            <br />
            Ho continuato la formazione in
            Psicologia tramite un tirocinio nell'università di Urbino in cui ho
            integrato al corso di studi universitario modalità e diversi appocci
            specifici di intervento.
            <br />
            <br />
            Ho approfondito i temi della mia tesi di
            laurea magistrale attraverso un lavoro di ricerca scientifica con un
            focus specifico verso i disturbi dello spettro della schizofrenia
            nel setting della terapia individuale con orientamento psicodinamico
            e analitico.
          </p>

          <p className="lg:text-slate-700 my-6 text-slate-700 font-medium leading-9 text-xl w-3/4 py-5">
            Attualmente frequento il secondo anno della scuola di{" "}
            <b>psicoterapia analitica-archetipico-gestaltica "Atanor"</b> che mi
            accompagna nello studio della <b>psicologia del profondo.</b>{" "}
          </p>
          <SecondaryButton text="Scopri di più sul mio approccio"/>
        </div>
      </div>
    </>
  );
}

export default About;
