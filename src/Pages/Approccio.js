import React from "react";
import Navbar from "../Components/Navbar";
import ApproccioTerapeutico from "../Components/Sezioni/ApproccioTerapeutico";
import Contatti from "../Components/Contatti";

function Approccio() {
  return (
    <>
      <Navbar />
      <main className="">
        <ApproccioTerapeutico />
        <Contatti />
      </main>
    </>
  );
}

export default Approccio;
