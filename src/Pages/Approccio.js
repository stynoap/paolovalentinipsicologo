import React from "react";
import Navbar from "../Components/Navbar";
import ApproccioTerapeutico from "../Components/Sezioni/ApproccioTerapeutico";
import Article from "../Components/Article"

function Approccio() {
  return (
    <>
      <Navbar />
      <main className="">
        <ApproccioTerapeutico />
        <Article />
      </main>
    </>
  );
}

export default Approccio;
