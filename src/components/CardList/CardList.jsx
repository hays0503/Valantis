import { useEffect, useState, memo, useContext } from "react";
import useGetFilter from "@hook/useGetFilter";
import useGetIds from "@hook/useGetIds";
import useGetItemsById from "@hook/useGetItemsById";
import style from "./CardList.module.css";

import { ContextApp } from "@pages/MainPages/reducer";
import { UnicalValue } from "../../utils/UnicalValue";

const _useGetFilter = useGetFilter();
const _useGetIds = useGetIds();
const _useGetItemsById = useGetItemsById();

export default function CardList({ pages }) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const { state, dispatch } = useContext(ContextApp);

  const isHaveProviders = () => state.app.providers.length > 0;
  const isHavePriceRange = () => {
    const R = state.app.price_range;
    return R.min !== R.defMin || R.max !== R.defMax;
  };
  const isHaveSearch = () => state.app.search !== "";

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
      let Items = [];
      //Если выбранны фильты исполтзуем их для запроса

      if (isHaveProviders()) {
        const PromiceArr = state.app.providers.map((provider) => {
          return _useGetFilter(url, {
            brand: provider,
          });
        });

        await Promise.all(PromiceArr)
          .then((value) => {
            let Ids = [];
            value.forEach((item) => {
              Ids.push(...item);
            });

            Ids = UnicalValue(Ids);

            return _useGetItemsById(url, Ids);
          })
          .then((value) => {
            value.forEach((item) => {
              Items.push(item);
            });

            if (isHaveSearch()) {
              const search = state.app.search;
              const filterBySearch = Items.filter((item) => {
                if (item.product.toLowerCase().includes(search.toLowerCase())) {
                  return item;
                }
              });
              Items = filterBySearch;
            }

            //Пагинация
            let start = pages * 50;
            if (start > Items.length) {
              setIsPending(false);
            }
            console.log("Общее количество товаров: ", Items.length);
            const end = start + 50 > Items.length ? Items.length : start + 50;
            let temp = [];

            while (start < end) {
              temp.push(Items[start]);
              start++;
            }

            console.log("Товары ", temp);

            return temp;
          });
      }

      if (isHaveSearch()) {
        const Ids = await _useGetFilter(url, {
          product: state.app.search,
        });

        console.log("++++++++Ids ", Ids);

        const value = await _useGetItemsById(url, Ids);

        value.forEach((item) => {
          Items.push(item);
        });

        const search = state.app.search;
        const filterBySearch = Items.filter((item) => {
          if (item.product.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        });

        Items = filterBySearch;

        //Пагинация
        let start = pages * 50;
        if (start > Items.length) {
          setIsPending(false);
        }
        console.log("Общее количество товаров: ", Items.length);
        const end = start + 50 > Items.length ? Items.length : start + 50;
        let temp = [];

        while (start < end) {
          temp.push(Items[start]);
          start++;
        }

        console.log("Товары ", temp);

        return temp;
      };

      const Ids = await _useGetIds(url, _pages);
      Items = await _useGetItemsById(url, Ids);

      console.log("Товары ", Items);

      return Items;
    } catch (e) {
      console.log("Случилась ошибка запроса:", e.message);
      console.log("Попытка повторного запроса");
      return FetchPage("http://api.valantis.store:40000/", _pages);
    }
  };

  const GetData = () => {
    setIsPending(true);
    setData([]);
    FetchPage("https://api.valantis.store:41000/", pages).then((value) => {
      //////////////////////////////////////////////////////////

      if (isHavePriceRange()) {
        const rangeMinMax = state.app.price_range;
        //Фильтруем по цене (диапазон цен) rangeMinMax.min rangeMinMax.max
        const filterByPriceRange = value.filter((item) => {
          if (item.price >= rangeMinMax.min && item.price <= rangeMinMax.max) {
            return item;
          }
        });
        //////////////////////////////////////////////////////////
        if (filterByPriceRange.length > 0) {
          setData(filterByPriceRange);
        }

        setIsPending(false);
      }
      //////////////////////////////////////////////////////////
      else {
        setData(value);
        setIsPending(false);
      }
    });
  };

  //Загрузка данных при первом рендере
  useEffect(() => {
    GetData();
  }, [pages, state.app.providers, state.app.price_range, state.app.search]);

  const MainComponent = () => (
    <div>
      {JSON.stringify(state)}
      <ListItem items={data} />
    </div>
  );

  const ComponentIsPending = () =>
    data.length > 0 ? (
      <MainComponent />
    ) : isPending ? (
      <h3>Загрузка...</h3>
    ) : (
      <h3>Нет данных по заданным критериям</h3>
    );

  return <ComponentIsPending />;
}
