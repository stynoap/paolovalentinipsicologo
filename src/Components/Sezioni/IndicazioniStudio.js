import MapComponent from "../MapComponent";

function IndicazioniStudio() {
  return (
    <>
      <div id="indicazioni-stradali" className="flex lg:px-16 items-center flex-col lg:flex-row w-full justify-center pt-16 bg-slate-200 text-slate-600 lg:pb-7 rounded-xl ">
        <MapComponent />
        <div className="mx-4 mt-16 leading-7 bg-opacity-35s lg:text-xl font-medium flex flex-col lg:justify-center my-7 lg:mx-32 text-right pr-8  lg:w-[30%]">
          <p className="w-fit py-2 ">
            Lo studio Legami si trova Via Italia, 32, 63813 Monte Urano, in
            provincia di Fermo (FM){" "}
          </p>
          {/* <p className="w-fit">
            L'edificio si trova al termine della strada provinciale direzione Fermo
          </p> */}
        </div>
      </div>
    </>
  );
}

export default IndicazioniStudio;
