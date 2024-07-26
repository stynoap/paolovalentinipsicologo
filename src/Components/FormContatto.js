function FormContatto() {
  return (
    <>
      <form
        name="contact"
        
        data-netlify="true"
        class="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10"
      >
        <input type="hidden" name="contatc" value="contact"></input>
      
        {/* <div class="text-3xl mb-6 text-center ">Contattami</div>

        <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">
          <p class="col-span-2 lg:col-span-1"> */}
            <input
              type="text"
              class="border-solid border-sky-600 border-2 p-3 md:text-xl w-full"
              placeholder="Nome"
              name="Nome"
              required
            />
          {/* </p> */}

          {/* <p class="col-span-2 lg:col-span-1"> */}
            <input
              type="text"
              class="border-solid border-sky-600 border-2 p-3 md:text-xl w-full"
              placeholder="Il tuo indirizzo email"
              name="indirizzo-email"
              required
            />
          {/* </p> */}

          {/* <p class="col-span-2"> */}
            <textarea
              cols="30"
              rows="8"
              class="border-solid border-sky-600 border-2 p-3 md:text-xl w-full"
              placeholder="Il tuo messaggio"
              name="testo-del-messaggio"
              required
            ></textarea>
          {/* </p> */}

          {/* <div class="col-span-2 text-right"> */}
            <button
              type="submit"
              class="py-3 px-6 bg-sky-800 text-white font-bold w-full sm:w-32"
            >
              Invia
            </button>
          {/* </div>
        </div> */}
      </form>
    </>
  );
}

export default FormContatto;
