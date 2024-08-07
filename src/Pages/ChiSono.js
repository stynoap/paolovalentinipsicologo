import React from "react";
import Formazione from "../Components/Sezioni/Formazione";
import PrimaryButton from "../Components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

function About() {
  const navigate = useNavigate();

  const navForm = () => {
    navigate("/#contatti");
    console.log("tua mamma");
  };

  return (
    <>
      <Navbar />
      <section id="about" className="bg-neutral-50 py-16">
        <div className="container mx-auto px-6 lg:px-20 text-lg">
          {/* Sezione 1: Perché faccio quello che faccio */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Formazione e Background
            </h2>
            <p className=" text-gray-700 leading-relaxed mb-6">
              Ho conseguito la laurea in Psicologia presso l'Università di
              Urbino e sono iscritto all'Albo A dell'Ordine degli psicologi
              delle Marche (n°3136). La mia formazione continua attraverso corsi
              e aggiornamenti per garantire un supporto psicologico basato sulle
              più recenti evidenze scientifiche.
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

          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Esperienze nel campo lavorativo
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Durante il lavoro nei servizi sociali, in qualità di educatore, ho
              potuto esperire nel vivo le modalità di funzionamento di famiglie
              in difficoltà e stare a contatto con le dinamiche interne del
              sistema famigliare e dei minori al loro interno. Ho potuto
              osservare e seguire i minori sia all'interno dei contesti
              domestici che nelle attività disposte dai servizi sociali.
            </p>

            <p>
              Ho elaborato e ho osservato la preparazione e lo svolgimento di
              laboratori ad hoc per l'espressività di minori e adulti
              comprendendo ulteriormente l'importanza del lavoro in equipe e
              delle figure più esperte.
            </p>
            <p>
              Ho svolto incontri protetti e ho collaborato con assistenti
              sociali, educatori, psicologi e referenti per i servizi
              territoriali.
            </p>
            <p>
              Nel lavoro scolastico in qualità di assistente all'educativa ho
              aiutato il minore adolescente nelle attività espressive, manuali e
              didattiche in modo da aiutare l'adolescente nei problemi di
              autonomia e comunicazione. Anche in questo caso il mio faro è
              stato fare un lavoro di rete con le altre figure di riferimento.
            </p>

          </div>


          <div className="mb-16">
            <PrimaryButton
              onclick={navForm}
              testo="Scrivimi per prenotare un colloquio"
              cta="true"
            />
          </div>

          <Formazione />
          
        </div>
      </section>
    </>
  );
}

export default About;
