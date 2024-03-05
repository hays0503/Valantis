import { useEffect, useState, memo,useContext } from "react";
import useGetIds from "@hook/useGetIds";
import useGetItemsById from "@hook/useGetItemsById";
import style from "./CardList.module.css";

import { ContextApp } from "@pages/MainPages/reducer";

export default function CardList({ pages }) {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(ContextApp);

  const ListItem = ({ items }) => (
    <div className={style.cardContainer}>
      {items.map((item) => (
        <div key={item.id} className={style.Card}>
          <span>Id: {item.id}</span>
          <span>Название: {item.product}</span>
          <span>Бренд: {item.brand ? item.brand : "Отсутствует"}</span>
          <span>Цена: {item.price} Рублей</span>
        </div>
      ))}
    </div>
  );

  const FetchPage = async (url, _pages) => {
    try {
      const Ids = await useGetIds(url, _pages);

      // console.log("Ids", Ids)

      const items = await useGetItemsById(url, Ids);

      // console.log("items", items)

      return items;
    } catch (e) {
      console.log("Случилась ошибка запроса:", e.message);
      console.log("Попытка повторного запроса");
      return FetchPage("http://api.valantis.store:40000/", _pages);
    }
  };

  const GetData = () => {
    setData([]);
    FetchPage("https://api.valantis.store:41000/", pages).then((value) => {
      setData(value);
    });
  };

  //Загрузка данных при первом рендере
  useEffect(() => {
    GetData();
  }, [pages]);

  const MainComponent = () => (
    <div>
      {JSON.stringify(state)}
      <ListItem items={data} />
    </div>
  );

  const ComponentIsPending = () =>
    data.length > 0 ? <MainComponent /> : <h3>Загрузка...</h3>;

  return <ComponentIsPending />;
}
