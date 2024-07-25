import TitleSection from "../TitleSection";
import approcciobg from "../../header-bg-emerald.png";

function ApproccioTerapeutico() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${approcciobg})`,
        }}
        className=" py-8"
      >
        <TitleSection text="L'approccio analitico-archetipico"></TitleSection>
        <div className="mt-14 leading-9 flex flex-col text-sky-900 tracking-wide font-medium mx-10 items-center w-fit">
          <div>
            <p>
              L'appproccio analitico-archetipico ricalca in successione le
              elaborazioni di C.G. Jung e James Hillman e torna a dare
              centralità al cuore della psiche. Gli oggetti di studio di quella
              che viene chiamata anche psicologia del profondo sono i processi
              psichici puri che si esprimono tramite immagini, pensieri, agiti
              modalità comportamentali e psicosomatiche. Attraverso
              l'individuazione dell'Es anche Freud si occupa di profondità
              psichiche ma Jung opera subito un distacco teorico che ha inizio
              con la riconsiderazionedell'energia psichica, la libido, che egli
              valuta e approfondisce non solo come collegata alle manifestazioni
              pulsionali ma anche agli archetipi, quindi è indirizzata a
              finalità creative e di realizzazione della psiche, nello specifico
              il processo di individuazione e il Sé. La psicologia analitica si
              sviluppa in seguito come psicologia archetipica e assume rilevanza
              come psicologia imagistica. Già Jung aveva chiarito che la psiche
              è costituita da immagini, una successioni di immagini che derivano
              non da una riproduzione psichica dell'oggetto esterno ma come un
              sentire, un vedere, un udire interiore che è il risultato del
              processo costante dell'attività fantastica inconscia. Le immagini
              sono interne, arcaiche e primordiali e hanno come fonte gli
              archetipi Con Hillman il processo di indivuduazione non avrà come
              scopo la realizzazione del sé individale ma dei singoli
              immaginari. Scompaiono le parole inconscio e coscienza, ogni
              immagine è archetipica e l'obiettivo della terapia non è più
              portare a coscienza ciò che era inconscio con la partecipazione
              diretta del soggetto e dell'Io ma rimemorare le immagini
              attraverso i racconti. Ogni trasformazione delle immagini
              attraverso il racconto incide sui modelli di comportamento, ogni
              immagine archetipica è parte della natura e non una semplice
              fantasia soggettiva della mente , agendo sull'immaginazione
              operiamo e partecipiamo anche alla natura dentro di noi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApproccioTerapeutico;
