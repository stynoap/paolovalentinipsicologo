import PriceCard from "../PriceCard";
import TitleSection from "../TitleSection";

function Tariffe() {
  return (
    <>
      <div className="mt-24 mb-8 ">
      <TitleSection text="Tariffario" />
      <div className="flex flex-col lg:flex-row min-w-60 items-center lg:flex-wrap lg:gap-7 justify-center">
        <PriceCard servizio="Colloquio psicologico" prezzo="50" />
        <PriceCard servizio="Terapia di coppia" prezzo="60" />
        <PriceCard servizio="Orientamento" prezzo="40" />
      </div>
      </div>
     
    </>
  );
}

export default Tariffe;
