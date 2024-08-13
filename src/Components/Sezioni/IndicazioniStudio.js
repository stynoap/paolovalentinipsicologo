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
        <div className="mx-4 mt-16 leading-7 bg-opacity-35s lg:text-xl font-medium flex flex-col lg:justify-center my-7 lg:mx-32 text-right pr-8  lg:w-[30%]  lg:bg-white rounded-full py-24">
          <p className="w-fit py-2 ">
            Lo studio Legàmi si trova Via Italia, 32, 63813 Monte Urano, in
            provincia di Fermo (FM){" "}
          </p>
        </div>
      </div>
    </div>
 
    </>
  );
}

export default IndicazioniStudio;
