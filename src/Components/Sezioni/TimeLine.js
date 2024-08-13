function TimeLine() {
  return (
    // <><!-- component -->
    <div class="container mx-auto w-full h-full">
      <div class="relative wrap overflow-hidden p-10 h-full">
        <div
          sty
          class="lg:border-2-2 absolute lg:border-opacity-20 lg:slate-red-700 h-full lg:border lg:left-1/2"
        ></div>

        {/* <!-- right timeline --> */}
        {/* <div class="mb-8 flex justify-between items-center w-full right-timeline">
          <div class="order-1 w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-slate-200 shadow-xl w-14 h-8 rounded-full">
            <h1 class="mx-auto font-semibold text-lg text-slate-700">2024</h1>
          </div>
          <div class="order-1 bg-slate-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-slate-700 text-xl">Lorem Ipsum</h3>
            <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-200">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 12000s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div> */}

        {/* <!-- left timeline --> */}
        {/* <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div class="order-1 w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-slate-200 shadow-xl w-14 h-8 rounded-full">
            <h1 class="mx-auto text-slate-700 font-semibold text-lg">2023</h1>
          </div>
          <div class="order-1 bg-slate-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-slate-700 text-xl">Lorem Ipsum</h3>
            <p class="text-sm font-medium leading-snug tracking-wide text-slate-700 text-opacity-200">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 12000s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div> */}

        {/* <!-- right timeline --> */}
        <div class="mb-8 flex justify-between lg:flex-row-reverse items-center w-full left-timeline mt-16">
          <div class="order-1 lg:w-5/12 "></div>
          <div class="z-20 flex items-center order-1 bg-slate-200 shadow-xl lg:mr-0 mr-8 lg:p-0 p-3 lg:w-14 lg:h-8 rounded-full">
            <h1 class="mx-auto font-semibold text-lg text-slate-700">2023</h1>
          </div>
          <div class="order-1 bg-slate-200 rounded-lg shadow-xl lg:w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-slate-700 text-xl">
              Specializzando in psicoterapia
            </h3>
            <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-200">
              Attualmente iscritto al 2° anno del corso di Specializzazione
              quadriennale in Psicoterapia Analitico-Archetipica "Atanor"
              Scoppito (AQ)
            </p>
          </div>
        </div>

        {/* <!-- RIGHT timeline --> */}
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
          <div class="order-1 lg:w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-slate-200 shadow-xl lg:mr-0 mr-8 lg:p-0 p-3 lg:w-14 lg:h-8 rounded-full">
            <h1 class="mx-auto text-slate-700 font-semibold text-lg">2023</h1>
          </div>
          <div class="order-1 bg-slate-200 rounded-lg shadow-xl lg:w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-slate-700 text-xl">
              {" "}
              Tirocinio Associazione Dianova Onlus{" "}
            </h3>
            <p class="text-sm font-medium leading-snug tracking-wide text-slate-700 text-opacity-200">
              Comunità terapeutica per le dipendenze patologiche - Montefiore
              dell'Aso
            </p>
          </div>
        </div>

        {/* LEFT */}
        <div class="mb-8 flex justify-between lg:flex-row-reverse items-center w-full left-timeline">
          <div class="order-1 lg:w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-slate-200 shadow-xl lg:mr-0 mr-8 lg:p-0 p-3 lg:w-14 lg:h-8 rounded-full ">
            <h1 class="mx-auto font-semibold text-lg text-slate-700">2021</h1>
          </div>
          <div class="order-1 bg-slate-200 rounded-lg shadow-xl lg:w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-slate-700 text-xl">
              Educatore di assistenza scolastica e domiciliare{" "}
            </h3>
            <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-200">
              Servizio di assistenza educativa scolastica e domiciliare livello
              D1 coos Marche Onlus Soc. coop. Coos Marche
               <br />
               <br />
              <b>fino al 2024</b>
            </p>
          </div>
        </div>

        {/* RIGHT */}

        <div class="mb-8 flex justify-between items-center w-full right-timeline">
          <div class="order-1 lg:w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-slate-200 shadow-xl lg:mr-0 mr-8 lg:p-0 p-3 lg:w-14 lg:h-8 rounded-full invisible">
            <h1 class="mx-auto font-semibold text-lg text-slate-700">2020</h1>
          </div>
          <div class="order-1 bg-slate-200 rounded-lg shadow-xl lg:w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-slate-700 text-xl">
              Esame di Stato Psicologi
            </h3>
            <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-200">
              PSICOLOGO SEZ. A ( N.3161) Ordine degli Psicologi della regione
              Marche
            </p>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div class="mb-8 flex justify-between lg:flex-row-reverse items-center w-full left-timeline">
          <div class="order-1 lg:w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-slate-200 shadow-xl lg:mr-0 mr-8 lg:p-0 p-3 lg:w-14 lg:h-8 rounded-full">
            <h1 class="mx-auto font-semibold text-lg text-slate-700">2021</h1>
          </div>
          <div class="order-1 bg-slate-200 rounded-lg shadow-xl lg:w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-slate-700 text-xl">
              {" "}
              Servizio Civile presso Comunità educativa per minori "Casa di
              Mattoni"
            </h3>
            <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-200">
              Ponzano di Fermo. Progetto: " Co-esistenze libertarie"
            </p>
          </div>
        </div>

        {/* <!-- right timeline --> */}
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
          <div class="order-1 lg:w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-slate-200 shadow-xl lg:mr-0 mr-8 lg:p-0 p-3 lg:w-14 lg:h-8 rounded-full invisible">
            <h1 class="mx-auto text-slate-700 font-semibold text-lg">2020</h1>
          </div>
          <div class="order-1 bg-slate-200 rounded-lg shadow-xl lg:w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-slate-700 text-xl">
              Tirocinio post-Laurea
            </h3>
            <p class="text-sm font-medium leading-snug tracking-wide text-slate-700 text-opacity-200">
              Tutor: Maria Luce Cardelli; Psicologa e Psicoterapeuta( approccio
              etno-sistemico-narrativo) Servizi Siproimi Porto San giorgio
            </p>
            <p class="text-sm font-medium leading-snug tracking-wide text-slate-700 text-opacity-200">
              Servizi per l'immigrazione siproimi, Porto San giorgio (città)
            </p>
            
          </div>
        </div>
        {/* <!-- left timeline --> */}
        <div class="mb-8 flex justify-between lg:flex-row-reverse items-center w-full left-timeline">
          <div class="order-1 lg:w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-slate-200 shadow-xl lg:mr-0 mr-8 lg:p-0 p-3 lg:w-14 lg:h-8 rounded-full">
            <h1 class="mx-auto font-semibold text-lg text-slate-700">2020</h1>
          </div>
          <div class="order-1 bg-slate-200 rounded-lg shadow-xl lg:w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-slate-700 text-xl">
              Tirocinio post-Laurea
            </h3>
            <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-200">
              Tutor: Elena Acquarini, Ph. D. Ricercatrice confermata in
              Psicologia Clinica Università degli studi di Urbino Carlo Bo{" "}
              <br /> Partecipazione a seminari per techiche di intervento
              specifiche nelle psicoterapie, approfondimenti di ricerca in
              psicoterapia delle psicosi
            </p>
          </div>
        </div>

        {/* <!-- right timeline --> */}
        <div class="mb-8 flex justify-between items-center w-full right-timeline">
          <div class="order-1 lg:w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-slate-200 shadow-xl lg:mr-0 mr-8 lg:p-0 p-3 lg:w-14 lg:h-8 rounded-full">
            <h1 class="mx-auto text-slate-700 font-semibold text-lg">2019</h1>
          </div>
          <div class="order-1 bg-slate-200 rounded-lg shadow-xl lg:w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-slate-700 text-xl">
              Laurea Magistrale in Psicologia Clinica
            </h3>
            <p class="text-sm font-medium leading-snug tracking-wide text-slate-700 text-opacity-200">
              presso Università degli studi di Urbino Carlo Bo
            </p>
          </div>
        </div>

        {/* LEFT */}

        <div class="mb-8 flex justify-between lg:flex-row-reverse items-center w-full left-timeline">
          <div class="order-1 lg:w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-slate-200 shadow-xl lg:mr-0 mr-8 lg:p-0 p-3 lg:w-14 lg:h-8 rounded-full">
            <h1 class="mx-auto font-semibold text-lg text-slate-700">2014</h1>
          </div>
          <div class="order-1 bg-slate-200 rounded-lg shadow-xl lg:w-5/12 px-6 py-4">
            <h3 class="mb-3 font-bold text-slate-700 text-xl">
              Laurea triennale in Scienze e Tecniche psicologiche
            </h3>
            <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-200">
              presso Università degli studi di Urbino Carlo Bo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TimeLine;
