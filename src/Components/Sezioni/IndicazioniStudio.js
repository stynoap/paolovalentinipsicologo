import MapComponent from "../MapComponent";

function IndicazioniStudio() {
  return (
    <>
      <div className="flex items-center flex-col lg:flex-row w-full justify-center py-16 bg-slate-50">
        <div className=" bg-sky-50 leading-7 bg-opacity-35 shadow-md lg:text-xl font-medium text-sky-700 shadow-slate-300 py-20 px-16 flex flex-col justify-center my-7 mx-32 h-96 lg:w-[30%]">
          <p className="w-fit py-2 ">
            Lo studio Legami si trova Via Italia, 32, 63813 Monte Urano, in
            provincia di Fermo (FM){" "}
          </p>
          <p className="w-fit px-8 py-2">
           L'edificio è molto bello e si trova a destra della strada x suonare campanello fuxia con scritta 
          </p>
        </div>

        <MapComponent />
      </div>
    </>
  );
}

export default IndicazioniStudio;
