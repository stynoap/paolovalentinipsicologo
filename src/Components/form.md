   <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Non riempire questo campo: <input name="bot-field" />
        </label>
      </p>
      <p>
        <label>
          Nome: <input type="text" name="name" required />
        </label>
      </p>
      <p>
        <label>
          Email: <input type="email" name="email" required />
        </label>
      </p>
      <p>
        <label>
          Messaggio: <textarea name="message" required></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Invia</button>
      </p>
    </form>
  );
};