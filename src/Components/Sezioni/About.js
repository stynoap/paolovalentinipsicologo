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
          <p className="w-3/4 my-3 py-2 text-slate-700 text-xl font-medium leading-9 tracking-wide">
            La vita è trasformazione, movimento, è dynamis. Nessun modello
            teorico e nessun particolare tipo di intervento terapeutico si è
            dimostrato, anche scientificamente, superiore ad un altro,non c'è
            nessuna consequenzialità tra teoria psicologica e prassi terapeutica
            e la “guarigione” avviene in contesti clinici, modalità, luoghi,e
            tempi completamenti disparati.Solo da qui posso partire per dire che
            ciò che ascolto attivamente e ciò che restituisco al paziente non
            sono solamente il frutto di una strategia terapeutica imparata sui
            libri ma il frutto delle mie ferite, dei miei traumi, dei miei
            successi e fallimenti e della condivisione con le sofferenze altrui.
            Adotto quindi una tecnica dinamica che cambia con me via via che la
            vita mi tocca con le esperienze e gli accadimenti, una tecnica
            diversa quindi per ogni paziente e che si trasforma ogni seduta.
          </p>
          <p className="w-3/4 my-3 py-2 text-slate-700 text-xl font-medium leading-9 tracking-wide">
            Ho scelto <b><a href="#approccio-terapeutico">l'approccio analitico-archetipico</a></b> perchè sono stato
            toccato dagli' “incontri” con analisti C.G. Jung e poi
            successivamente, <b>James Hillman.</b> Essi ridanno centralità al cuore
            della psiche. Jung aveva chiarito che la psiche è costituita da
            immagini, una successioni di immagini che derivano non da una
            riproduzione psichica dell'oggetto esterno ma come un sentire, un
            vedere, un udire interiore che è il risultato del processo costante
            dell'attività fantastica inconscia. Le immagini sono interne,
            arcaiche e primordiali e hanno come fonte gli archetipi. Ogni
            trasformazione delle immagini attraverso il racconto incide sui
            modelli di comportamento, ogni immagine archetipica è parte della
            natura e non una semplice fantasia soggettiva della mente , agendo
            sull'immaginazione operiamo e partecipiamo anche alla natura dentro
            di noi.
          </p>
          {/* 
          <p className="lg:text-slate-700 text-slate-700 font-medium leading-9 text-xl italic w-3/4 py-5">
            Attualmente frequento il secondo anno della scuola di{" "}
            <b>psicoterapia analitica-archetipico-gestaltica "Atanor"</b> che mi
            accompagna nello studio della <b>psicologia del profondo.</b> La
            scuola <b>Atanor</b> è la prima scuola di psicoterapia ad indirizzo
            analitico archetipico del Centro Italia
          </p> */}
          <SecondaryButton   onclick={(()=>{navigate("/approccio")})}  text="Scopri di più sul mio approccio" />
        </div>
      </div>
    </>
  );
}

export default About;
