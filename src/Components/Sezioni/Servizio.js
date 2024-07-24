function Servizio({ title, description }) {
    return (
      <>
        <article class="  bg-emerald-50  bg-opacity-40 flex flex-wrap lg:flex-row mb-4 md:flex-nowrap shadow-lg mx-auto max-w-xl min-w-96">
          <div class="  p-10 my-auto ">
            <h1 class="text-2xl font-semibold text-sky-700">{title}</h1>
            <p class="text-base text-sky-500 mt-2">{description}</p>
          </div>
        </article>
      </>
    );
  }
  
  export default Servizio;
  