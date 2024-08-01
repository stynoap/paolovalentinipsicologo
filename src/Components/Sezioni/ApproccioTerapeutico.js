import TitleSection from "../TitleSection";
// import approcciobg from "../../header-bg-emerald.png";
import SubTitles from "../SubTitles";
import SecondaryButton from "../SecondaryButton";
import { useNavigate } from "react-router-dom";
// import piantina from "../../icone/piantina.jpeg";
import congiunzioni from "../../icone/congiunzioni.jpeg";
import ghianda from "../../icone/ghianda.jpg";

function ApproccioTerapeutico() {
  const navigate = useNavigate();
  return (
    <>
      <div
        // style={{
        //   backgroundImage: `url(${approcciobg})`,
        // }}
        className=" pt-14 bg-slate-50 w-12/12 flex flex-col items-center justify-center "
        id="approccio-terapeutico"
      >
        <TitleSection text="L'approccio analitico archetipico"></TitleSection>
        <div className="lg:w-8/12 ">
          <div className="mt-14 leading-9 gap-4 flex flex-col  text-slate-900 tracking-wide font-medium mx-10 text-left items-center w-fit">
            <div>

              <SubTitles
                text="La psicologia
              archetipica"
              />
              <div
                className="h-72 lg:w-8/12 w-full bg-center bg-no-repeat lg:float-left mr-10 bg-cover rounded-lg"
                style={{
                  backgroundImage: `url(${congiunzioni})`,
                }}
              ></div>
              <p className="text-xs leading-7 italic mb-9 lg:mt-0 mt-4">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <p className="clear-both">
                Il pricincio cardine della psicologia Archetipica risulta
                nell'attribuire l'origine dei processi psichici alla psiche,
                compresa la malattia. James Hillman è il fondatore della
                psicologia archetipica. Si distacca dalle prospettive della
                psicologia moderna, rielabora la tradizione immaginativa di C.G.
                Jung e rimette al centro del suo campo di studi un'idea antica e
                universale:l'idea di anima. L'anima, in greco psyche è soffio
                vitale e essenza energetica della vita. L'anima intesa però non
                come sostanza ma come prospettiva e visuale sulle cose. La
                psiche attraverso la fantasia svolge un attività creativa
                costante in cui le immagini e le rappresentazioni immaginative
                sono i suoi dati basilari, materia prima e prodotto finito allo
                stesso tempo, esse costituiscono le vie d'accesso alla
                conoscenza dell'anima. Alla radice dell'anima ci sono gli
                archetipi i modelli primari e profondi del funzionamento
                psichico, pattern of beahviour che influenzano il nostro modo di
                vedere noi stessi e il mondo e di agire in questo rapporto. La
                loro primarietà ci consente di concepire gli eventi che accadono
                in una prospettiva nella quale possiamo collegare quanto avviene
                dentro di noi a quanto avviene a tutti gli individui nel corso
                di ogni tempo e luogo.
              </p>
              <SubTitles text="La teoria della ghianda" />
              <div
                className="h-72 lg:w-8/12 w-full bg-center bg-no-repeat lg:float-left mr-10 bg-cover rounded-lg"
                style={{
                  backgroundImage: `url(${ghianda})`,
                }}
              ></div>
              <p className="text-xs leading-7 italic mb-9 lg:mt-0 mt-4">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <p className="clear-both">
                La teoria della ghianda di James Hillman, descritta nel suo
                libro "Il codice dell'anima," postula che ogni individuo nasca
                con un "daimon" o vocazione unica, un concetto derivato dalla
                filosofia antica che rappresenta una sorta di guida interiore.
                Hillman utilizza la metafora della ghianda per illustrare l'idea
                che ogni persona porta dentro di sé un potenziale specifico e
                predeterminato, simile a come una quercia è già contenuta in una
                ghianda. Questo destino innato, secondo Hillman, non è
                determinato dalle esperienze passate o dall'ambiente, ma è un
                aspetto intrinseco della persona che cerca espressione e
                realizzazione. La teoria sfida le visioni psicologiche
                tradizionali che si concentrano su traumi e influenze esterne,
                proponendo invece una prospettiva che mette in risalto
                l'importanza di scoprire e vivere in armonia con il proprio
                destino personale e autentico.
              </p>
            </div>
            <SecondaryButton
              onclick={() => {
                navigate("/approccio");
              }}
              text="Approfondisci"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ApproccioTerapeutico;
