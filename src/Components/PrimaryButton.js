

function PrimaryButton({ testo, href=false  }) {
  return (
    <>
      <button className="px-10 text-3xl tracking-wide font-medium py-3 rounded-3xl bg-slate-300 hover:bg-slate-200 text-slate-800">
      <a href={href}>{testo}</a> 
      </button>
    </>
  );
}

export default PrimaryButton;
