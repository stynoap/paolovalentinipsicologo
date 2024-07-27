import React from "react";
import Navbar from "../Components/Navbar";
import headerbg from "../header-bg-sky-800-2.png";
import Article from "../Components/Article";

function Approccio() {
  return (
    <>
      <div
        className=" bg-cover max-h-fit"
        style={{
          backgroundImage: `url(${headerbg})`,
        }}
      >
        <div className=" bg-cover bg-bottom pb-20  ">
          <Navbar></Navbar>
        </div>
      </div>
      <main className="">
        <Article></Article>
      </main>
    </>
  );
}

export default Approccio;
