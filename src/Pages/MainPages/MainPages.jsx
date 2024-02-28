import { Suspense, useEffect, useState, lazy } from "react";
import CardList from "@components/CardList/CardList1";
import Loading from "@components/Loading/Loading";
import "./MainPages.module.css";

// function delayForDemo(promise) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }

// const CardList = lazy(() => import("@components/CardList/CardList"));

export default function MainPages() {

  const [pages, setPages] = useState(0);

  return (
    <>
      <div className="main-pages__container">
        <div className="main-pages__button">
          <button onClick={() => setPages(pages - 1)}>Prev</button>
          <span>{pages}</span>
          <button onClick={() => setPages(pages + 1)}>Next</button>
        </div>
        <Suspense fallback={<Loading />}>
          <CardList className=".main-pages__list-cart" pages={pages} />
        </Suspense>
      </div>
    </>
  );
};

