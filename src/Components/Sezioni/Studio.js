import PrimaryButton from "../PrimaryButton";
import TitleSection from "../TitleSection";
import LoStudio from "./LoStudio";

function Studio() {
  return (
    <>
      <div className="bg-slate-200 py-10 rounded-3xl my-10">
      
        <TitleSection text="Lo studio" />
        <LoStudio />
{/*       

        <div className="flex flex-col justify-center items-center text-slate-700 bg-slate-50 pb-10 ">
          <p className="font-medium bg-opacity-10 lg:text-xl text-xl w-fit rounded-xl py-2 lg:px-20 px-3 mt-8 ">
            {" "}
            Nello studio al centro <b>Legàmi</b> mi occupo di adolescenti e
            adulti e nello specifico fornisco <b>sostegno psicologico</b> per:{" "}
          </p>

          <ul className=" w-11/12 lg:w-4/12 flex rounded-xl flex-col gap-5 tracking-wider text-lg font-bold px-7 py-2 text-slate-700 mt-4">
            <li className="py-2 bg-slate-100 shadow-lg rounded-xl ">disturbi d'ansia </li>
            <li className="p-2  bg-slate-100 shadow-lg rounded-xl ">disturbi dell'umore e della depressione </li>
            <li className="p-2  bg-slate-100 shadow-lg rounded-xl">disturbi ossessivi compulsivi</li>
            <li className="p-2  bg-slate-100 shadow-lg rounded-xl "> disturbi da stress post-traumatico</li>
            <li className="p-2  bg-slate-100 shadow-lg rounded-xl "> disturbi di personalità</li>
            <li className="p-2  bg-slate-100 shadow-lg rounded-xl "> schizofrenia</li>
            <li className="p-2  bg-slate-100 shadow-lg rounded-xl "> coppie</li>
          </ul>
        </div> */}

        <p className="text-slate-600 font-bold text-xl mt-7   px-5">
          Nella terapia con l'adolescente valuto caso per caso se fare un primo
          incontro con i genitori
        </p>
        <p className="lg:text-slate-600 text-slate-700 text-lg py-5">
          Opero invii a diverse figure professionali nell'ambito della salute
          mentale quali:
        </p>

        <p className="font-bold text-center lg:text-slate-700 text-lg text-slate-700 mb-7">
          psicoterapeuti, psichiatri, neurologi, psicodiagnosti.
        </p>

        <PrimaryButton href="#contatti" testo="Prenota un appuntamento" />
      </div>
    </>
  );
}

export default Studio;
