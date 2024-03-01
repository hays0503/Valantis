import { useEffect, useState, memo } from "react";
import FetchData from "@utils/FetchData";
import UnicalValue from "@utils/UnicalValue";
import style from "./CardList.module.css";


export default function CardList({ pages }) {
  const [data, setData] = useState([]);

  const ListItem = memo(({ items }) => (
    <div className={style.cardContainer}>
      {items.map((item) => (
        <div key={item} className={style.Card}>
          <h5>{item.product}</h5>
          {item.brand && <h6>Бренд {item.brand}</h6>}
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  ));

  const FetchPage = async (url, _pages) => {
    try {
      console.log("Get_ids pages: ", _pages);
      const resIds = await FetchData(url, {
        action: "get_ids",
        params: { offset: _pages * 50, limit: 50 },
      });

      //Получение уникальных значений из массива
      const Ids = UnicalValue(resIds.result);

      // console.log("Ids: ", Ids);

      const res = await FetchData(url, {
        action: "get_items",
        params: {
          ids: Ids
        }
      });

      // console.log("res: ", res);

      const items = UnicalValue(res.result);

      return items;
    } catch (e) {
      console.log(e);
      console.log("Попытка повторного запроса");
      return FetchPage("http://api.valantis.store:40000/", _pages);
    }
  };

  const GetData = () => {
    setData([]);
    FetchPage("https://api.valantis.store:41000/", pages).then((value) => {
      console.log("+value+ = ", value);
      setData(value);
    });
  };

  //Загрузка данных при первом рендере
  useEffect(() => {
    GetData();
  }, [pages]);

  const MainComponent = () => <ListItem items={data} />;

  const ComponentIsPending = () =>
    data.length > 0 ? <MainComponent /> : "Загрузка...";

  return <ComponentIsPending />;
}
