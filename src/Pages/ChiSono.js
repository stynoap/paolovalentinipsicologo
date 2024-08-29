import React from "react";
import Formazione from "../Components/Sezioni/Formazione";
import PrimaryButton from "../Components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Contatti from "../Components/Contatti";
// import SubTitles from "../Components/SubTitles";

function About() {
  const navigate = useNavigate();

  const navForm = () => {
    navigate("/#contatti");
  };

  return (
    <>
      <Navbar />
      <section id="about" className="bg-neutral-50 py-16">
        <div className="px-6 lg:px-20 text-md ">
          {/* Sezione 1: Perché faccio quello che faccio */}
          <div className="mb-16 text-left leading-relaxed  bg-amber-50 p-10 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Formazione e Background
            </h2>
            <p className=" text-gray-700 leading-relaxed mb-6">
              Ho conseguito la laurea in Psicologia presso l'Università di
              Urbino e sono iscritto all'Albo A dell'Ordine degli psicologi
              delle Marche (n°3136). La mia formazione continua attraverso corsi
              e aggiornamenti per garantire un supporto psicologico basato sulla letteratura scientifica.
            </p>

            <p className="mb-6">
              L'esperienza universitaria mi ha fornito una prepazione teorica e
              metodologica in diversi ambiti della psicologia, in particolare
              nell'ambito della psicologia clinica, dinamica e sociale e ha
              promosso le capacità di analizzare le caratteristiche rilevanti e
              i funzionamenti di persone e gruppi, nell'ambito socio-sanitario e
              di comunità, nella traversversalità di approcci teorici e
              metodologici.
            </p>
            <p className="mb-6">
              <b>
                Negli studi e nell'approfondimento di questi mi sono focalizzato
                maggiormente nella tipologia di intervento psicodinamico
              </b>{" "}
              che pone l'accento su significati inconsci attivi nel qui e ora
              della relazione, nell'importanza dell'analisi sistematica della
              struttura di personalità del paziente e nel riconoscimento
              dell'impatto delle prime relazioni sulla psicopatologia e sulla
              relazione terapeutica.
            </p>

            <p className="font-bold mb-6">
              {" "}
              L'approccio dinamico si distingue per la sensibilità dello
              psicologo e del terapeuta il quale si dovrebbe caratterizzare per
              una rispettosa curiosità per la soggettività del paziente insieme
              all'attenzione alla complessità dei significati che sottendono il
              comportamento che può essere compreso alla luce di stati mentali:
              inconsapevoli, molteplici e stratificati, che stanno alla base
              della sofferenza psichica.
            </p>
            <p className="mb-6">
              {" "}
              Attraverso tirocini pratico-valutativi e laboratori interni
              all'ateneo ho cercato di entrare dentro le dinamiche reali di
              persone e comunità.
            </p>
            <p className="font-bold">
              {" "}
              Ho approfondito attraverso un lavoro di ricerca le strutture di
              personalità psicotiche.
            </p>
          </div>

          <div className="mb-16 text-left leading-relaxed  bg-emerald-50 p-10 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Esperienze nel campo lavorativo
            </h2>
            <p className="text-md text-gray-700  mb-6">
              Durante il lavoro nei servizi sociali, in qualità di{" "}
              <b>educatore</b>, ho potuto esperire nel vivo le modalità di
              funzionamento di famiglie in difficoltà e stare a contatto con le
              dinamiche interne del
              <b> sistema famigliare</b> e dei minori al loro interno. Ho potuto
              osservare e seguire i minori sia all'interno dei contesti
              domestici che nelle attività disposte dai servizi sociali.
            </p>

            <p>
              Ho elaborato e ho osservato la preparazione e lo svolgimento di
              <b> laboratori</b> ad hoc per l'espressività di minori e adulti
              comprendendo ulteriormente l'importanza del lavoro in equipe e
              delle figure più esperte.
            </p>
            <p>
              Ho svolto incontri protetti e ho collaborato con assistenti
              sociali, educatori, psicologi e referenti per i servizi
              territoriali.
            </p>
            <p>
              Nel <b>lavoro scolastico</b> in qualità di assistente
              all'educativa ho aiutato il minore adolescente nelle attività
              espressive, manuali e didattiche in modo da aiutare l'adolescente
              nei problemi di autonomia e comunicazione. Anche in questo caso il
              mio faro è stato fare un lavoro di rete con le altre figure di
              riferimento.
            </p>
          </div>
          {/* <SubTitles text="Pubblicazioni" />
          <div className="mt-4 text-slate-700">
            <p className="italic">
              Rivista semestrale di psicologia del profondo "Il Minotauro" (ISSN
              2037-4216) - N° del Giugno 2020.
            </p>
            <p className="mt-4 text-sm pb-7 tracking-widest leading-8 bg-slate-50 px-3 py-3 rounded-xl bg-opacity-70 shadow-lg">
              Le figure di <b>Sisifo</b> e del <b>Sisifo Felice</b> di{" "}
              <b>Camus</b> sono dei simboli che mi hanno consentito di
              riflettere sulla psicosi fuori e dentro il setting terapeutico e
              di focalizzarmi su alcune dimensioni quali: il dolore, l’alleanza
              con l’assurdo, la coazione a ripetere, l’elaborazione
              trasformativa attraverso i sogni e la figurabilità. Nel disturbo
              psicotico della simbolizzazione viene a perdersi la base
              intermedia (il simbolo) sulla quale galleggiano gli opposti, non
              c’è integrazione tra identità e differenza, simbiosi e
              separazione, inconscio e coscienza.
            </p>
            <p className="mt-4"></p>
          </div> */}

          <div className="mb-16">
            <PrimaryButton
              onclick={navForm}
              testo="Scrivimi per prenotare un colloquio"
              cta="true"
            />
          </div>

          <Formazione />
          <Contatti />
        </div>
      </section>
    </>
  );
}

export default About;
