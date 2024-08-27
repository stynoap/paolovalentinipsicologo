import TitleSection from "../TitleSection";
// import approcciobg from "../../header-bg-emerald.png";
import SubTitles from "../SubTitles";
// import { useNavigate } from "react-router-dom";
// import piantina from "../../icone/piantina.jpeg";
import passignano from "../../icone/passignano.jpg";
// import ghianda from "../../icone/ghianda.jpg";

function ApproccioTerapeutico() {
  // const navigate = useNavigate();
  return (
    <>
      <div
        // style={{
        //   backgroundImage: `url(${approcciobg})`,
        // }}
        className=" pt-14 bg-slate-50 w-12/12 flex flex-col items-center justify-center py-36 "
        id="approccio-terapeutico"
      >
        <TitleSection text="L'approccio analitico archetipico"></TitleSection>
        <div className="lg:w-8/12 ">
          <div className="mt-14 leading-9 gap-4 flex flex-col  text-slate-900 tracking-wide font-medium mx-10 text-left items-center w-fit">
            <div>
              <SubTitles
                text="La psicologia
              analitica"
              />
              <div
                className="h-72 lg:w-8/12 w-full bg-center bg-no-repeat lg:float-left mr-10 bg-cover rounded-lg mb-20"
                style={{
                  backgroundImage: `url(${passignano})`,
                }}
              ></div>
              <p className="text-xl leading-7 tracking-wide italic mb-9 lg:mt-0 mt-4">
                {" "}
                "Non c'è luce senza ombre e non c'è pienezza psichica senza
                imperfezioni. La vita richiede per la sua realizzazione non la
                perfezione, ma la pienezza"
              </p>
              <p className="mb-5 italic">C.G. Jung</p>

              <p className="clear-both">
                La psicologia analitica è la psicologia di Carl Gustav Jung. La
                psiche è un sistema dinamico e complesso che cerca di mantenere
                un equilibrio nel gioco di forze che lo compongono. Jung si
                sofferma alla base delle dinamiche inconsce che sorreggono i
                sintomi. Più che una loro eliminazione, essi vanno compresi,
                perchè sono donatori di un significato e quindi elementi di
                trasformazione della personalità. Per Jung tutti noi siamo
                spinti da forza sconosciute espressione di uno strato profondo,
                innato, universale che chiama inconscio collettivo costituito da
                archetipi. Lo scopo cardine della psicologia analitica è un
                ampliamento delle propria personalità e uno sviluppo delle
                proprie potenzialità uniche attraverso un riconoscimento e
                rispecchiamento dei propri valori più autentici e di una
                differenziazione da quelli collettivi nel percorso a cui
                l'energia psichica tende, cioè al processo di individuazione, un
                percorso che mira non alla perfezione ma alla completezza e alla
                realizzazione personale.
              </p>
            </div>
            <div>
              <SubTitles
                text="La psicologia
              archetipica di James Hillman"
              />

              <p className="clear-both">
                James Hillman è il fondatore della psicologia archetipica.{" "}
                <br />
                Con James Hillman il processo di indivuduazione non avrà come
                scopo la realizzazione del sé individale ma dei singoli
                immaginari. Scompaiono le parole inconscio e coscienza, ogni
                immagine è archetipica e l'obiettivo della terapia non è più
                portare a coscienza ciò che era inconscio con la partecipazione
                diretta del soggetto e dell'Io ma rimemorare le immagini
                attraverso i racconti. <br />
                Egli si distacca dalle prospettive della psicologia moderna,
                rielabora la tradizione immaginativa di C.G. Jung e rimette al
                centro del suo campo di studi un'idea antica e universale:l'idea
                di anima. L'anima, in greco psyché(aggiungere accento) è soffio
                vitale e essenza energetica della vita. L'anima è intesa come
                prospettiva e visuale sulle cose. La psiche, attraverso la
                fantasia svolge un attività creativa costante in cui le immagini
                e le rappresentazioni immaginative sono i suoi dati basilari,
                materia prima e prodotto finito allo stesso tempo, esse
                costituiscono le vie d'accesso alla conoscenza dell'anima. Alla
                radice dell'anima ci sono gli archetipi, i modelli primari e
                profondi del funzionamento psichico, pattern of beahviour che
                influenzano il nostro modo di vedere noi stessi, il mondo e di
                muoversi in questo rapporto. La primarietà degli archetipi ci
                consente di concepire gli eventi che accadono in una prospettiva
                nella quale possiamo collegare quanto avviene dentro di noi a
                quanto avviene a tutti gli individui nel corso di ogni tempo e
                luogo.
              </p>
            </div>
            {/* <SecondaryButton
              onclick={() => {
                navigate("/approccio");
              }}
              text="Approfondisci"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ApproccioTerapeutico;
