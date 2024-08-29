import MapComponent from "../MapComponent";
import TitleSection from "../TitleSection";

function IndicazioniStudio() {
  return (
    <>
      <div className="pt-14 flex flex-col items-center">
        <TitleSection text="come raggiungere lo studio" />
        <div
          id="indicazioni-stradali"
          className="flex lg:px-16 items-center flex-col lg:flex-row w-full justify-center pt-16 text-slate-600 lg:pb-36 rounded-xl "
        >
          <MapComponent />
          <div className="relative -top-16 lg:top-0 mx-6 lg:mt-16 leading-7 bg-opacity-35s text-sm font-medium flex flex-col lg:justify-center my-7 lg:mx-32 text-right pr-8  lg:w-[60%]  lg:bg-white rounded-full py-24">
            <p className="w-fit py-2 ">
              Lo studio Legàmi si trova Via Italia, 32, 63813 Monte Urano, in
              provincia di Fermo (FM) 
              <br/> Si consiglia di raggiungere località
              Campiglione(FM) dalla strada Fermana-Faleriense S.P 239 sia da Est
              che da Ovest, alla rotonda salire in via Giovanni Conti e
              proseguire sempre dritto anche dopo il primo incrocio, al secondo,
              svoltare tutto a sinistra verso Via Italia, strada Provinciale 62,
              raggiungere quindi via Italia, 32 Dalla strada Mezzina S.P 219,
              rotatoria per Torre San Patrizio, svoltare verso Monte Urano verso
              Via Italia 32 lungo la strada provinciale 62 per Monte Urano.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndicazioniStudio;
