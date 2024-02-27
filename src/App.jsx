import { useEffect, useState, useRef } from "react";
import FetchData from "./Utils/FetchData";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   FetchData({
  //     action: "get_ids",
  //     params: { offset: 0, limit: 100 },
  //   }).then((response) => {
  //     console.log(response)
  //     setData(response.result)
  //   });
  // }, []);

  useEffect(() => {
    const GetData = async (url) => {
      const res = await FetchData(
      url,
      {
        action: "get_ids",
        params: { offset: 0, limit: 100 },
      });

      const response = [...res.result];

      const Sets = new Set(response);

      const Unical = [...Sets.values()];

      console.log(`Unical.length: ${Unical.length}`);

      setData(Unical);
      
    };

    
    try {
      GetData('https://api.valantis.store:41000/');
    }
    catch(e){
      console.log(e);
      console.log("Попытка повторного запроса");
      GetData('http://api.valantis.store:40000/');  
    }

    
  }, []);

  return (
    <>
      {data.length > 0 && (
        <ul>
          {data.map((e) => {
            return <li key={e}>{e}</li>;
          })}
        </ul>
      )}
    </>
  );
}

export default App;
