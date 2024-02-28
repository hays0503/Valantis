import { useEffect, useState, memo } from "react";
import FetchData from "@utils/FetchData";
import UnicalValue from "@utils/UnicalValue";
import "./MainPages.module.css";

const MainPages = () => {

  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);

  const ListItem = memo(({ item }) => <li>{item}</li>);

  const GetData = async (url,_pages) => {
    try {
      console.log(`GetData pages: ${_pages}`);

      const res = await FetchData(url, {
        action: "get_ids",
        params: { offset: _pages*50, limit: 50 },
      });

      //Получение уникальных значений из массива

      // const Ids = UnicalValue(res.result);

      // setData(Ids);

    } catch (e) {
      console.log(e);
      console.log("Попытка повторного запроса");
      GetData('http://api.valantis.store:40000/',_pages);
    }
  };

  //Загрузка данных при первом рендере
  useEffect(() => {
    GetData('https://api.valantis.store:41000/',pages);
  }, []);

  // useEffect(() => {
  //   GetData('https://api.valantis.store:41000/',pages);
  // }, [pages]);


  return (
    <div className="main-pages__container">
      <div className="main-pages__button">
        <button onClick={() => setPages(pages - 1)}>Prev</button>
        <span>{pages}</span>
        <button onClick={() => setPages(pages + 1)}>Next</button>
      </div>
      <div className="main-pages__list-cart">
        {data.length > 0 && (
          <ul>
            {data.map((item) => (
              <ListItem key={item} item={item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MainPages;
