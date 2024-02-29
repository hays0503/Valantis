import { useCallback, useEffect, useState, memo } from "react";
import FetchData from "@utils/FetchData";
import UnicalValue from "@utils/UnicalValue";

export default function CardList({ pages }) {
  const [data, setData] = useState([]);

  const ListItem = memo(({ items }) => (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  ));

  const FetchPage = async (url) => {
    try {
      console.log(`GetData pages: ${pages}`);

      const res = await FetchData(url, {
        action: "get_ids",
        params: { offset: pages * 50, limit: 50 },
      });

      console.log(res);

      //Получение уникальных значений из массива
      const Ids = UnicalValue(res.result);

      return Ids;
    } catch (e) {
      console.log(e);
      console.log("Попытка повторного запроса");
      return FetchPage("http://api.valantis.store:40000/", pages);
    }
  };

  const GetData = useCallback(() => {
    FetchPage("https://api.valantis.store:41000/").then((value)=>{
      console.log("+value+ = ", value);
      setData(value);
    });
  }, [pages]);

  //Загрузка данных при первом рендере
  useEffect(() => {
    GetData();
  },[GetData]);

  return <div>{data.length > 0 && <ListItem items={data} />}</div>;
}
