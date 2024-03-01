import { Suspense, useEffect, useState, lazy } from "react";
// import CardList from "@components/CardList/CardList1";
import Loading from "@components/Loading/Loading";
import style from "./MainPages.module.css";

const CardList = lazy(() => import("@components/CardList/CardList"));

export default function MainPages() {

  const [pages, setPages] = useState(0);

  return (
    <>
      <div className={style.mainPagesContainer}>
        <div className={style.mainPagesButton}>
          <button className={style.Buttom} onClick={() => setPages(pages - 1)}>Prev</button>
          <span>{pages}</span>
          <button className={style.Buttom} onClick={() => setPages(pages + 1)}>Next</button>
        </div>
        <Suspense fallback={<Loading />}>
          <CardList className={style.mainPagesListCart} pages={pages} />
        </Suspense>
      </div>
    </>
  );
};

