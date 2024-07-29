function SecondaryButton({ text, onclick = false, href = false }) {
  return (
    <>
      <button
        onClick={onclick}
        className="px-5 mt-3 py-4 bg-slate-600 text-slate-50 rounded-xl text-xl font-semibold hover:text-slate-600 hover:bg-slate-50 mb-10"
      >
        <a href={href}>{text}</a>
      </button>
    </>
  );
}

export default SecondaryButton;
