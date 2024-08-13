import { CursorArrowRaysIcon } from '@heroicons/react/24/outline';

function Servizio({ title, description, image, onclick }) {
  const isClickable = typeof onclick === "function";

  return (
    <>
      <article
        onClick={typeof onclick === "function" ? onclick : () => {}}
        className={`bg-slate-50 rounded-3xl bg-opacity-40 flex flex-wrap lg:flex-row mb-4 md:flex-nowrap shadow-lg mx-auto max-w-xl min-w-96 ${
          isClickable ? "cursor-pointer hover:bg-emerald-50" : "cursor-default"
        }`}
      >
        <div class="  p-10 my-auto ">
          {isClickable && (
             <CursorArrowRaysIcon className="h-6 w-6 text-slate-700 ml-auto" />
          )}
          <div className="flex justify-center w-full">
            <div
              className=" w-6/12 h-28 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          </div>

          <div>
            <h1 class="text-2xl font-semibold text-slate-700">{title}</h1>

            <p class="text-base text-slate-500 mt-2">{description}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Servizio;
