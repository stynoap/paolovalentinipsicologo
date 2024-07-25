function About() {
  return (
    <>
      <div className=" py-1 mb-16">
        <div className="flex flex-col items-center lg:-mt-28">
          
          <h1 className="lg:text-5xl text-2xl font-semibold  mb-5 lg:mb-9 text-sky-800">
            Dott. Paolo Valentini
          </h1>
          <p className="w-3/4 my-6 text-sky-700 text-xl font-medium leading-9 tracking-wide">
            Mi sono occupato negli anni di adolescenti e famiglie in carico ai
            servizi sociali, ho lavorato a lungo nelle scuole come assistente
            all'educativa scolastica, ho avuto esperienze lavorative e di
            tirocinio nell'ambito di comunità residenziali per la salute
            mentale, nelle comunità per tossicodipenti e negli attuali sistemi
            di accoglienza e integrazione. Ho continuato la formazione in
            Psicologia tramite un tirocinio nell'università di Urbino in cui ho
            integrato al corso di studi universitario modalità e diversi appocci
            specifici di intervento. Ho approfondito i temi della mia tesi di
            laurea magistrale attraverso un lavoro di ricerca scientifica con un
            focus specifico verso i disturbi dello spettro della schizofrenia e altri
            disturbi psicotici
            nel setting della terapia individuale con orientamento psicodinamico
            e analitico.
          </p>
          <p className="font-medium bg-opacity-10 lg:text-emerald-700 border-emerald-100 lg:border-t-4 text-sky-700 lg:text-xl  lg:bg-emerald-100 w-fit rounded-xl py-2 px-20 ">
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
            <li className="p-1 "> schizofrenia</li>
            <li className="p-1 "> terapia di coppia</li>
          </ul>

          <p className="text-sky-800 font-bold text-xl mt-5  p-3">Nella terapia con l'adolescente valuto caso per caso se fare un primo incontro con i genitori</p>
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
