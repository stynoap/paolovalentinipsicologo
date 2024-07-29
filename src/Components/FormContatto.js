import { useEffect, useState } from "react";
import SecondaryButton from "./SecondaryButton";

function FormContatto() {
  const [isEmailSend, setEmailSend]=useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Imposta un timer per nascondere il messaggio dopo 5 secondi
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // 5000 millisecondi = 5 secondi

    // Pulisce il timer quando il componente viene smontato
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        console.log("Form successfully submitted");
        setEmailSend(()=>true)

        // Redirect or show a success message
        // window.location.href = "/pages/success";
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setEmailSend(()=>false)
    }
  };

  return (
    <>
      <form
        name="contact"
        onSubmit={handleFormSubmission}
        // Rimuovi data-netlify="true" se usi fetch
        className="max-w-2xl bg-white py-10 px-5 m-auto w-full lg:rounded-xl border-gray-100 border-8"
        // action="/" // Rimuovi action se usi fetch
      >
        <input type="hidden" name="form-name" value="contact"></input>

        <div className="text-3xl mb-6 text-center">Scrivimi</div>

        <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
          <p className="col-span-2 lg:col-span-1">
            <input
              type="text"
              className="border-solid border-slate-600 border-2 p-3 md:text-xl w-full"
              placeholder="Nome"
              name="nome"
              id="nome"
              required
            />
          </p>

          <p className="col-span-2 lg:col-span-1">
            <input
              type="text"
              className="border-solid border-slate-600 border-2 p-3 md:text-xl w-full"
              placeholder="Il tuo indirizzo email"
              name="indirizzo-email"
              id="email"
              required
            />
          </p>
          <p className="col-span-2 lg:col-span-2">
            <input
              type="number"
              className="border-solid border-slate-600 border-2 p-3 md:text-xl w-full"
              placeholder="Il tuo numero di telefono"
              name="cellulare"
              id="cellulare"
              required
            />
          </p>

          <p className="col-span-2">
            <textarea
              cols="30"
              rows="8"
              className="border-solid border-slate-600 border-2 p-3 md:text-xl w-full"
              placeholder="Il tuo messaggio"
              name="testo-del-messaggio"
              id="message"
              required
            ></textarea>
          </p>

          <div className="col-span-2 text-center">
            <SecondaryButton type="submit" text="Inviami un'email"/>
            
          </div>
          {isEmailSend && isVisible && ( <p>Email inviata correttamente</p>)}
        </div>
      </form>
    </>
  );
}

export default FormContatto;
