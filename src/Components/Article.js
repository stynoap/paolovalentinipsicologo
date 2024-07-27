import React from "react";
import TitleSection from "./TitleSection";
import approccioImg from "../photo_approccio.jpg";

function Article() {
  return (
    <article className="w-11/12 mx-auto mt-5 shadow-md mb-5 shadow-slate-300 p-3 px-7 bg-emerald-50  bg-opacity-40">
      <TitleSection text={"L'approccio analitico archetipico"}></TitleSection>
      <div className="mt-6 text-left">
        <img
          src={approccioImg}
          alt="immagine alchemica"
          className="lg:float-left mr-4 mb-4 lg:w-1/5"
        />
         <b>L'approccio analitico-archetipico</b> ricalca in successione le
        elaborazioni di <b>C.G. Jung</b> e <b>James Hillman</b> e torna a dare centralità al
        cuore della psiche. Gli oggetti di studio di quella che viene chiamata
        anche <b>psicologia del profondo</b> sono i processi psichici puri che si
        esprimono tramite <b>immagini</b>, <b>pensieri</b>, <b>agiti modalità comportamentali</b> e
        <b>psicosomatiche</b>.
        <br/><br/>
        Attraverso l'individuazione dell'<b>Es</b> anche <b>Freud</b> si
        occupa di profondità psichiche ma <b>Jung</b> opera subito un distacco teorico
        che ha inizio con la riconsiderazione dell'<b>energia psichica</b>, la <b>libido</b>,
        che egli valuta e approfondisce non solo come collegata alle
        manifestazioni pulsionali ma anche agli <b>archetipi</b>, quindi è indirizzata
        a finalità creative e di realizzazione della psiche, nello specifico il
        <b>processo di individuazione</b> e il <b>Sé</b>.
        <br/><br/>
        La <b>psicologia analitica</b> si sviluppa
        in seguito come <b>psicologia archetipica</b> e assume rilevanza come
        <b>psicologia imagistica</b>. Già <b>Jung</b> aveva chiarito che la <b>psiche</b> è
        costituita da <b>immagini</b>, una successioni di immagini che derivano non da
        una riproduzione psichica dell'oggetto esterno ma come un <b>sentire</b>, un
        <b>vedere</b>, un <b>udire interiore</b> che è il risultato del processo costante
        dell'attività fantastica inconscia. Le immagini sono interne, arcaiche e
        primordiali e hanno come fonte gli archetipi.
        <br/><br/>
        Con <b>Hillman</b> il processo di
        individuazione non avrà come scopo la realizzazione del sé individuale ma
        dei singoli <b>immaginari</b>. Scompaiono le parole <b>inconscio</b> e <b>coscienza</b>, ogni
        immagine è archetipica e l'obiettivo della terapia non è più portare a
        coscienza ciò che era inconscio con la partecipazione diretta del
        soggetto e dell'Io ma rimemorare le immagini attraverso i racconti. Ogni
        trasformazione delle immagini attraverso il racconto incide sui modelli
        di comportamento, ogni immagine archetipica è parte della natura e non
        una semplice fantasia soggettiva della mente, agendo sull'immaginazione
        operiamo e partecipiamo anche alla natura dentro di noi.
      </div>
    </article>
  );
}

export default Article;
