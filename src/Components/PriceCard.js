function PriceCard({servizio, prezzo}){
    return(
        <>
        <div className="rounded-2xl mt-20 flex flex-col px-24 bg-white leading-7 bg-opacity-40 max-w-96 tracking-wider h-60 gap-8 uppercase items-center justify-center shadow-md shadow-slate-300">
          <p className="text-2xl font-semibold text-slate-800">{servizio}</p>
          <p className="text-5xl font-semibold text-slate-800">{prezzo}€</p>
        </div>
        </>
    )
}

export default PriceCard;