import PrimaryButton from "../PrimaryButton";
import TitleSection from "../TitleSection";
import LoStudio from "./LoStudio";

function Studio() {
  return (
    <>
      <div className="bg-sky-50 py-10 rounded-3xl my-10">
        <TitleSection text="Lo studio" />
        <LoStudio />
        <p className="text-slate-700 px-2 py-6 text-xl">
          Mi potete trovare al{" "}
          <b>Centro di psicologia e psicoterapia - Legami</b> Via Italia, 32,
          63813 Monte Urano (FM)
        </p>

        <div className="flex flex-col justify-center items-center text-slate-700 ">
          <p className="font-medium bg-opacity-10  lg:text-xl w-fit rounded-xl py-2 lg:px-20 px-3 ">
            {" "}
            Nello studio al centro <b>Legami</b> mi occupo di adolescenti e
            adulti e nello specifico fornisco <b>sostegno psicologico</b> per{" "}
          </p>

          <ul className=" w-3/5 flex rounded-xl flex-col gap-2 tracking-wider lg:text-lg font-bold px-7 py-2 text-slate-700">
            <li className="py-1 ">disturbi d'ansia </li>
            <li className="p-1 ">disturbi dell'umore e della depressione </li>
            <li className="p-1 ">disturbi ossessivi-compulsivi</li>
            <li className="p-1 "> disturbi da Stress Post-Traumatico</li>
            <li className="p-1 "> disturbi di personalità</li>
            <li className="p-1 "> schizofrenia</li>
            <li className="p-1 "> terapia di coppia</li>
          </ul>
        </div>

        <p className="text-slate-600 font-bold text-xl mt-5  p-3">
          Nella terapia con l'adolescente valuto caso per caso se fare un primo
          incontro con i genitori
        </p>
        <p className="lg:text-slate-600 text-sky-700 text-lg py-5">
          Opero invii a diverse figure professionali nell'ambito della salute
          mentale quali:
        </p>

        <p className="font-bold text-center lg:text-slate-700 text-lg text-slate-700 mb-7">
          psicoterapeuti, psichiatri, neurologi, psicodiagnosti.
        </p>

        <PrimaryButton testo="Prenota un appuntamento" />
      </div>
    </>
  );
}

export default Studio;
