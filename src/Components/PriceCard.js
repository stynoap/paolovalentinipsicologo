function PriceCard({servizio, prezzo}){
    return(
        <>
        <div className=" mt-20 flex flex-col px-24 bg-sky-50 leading-7 bg-opacity-35 max-w-96 tracking-wider h-60 gap-16 uppercase items-center justify-center shadow-md shadow-slate-300">
          <p className="text-3xl font-semibold text-slate-800">{servizio}</p>
          <p className="text-5xl font-semibold text-slate-800">{prezzo}€</p>
        </div>
        </>
    )
}

export default PriceCard;