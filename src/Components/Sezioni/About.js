import { useNavigate } from "react-router-dom";
import SecondaryButton from "../SecondaryButton";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <div id="chi-sono" className=" py-1 mb-2 bg-slate-50">
        <div className="flex flex-col items-center mt-5">
          <h1 className="lg:text-5xl text-3xl font-semibold  mb-5 lg:mb-9 text-slate-800">
            Dott. Paolo Valentini
          </h1>
          <div className=" text-slate-700 lg:text-md lg:leading-10 leading-7 lg:tracking-wide lg:mx-14 lg:text-center lg:pl-0 pl-5 pr-3 -tracking-tight text-left">
          <p className=" my-3 py-2">
            La vita ci chiama ad una trasformazione, perché la psiche è in
            costante movimento.
            <br />
            Scelgo di concepire il termine trasformazione come “ formale al di
            là”, “ formare nel profondo”, dare quindi luogo alle forme che
            esistono già, dentro, ma che hanno bisogno di essere accolte e
            riconosciute nel continuo dinamismo psichico.
            <br />
            Nessun modello teorico e nessun particolare tipo di intervento
            terapeutico si è dimostrato, anche scientificamente, superiore ad un
            altro. L'esplorazione o la ricongiunzione con noi stessi può
            avvenire infatti attraverso: modelli teorici, contesti clinici,
            luoghi e tempi diversificati.
            <br />
            Da qui posso dire che ciò che vivo e restituisco al paziente non
            sono infatti solo l'esito di una teoria o un tecnica terapeutica che
            mi è stata insegnata ma anche e soprattutto il frutto delle esigenze
            di cambiamento che mi ha posto e mi porrà la psiche.
          </p>
          <p className=" my-3 py-2">
            Ho scelto{" "}
            <b>
              <a href="#approccio-terapeutico">
                l'approccio analitico-archetipico
              </a>
            </b>{" "}
            perchè sono stato toccato dagli' “incontri” con gli analisti Carl
            Gustav Jung e successivamente, James Hillman. Essi ridanno
            centralità e autonomia al cuore della psiche. Jung aveva chiarito
            che la psiche è costituita da immagini, successioni di immagini che
            derivano dal processo costante dell'attività fantastica inconscia.
            Le immagini sono interne, arcaiche e primordiali, hanno come fonte
            gli archetipi e si esprimono in simboli. Ogni trasformazione delle
            immagini attraverso il racconto, suggestiona e modifica i modelli di
            comportamento; per Hillman ogni immagine è immagine archetipica ed è
            parte della natura e non una semplice fantasia soggettiva della
            mente, agendo attraverso la metafora e l' immaginazione operiamo e
            partecipiamo anche alla natura dentro di noi.
          </p>
          </div>
         
          {/* 
          <p className="lg:text-slate-700 text-slate-700 font-medium leading-9 text-xl italic w-3/4 py-5">
            Attualmente frequento il secondo anno della scuola di{" "}
            <b>psicoterapia analitica-archetipico-gestaltica "Atanor"</b> che mi
            accompagna nello studio della <b>psicologia del profondo.</b> La
            scuola <b>Atanor</b> è la prima scuola di psicoterapia ad indirizzo
            analitico archetipico del Centro Italia
          </p> */}
          <SecondaryButton
            onclick={() => {
              navigate("/approccio");
            }}
            text="Scopri di più sul mio approccio"
          />
        </div>
      </div>
    </>
  );
}

export default About;
