import { Suspense, useEffect, useState, lazy } from "react";
import Pagination from "@components/Pagination/Pagination";
import Filter from "@components/Filter/Filter";
import Loading from "@components/Loading/Loading";
import style from "./MainPages.module.css";

const CardList = lazy(() => import("@components/CardList/CardList"));

export default function MainPages() {

  const [pages, setPages] = useState(0);

  return (
    <>
      
      <div className={style.mainPagesContainer}>        
        <Filter />
        <Pagination pages={pages} setPages={setPages}/>
        <Suspense fallback={<Loading />}>
          <CardList className={style.mainPagesListCart} pages={pages} />
        </Suspense>
      </div>
    </>
  );
};

