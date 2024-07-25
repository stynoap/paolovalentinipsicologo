function PrimaryButton({ testo }) {
  return (
    <>
      <button className="px-10 text-3xl tracking-wide font-medium py-3 rounded-3xl bg-orange-300 hover:bg-slate-200 text-sky-800">
        {testo}
      </button>
    </>
  );
}

export default PrimaryButton;
