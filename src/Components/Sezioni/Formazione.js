import SubTitles from "../SubTitles";
import TitleSection from "../TitleSection";

function Formazione() {
  return (
    <div className="w-full" id="formazione">
     
      <div className="flex flex-col items-center mt-6 px-14 py-12 mx-auto bg-slate-50 my-8 bg-opacity-70  text-slate-700 font-medium leading-9 text-lg shadow-md rounded-lg lg:w-4/5">
        <ul className="list-disc list-inside space-y-4">
        <TitleSection text="La mia formazione" />
          <li>
            01/01/2023 Scoppito (AQ) - PSICOTERAPEUTA in formazione. 2° anno
            Corso di Specializzazione quadriennale in Psicoterapia
            Analitico-Archetipica "Atanor"
          </li>
          <li>
            SERVIZIO DI ASSISTENZA EDUCATIVA SCOLASTICA E DOMICILIARE - LIVELLO
            D1 COOS MARCHE ONLUS SOC. COOP P.A
          </li>
          <li>
            PSICOLOGO SEZ. A (N.3161) Ordine degli Psicologi della regione
            Marche 21/08/2023
          </li>
          <li>
            21/08/2023 – 30/11/2023 Montefiore dell'Aso - TIROCINIO CORSO DI
            SPECIALIZZAZIONE QUADRIENNALE IN PSICOTERAPIA ANALITICOARCHETIPICA
            ATANOR Associazione Dianova Onlus Comunità terapeutica per le
            dipendenze patologiche
          </li>
          <li>
            0/02/2020 - LAUREA MAGISTRALE IN PSICOLOGIA CLINICA Università degli
            studi di Urbino Carlo Bo
          </li>
        </ul>
        <SubTitles text="Pubblicazioni" />
        <div className="mt-4 text-slate-700">
          <p className="italic">
            Rivista semestrale di psicologia del profondo "Il Minotauro" (ISSN
            2037-4216) - N° del Giugno 2020.
          </p>
          <p className="mt-2">
            Le figure di Sisifo e del Sisifo Felice di Camus sono dei simboli
            che mi hanno consentito di riflettere sulla psicosi fuori e dentro
            il setting terapeutico e di focalizzarmi su alcune dimensioni quali:
            il dolore, l’alleanza con l’assurdo, la coazione a ripetere,
            l’elaborazione trasformativa attraverso i sogni e la figurabilità.
            Nel disturbo psicotico della simbolizzazione viene a perdersi la
            base intermedia (il simbolo) sulla quale galleggiano gli opposti,
            non c’è integrazione tra identità e differenza, simbiosi e
            separazione, inconscio e coscienza.
          </p>
          <p className="mt-4">
            TIROCINIO POST LAUREAM - Tutor: Elena Acquarini, Ph. D. Ricercatrice
            confermata in Psicologia Clinica Università degli studi di Urbino
            Carlo Bo
          </p>
        </div>
      </div>
    </div>
  );
}

export default Formazione;
