import aboutbg from "../../header-bg-emerald-600.png";

function About() {
  return (
    <>
      <div className="border-emerald-100 lg:border-t-4 py-1 mb-16">
        <div className="flex flex-col items-center lg:-mt-28">
          <h1 className="lg:text-5xl text-2xl font-semibold  mb-5 lg:mb-9 text-sky-800">
            Dott. Paolo Valentini
          </h1>
          <p className="font-medium bg-opacity-10 lg:text-emerald-700 text-sky-700 lg:text-xl  lg:bg-emerald-100 w-fit rounded-xl py-2 px-20 ">
            {" "}
            Mi occupo di adolescenti e adulti e nello specifico fornisco{" "}
            <b>sostegno psicologico</b> per{" "}
          </p>

          <ul className=" w-3/5 flex rounded-xl flex-col gap-2 tracking-wider lg:text-lg font-bold px-7 py-2 text-sky-800">
            <li className="py-1 ">disturbi d'ansia </li>
            <li className="p-1 ">disturbi dell'umore e della depressione </li>
            <li className="p-1 ">disturbi ossessivi-compulsivi</li>
            <li className="p-1 "> disturbi da Stress Post-Traumatico</li>
            <li className="p-1 "> disturbi di personalità</li>
          </ul>
          <p className="lg:text-sky-700 text-sky-700 text-lg py-5">
            Opero invii a diverse figure professionali nell'ambito della salute
            mentale quali:
          </p>

          <p className="font-bold text-center lg:text-sky-700 text-lg text-sky-700">
            psicoterapeuti, psichiatri, neurologi, psicodiagnosti.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
