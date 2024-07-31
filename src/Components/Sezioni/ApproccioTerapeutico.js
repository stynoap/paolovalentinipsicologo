import TitleSection from "../TitleSection";
// import approcciobg from "../../header-bg-emerald.png";
import SubTitles from "../SubTitles";
import SecondaryButton from "../SecondaryButton";
import { useNavigate } from "react-router-dom";
import piantina from "../../icone/piantina.jpeg";
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
              <SubTitles text="La psicologia analitica" />
              <div
                className="h-72 w-8/12 bg-no-repeat bg-center float-left mr-10 rounded-lg"
                style={{
                  backgroundImage: `url(${piantina})`,
                }}
              ></div>
              <p className="text-xs leading-7 italic mb-9">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <p className="clear-both ">
                {" "}
                La psicologia analitica è un metodo di indagine del prodondo
                elaborato dall'analista Carl Gustav Jung. L'approccio si
                distingue per un interesse al mondo interiore del paziente, il
                cui disturbo psichico non è più una malattia, il sintomo non
                richiede più una spigazione di causa-effetto ed entrambi
                esprimono la richiesta di una domanda di significato. La
                guarigione o la cura non sono più gli scopi principali,
                l'obiettivo è l'avvio di un processo che mira ad individuare
                l'orizzonte simbolico e archetipico del disturbo.{" "}
              </p>

              <SubTitles
                text="La psicologia
              archetipica"
              />
              <div
                className="h-72 w-8/12 bg-center bg-no-repeat float-left mr-10 bg-cover rounded-lg"
                style={{
                  backgroundImage: `url(${congiunzioni})`,
                }}
              ></div>
              <p className="text-xs leading-7 italic mb-9">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <p className="clear-both">
                La psicologia archetipica, denominazione che risale a James
                Hillman è una psicologia che volutamente si collega con le arti,
                la cultura e la storia della società, le quali traggono
                anch'esse origine dall'immaginazione. Secondo la definizione
                tradizionale, gli archetipi sono le forme primarie che governano
                la psiche. Essi non possono però essere contenuti unicamente
                dalla psiche dato che si manifestano anche nelle modalità
                fisica, sociale, linguistica, estetica e sprituale.
              </p>
              <SubTitles text="La teoria della ghianda" />
              <div
                className="h-72 w-8/12 bg-center bg-no-repeat float-left mr-10 bg-cover rounded-lg"
                style={{
                  backgroundImage: `url(${ghianda})`,
                }}
              ></div>
              <p className="text-xs leading-7 italic mb-9">
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

              <SubTitles
                text="La psicologia del
              profondo per Hillman. "
              />

              <p>
                Per Hillman tutto ha un significato archetipico e tutto è aperto
                alla penetrazione psicologica. La fantasia del profondo
                incoraggia a guardare il mondo con altri occhi, a leggere ogni
                evento in cerca di ‟qualcosa di più profondo", a ‟cercare
                dentro" anziché a ricercare, per estrarre un significato che
                vada oltre quanto appare evidente. La fantasia delle profondità
                nascoste infonde anima al mondo e favorisce un immaginare che
                penetri sempre più profondamente nelle cose. Il profondo -
                anziché un luogo nel senso letterale o fisico ,è una metafora
                primaria necessaria al pensare psicologico.
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
