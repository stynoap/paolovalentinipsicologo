import TitleSection from "../TitleSection";
import approcciobg from "../../header-bg-emerald.png";
import SubTitles from "../SubTitles";
import SecondaryButton from "../SecondaryButton";

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
        <div className="mt-14 leading-9 gap-4 flex flex-col text-sky-900 tracking-wide font-medium mx-10 items-center w-fit">
          <div>
            <SubTitles text="La psicologia analitica" />
            <p>
              {" "}
              La psicologia analitica è un metodo di indagine del prodondo
              elaborato dall'analista Carl Gustav Jung. L'approccio si distingue
              per un interesse al mondo interiore del paziente, il cui disturbo
              psichico non è più una malattia, il sintomo non richiede più una
              spigazione di causa-effetto ed entrambi esprimono la richiesta di
              una domanda di significato. La guarigione o la cura non sono più
              gli scopi principali, l'obiettivo è l'avvio di un processo che
              mira ad individuare l'orizzonte simbolico e archetipico del
              disturbo.{" "}
            </p>

            <SubTitles
              text="La psicologia
              archetipica"
            />

            <p>
              La psicologia archetipica, denominazione che risale a James
              Hillman è una psicologia che volutamente si collega con le arti,
              la cultura e la storia della società, le quali traggono anch'esse
              origine dall'immaginazione. Secondo la definizione tradizionale,
              gli archetipi sono le forme primarie che governano la psiche. Essi
              non possono però essere contenuti unicamente dalla psiche dato che
              si manifestano anche nelle modalità fisica, sociale, linguistica,
              estetica e sprituale.
            </p>

            <SubTitles
              text="La psicologia del
              profondo per Hillman. "
            />

            <p>
              Per Hillman tutto ha un significato archetipico e tutto è aperto
              alla penetrazione psicologica. La fantasia del profondo incoraggia
              a guardare il mondo con altri occhi, a leggere ogni evento in
              cerca di ‟qualcosa di più profondo", a ‟cercare dentro" anziché a
              ricercare, per estrarre un significato che vada oltre quanto
              appare evidente. La fantasia delle profondità nascoste infonde
              anima al mondo e favorisce un immaginare che penetri sempre più
              profondamente nelle cose. Il profondo - anziché un luogo nel senso
              letterale o fisico ,è una metafora primaria necessaria al pensare
              psicologico.
            </p>
          </div>
          <SecondaryButton text="Approfondisci" />
          
        </div>

      </div>
    </>
  );
}

export default ApproccioTerapeutico;
