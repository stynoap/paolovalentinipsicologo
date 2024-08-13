import TitleSection from "../TitleSection";
import terapia from "../../icone/icons8-psicoterapia-100.png"

function SostegnoPsicologico() {
  return (
    <>
      <div id="sostegno-psicologico" className="w-full flex flex-col justify-center items-center mt-14 bg-white py-12 ">
        <TitleSection text="Il sostegno psicologico" />
        <div className="h-20 bg-no-repeat w-6/12 my-6 bg-center"  style={{
                backgroundImage: `url(${terapia})`,
              }}></div>
        <div className="w-4/5 py-7 text-xl leading-9 text-slate-900 ">
          <p className="mb-10">
            <b >Il sostegno psicologico</b> si struttura in un numero iniziale
            flessibile ma comunque minore di <b>5 sedute iniziali.</b> É una prima fase
            di importanza fondamentale per l'instaurazione dell'alleanza
            terapeutica. Nel caso di richiesta di sostegno psicologico per
            minori, la prima seduta sarà effettuata con la presenza dei
            genitori.
          </p>
          
          <p className="mb-10">
            In tutti i casi nella prima seduta ci sarà una parte dedicata alla
            spiegazione del <b>contratto terapeutico,</b> alla firme del consenso
            informato e della privacy. Si stabiliranno le regole del setting che
            consistono anche negli orari e nel costo che varia in base al
            reddito e alla necessità momentanea del paziente. Si farò un anamesi
            basata sul racconto del paziente.
          </p>
          <p className="mb-10">
            {" "}
            Nelle successive si definirà una valutazione del caso attraverso
            l'analisi della domanda emersa durante il primo colloquio, racconti
            ulteriori porteranno a focalizzare le tematiche fondamentali e ci sarà una
            resistituzione sostanziale del lavoro svolto.{" "}
          </p>

          <p>
            Ci sarà poi una seduta dedicata alla decisione del proseguo del
            nostro percorso di sostegno o di una decisione di lavoro individuale
            o di d'equipe in sinergia con altre figure nell'ambito della
            psicoterapia e/o della psichiatria o dei servizi territoriali.
          </p>
        </div>
      </div>
    </>
  );
}

export default SostegnoPsicologico;
