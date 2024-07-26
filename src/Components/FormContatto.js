function FormContatto() {
  const handleFormSubmission = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Rimuovi Content-Type se usi FormData
    // Rimuovi anche l'azione per evitare doppio invio da parte del browser
    await fetch("/", {
      method: "POST",
      body: new URLSearchParams(formData).toString(),
    })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => console.error("Error submitting form:", error));
  };

  return (
    <>
      <form
        name="contact"
        onSubmit={handleFormSubmission}
        // Rimuovi data-netlify="true" se usi fetch
        className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10"
        // action="/" // Rimuovi action se usi fetch
      >
        <input type="hidden" name="form-name" value="contact"></input>

        <div className="text-3xl mb-6 text-center">Contattami</div>

        <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
          <p className="col-span-2 lg:col-span-1">
            <input
              type="text"
              className="border-solid border-sky-600 border-2 p-3 md:text-xl w-full"
              placeholder="Nome"
              name="Nome"
              id="Nome"
              required
            />
          </p>

          <p className="col-span-2 lg:col-span-1">
            <input
              type="text"
              className="border-solid border-sky-600 border-2 p-3 md:text-xl w-full"
              placeholder="Il tuo indirizzo email"
              name="indirizzo-email"
              id="email"
              required
            />
          </p>

          <p className="col-span-2">
            <textarea
              cols="30"
              rows="8"
              className="border-solid border-sky-600 border-2 p-3 md:text-xl w-full"
              placeholder="Il tuo messaggio"
              name="testo-del-messaggio"
              id="message"
              required
            ></textarea>
          </p>

          <div className="col-span-2 text-right">
            <button
              type="submit"
              className="py-3 px-6 bg-sky-800 text-white font-bold w-full sm:w-32"
            >
              Invia
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormContatto;
