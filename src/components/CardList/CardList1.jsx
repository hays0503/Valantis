import useHook from "@hook/useHook";
import FetchData from "@utils/FetchData";
import UnicalValue from "@utils/UnicalValue";

const GetData = (url, _pages) => {
  let res;
  return new Promise((resolve) => {

    // try {
      console.log(`GetData pages: ${_pages}`);

      res = FetchData(url, {
        action: "get_ids",
        params: { offset: _pages * 50, limit: 50 },
      });

      // console.log(res);

      //Получение уникальных значений из массива
      // Ids = UnicalValue(res.result);

      resolve(res);

    // } catch (e) {
    //   console.log(e);
    //   console.log("Попытка повторного запроса");
    //   GetData('http://api.valantis.store:40000/', _pages);
    // }
  }).then((res) => { console.log(res); return res.result});
};

export default function CardList({ pages }) {

  const data = useHook(GetData('http://api.valantis.store:40000/', pages));

  return <>
    <ul>
      {data.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </>

}


