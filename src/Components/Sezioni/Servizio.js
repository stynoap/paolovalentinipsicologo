function Servizio({ title, description, image, href = false }) {
  return (
    <>
      <article class="  bg-slate-50 rounded-3xl  bg-opacity-40 flex flex-wrap lg:flex-row mb-4 md:flex-nowrap shadow-lg mx-auto max-w-xl min-w-96">
        <div class="  p-10 my-auto ">
          <div className="flex justify-center w-full">
            <div
              className=" w-6/12 h-28 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          </div>

          <div>
            <a href={href}>
              <h1 class="text-2xl font-semibold text-slate-700">{title}</h1>
            </a>

            <p class="text-base text-slate-500 mt-2">{description}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Servizio;
