import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({ pages, setPages }) => {
  return (
    <div className={style.mainPagesButton}>
      <button
        className={style.Buttom}
        onClick={() => {
          if (pages === 0) return;
          setPages(pages - 1);
        }}
      >
        Назад
      </button>
      <span> {`Страница: ${pages + 1}`}</span>
      <button className={style.Buttom} onClick={() => setPages(pages + 1)}>
        Вперед
      </button>
    </div>
  );
};

export default Pagination;
