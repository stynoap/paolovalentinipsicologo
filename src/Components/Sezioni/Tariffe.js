import PriceCard from "../PriceCard";
import TitleSection from "../TitleSection";

function Tariffe() {
  return (
    <>
      <div id="tariffe" className="mt-24 mb-8 ">
      <TitleSection text="Tariffario" />
      <div className="flex flex-col lg:flex-row min-w-60 items-center lg:flex-wrap lg:gap-7 justify-center">
        <PriceCard servizio="Colloquio psicologico individuale" prezzo="40" />
        <PriceCard servizio="Colloquio psicologico di coppia" prezzo="60" />
      </div>
      </div>
     
    </>
  );
}

export default Tariffe;
