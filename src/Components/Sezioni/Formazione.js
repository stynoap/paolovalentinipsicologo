import SubTitles from "../SubTitles";
import TitleSection from "../TitleSection";
import TimeLine from "./TimeLine";

function Formazione() {
  return (
    <div className="w-full" id="formazione">
      {/* <div className="flex flex-col items-center mt-6 px-14 py-12 mx-auto bg-slate-200 my-8 bg-opacity-70  text-slate-800 font-medium leading-9 text-lg shadow-md rounded-lg lg:w-full"> */}
        <TitleSection text="La mia formazione" />
        {/* <ul className="list-disc list-inside space-y-4 mt-12">
          <li>
            dal 01/01/2023- specializzando in psicoterapia. Attualmente iscritto
            al 2° anno del corso di Specializzazione quadriennale in
            Psicoterapia Analitico-Archetipica "Atanor" Scoppito (AQ)
          </li>
          <li>
            Servizio di assistenza educativa scolastica e domiciliare - livello
            D1 coos Marche Onlus Soc. Coop P.A. 2021-2024
          </li>
          <li>
            Psicologo iscritto alla sez. A (N.3161) dell'Ordine degli Psicologi
            della regione Marche dal 21/08/2023
          </li>
          <li>
            Montefiore dell'Aso - Tirocinio Associazione Dianova Onlus Comunità
            terapeutica per le dipendenze patologiche 2023-2024
          </li>
          <li>
            Tesseramento alla SISST Società italiana per lo Studio dello Stress
            Traumatico 2020 – 2021
          </li>
          <li>
            {" "}
            Comunità educativa per minori "Casa di Mattoni"; Ponzano di Fermo
            Servizio Civile. Progetto: " Co-esistenze libertarie" 20/02/2020
          </li>

          <li>
            Tirocinio post-lauream - Tutor: Elena Acquarini, Ph. D. Ricercatrice
            confermata in Psicologia Clinica Università degli studi di Urbino
            Carlo Bo
          </li>
          <li>
            TIROCINIO POST LAUREAM Tutor: Maria Luce Cardelli; Psicologa e
            Psicoterapeuta( approccio etno-sistemico-narrativo) Servizi Siproimi
            Porto San giorgio
          </li>
          <li>
            Laurea Magistrale in Psicologia Clinica - Università degli studi di
            Urbino Carlo Bo
          </li>
          <li>
            CORSO DI FORMAZIONE ALL'UTILIZZO DELLA: " COLLABORATIVE INTERACTION
            SCALE REVISED "(CIS-R) Università degli studi di Urbino Carlo Bo.
            Prof. Antonello Colli e Dott.ssa Valeria Condino TIROCINIO FORMATIVO
            DI 250 ORE "Gruppo famiglia, comunità residenziale per la salute"
            2014
          </li>
          <li>
            Laurea triennale in Scienze e Tecniche psicologiche presso
            Università degli studi di Urbino Carlo Bo
          </li>
        </ul> */}
        <TimeLine />
        <SubTitles text="Pubblicazioni" />
        <div className="mt-4 text-slate-700">
          <p className="italic">
            Rivista semestrale di psicologia del profondo "Il Minotauro" (ISSN
            2037-4216) - N° del Giugno 2020.
          </p>
          <p className="mt-4 text-sm pb-7 tracking-widest leading-8 bg-slate-50 px-3 py-3 rounded-xl bg-opacity-70 shadow-lg">
            Le figure di <b>Sisifo</b> e del <b>Sisifo Felice</b> di{" "}
            <b>Camus</b> sono dei simboli che mi hanno consentito di riflettere
            sulla psicosi fuori e dentro il setting terapeutico e di
            focalizzarmi su alcune dimensioni quali: il dolore, l’alleanza con
            l’assurdo, la coazione a ripetere, l’elaborazione trasformativa
            attraverso i sogni e la figurabilità. Nel disturbo psicotico della
            simbolizzazione viene a perdersi la base intermedia (il simbolo)
            sulla quale galleggiano gli opposti, non c’è integrazione tra
            identità e differenza, simbiosi e separazione, inconscio e
            coscienza.
          </p>
          <p className="mt-4"></p>
        </div>
      </div>
    // </div>
  );
}

export default Formazione;
