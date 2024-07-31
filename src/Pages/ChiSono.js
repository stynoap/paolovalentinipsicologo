import React from "react";
import paolovalentini from "./../paolo-sfondo.jpg";
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
      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Sezione 1: Perché faccio quello che faccio */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Chi sono
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed lg:w-11/12 mx-auto mb-10">
              Da sempre sono affascinato dalla complessità della mente umana e
              dalle relazioni interpersonali. La mia passione per la psicologia
              nasce dal desiderio di aiutare le persone a comprendere meglio se
              stesse e a trovare una via per vivere una vita più soddisfacente e
              autentica. Credo fermamente che, con il giusto supporto, ogni
              individuo possa superare le proprie difficoltà e scoprire nuove
              prospettive.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ho conseguito la laurea in Psicologia presso l'Università di
              Urbino e sono iscritto all'Albo A dell'Ordine degli psicologi
              delle Marche (n°3136). La mia formazione continua attraverso corsi
              e aggiornamenti per garantire un supporto psicologico basato sulle
              più recenti evidenze scientifiche. Ho pubblicato diversi articoli
              su riviste specializzate, concentrandomi su tematiche come
              l'adolescenza, le dinamiche di coppia e la gestione dello stress.
            </p>
          </div>

          {/* Sezione 2: Cosa Faccio e i Benefici */}
          <div className="mb-16 flex flex-col lg:flex-row items-center lg:w-10/12 mx-auto">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Di cosa mi occupo
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Offro supporto psicologico e percorsi di sostegno psicologico
                per adulti, adolescenti e coppie. Il mio approccio è empatico e
                non giudicante, mirato a creare un ambiente sicuro dove
                esplorare le proprie emozioni e pensieri. L'obiettivo è aiutare
                i miei clienti a superare ansie, stress, problemi relazionali e
                difficoltà emotive, promuovendo il benessere e
                l'autoconsapevolezza.
              </p>
            </div>
            <div
              className="lg:w-1/2 w-full h-80 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${paolovalentini})`,
              }}
            ></div>
          </div>

          <div className="mb-16">
            <p className="text-lg text-gray-700 leading-relaxed font-bold mb-10">
              Il mio obiettivo è accompagnare ogni paziente verso una maggiore
              consapevolezza di sé e il raggiungimento di un equilibrio
              psicologico duraturo. La mia priorità è offrire un ascolto attento
              e un supporto personalizzato per ogni individuo.
            </p>
            <PrimaryButton
              onclick={navForm}
              testo="Scrivimi per prenotare un colloquio"
            />
          </div>

          <Formazione />
        </div>
      </section>
    </>
  );
}

export default About;
