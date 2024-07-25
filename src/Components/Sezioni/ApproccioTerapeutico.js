import SubTitles from "../SubTitles";
import TitleSection from "../TitleSection";
import approcciobg from "../../header-bg-emerald.png";

function ApproccioTerapeutico() {
  return (
    <>
      <div  style={{
          backgroundImage: `url(${approcciobg})`,
        }}
        className=" py-8">
        <TitleSection text="L'approccio analitico-archetipico"></TitleSection>
        <div className="mt-14 leading-9 flex flex-col text-sky-900 tracking-wide font-medium mx-10 items-center w-fit">
          <p>
            <b>La psicologia analitico archetipica</b> è una branca della psicologia
            che trova le sue radici nel lavoro pionieristico di <b>Carl Gustav
            Jung</b>, uno dei fondatori della psicologia analitica. Questo approccio
            si concentra sugli <b>archetipi</b>, che sono modelli universali di
            comportamento e simboli che risiedono nell'inconscio collettivo, una
            parte della psiche condivisa da tutta l'umanità. Il metodo
            terapeutico della psicologia analitico archetipica si basa
            sull'esplorazione e sull'integrazione degli archetipi presenti nella
            vita di un individuo. Il processo terapeutico coinvolge diverse
            tecniche e strumenti per portare alla luce gli archetipi inconsci e
            lavorare con essi in modo consapevole.
            <ul>
              <li>
                {" "}
                <b>Analisi dei Sogni: </b>I sogni sono visti come una porta
                d'accesso all'inconscio e agli archetipi. Attraverso
                l'interpretazione dei sogni, si possono rivelare temi
                archetipici che influenzano la vita dell'individuo.
              </li>
              <li>
                <b>Immaginazione Attiva:</b> Una tecnica che permette di
                dialogare con le immagini e i simboli dell'inconscio in uno
                stato di consapevolezza vigile.{" "}
              </li>
              <li>
                {" "}
                <b>Uso dei Miti e delle Fiabe:</b> Le storie mitologiche e le
                fiabe sono utilizzate per comprendere meglio gli archetipi e il
                loro impatto sulla psiche.{" "}
              </li>
              <li>
                {" "}
                <b>Lavoro con i Simboli: </b>Identificare e lavorare con simboli
                ricorrenti nella vita quotidiana per integrare gli aspetti
                inconsci nella coscienza.{" "}
              </li>
              <li>
                {" "}
                <b>Integrazione dell'Ombra: </b>Affrontare e integrare gli
                aspetti oscuri e rifiutati della psiche, noti come l'Ombra, per
                raggiungere una maggiore completezza e autenticità.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}

export default ApproccioTerapeutico;
