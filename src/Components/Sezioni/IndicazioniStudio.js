import MapComponent from "../MapComponent";

function IndicazioniStudio() {
  return (
    <>
      <div id="indicazioni-stradali" className="flex px-16 items-center flex-col lg:flex-row w-full justify-center py-16 bg-slate-50">
        <MapComponent />
        <div className=" leading-7 bg-opacity-35s lg:text-xl font-medium text-slate-700 flex flex-col justify-center my-7 mx-32 h-96  lg:w-[30%]">
          <p className="w-fit py-2 ">
            Lo studio Legami si trova Via Italia, 32, 63813 Monte Urano, in
            provincia di Fermo (FM){" "}
          </p>
          <p className="w-fit">
            L'edificio è molto bello e si trova a destra della strada x suonare
            campanello fuxia con scritta
          </p>
        </div>
      </div>
    </>
  );
}

export default IndicazioniStudio;
