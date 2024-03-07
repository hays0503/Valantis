import { UnicalValueMap } from "@utils/UnicalValue";
import FetchData from "@utils/FetchData";

const useGetItemsById = () => {
  let Maps = new Map();
  return async (url, Ids) => {

    const key = JSON.stringify(Ids);

    if (Maps.has(key)) {
      const data = Maps.get(key);
      console.log("from cache useGetItemsById");
      return data;
    } else {
      console.log("miss cache useGetItemsById");

      const res = await FetchData(url, {
        action: "get_items",
        params: {
          ids: Ids,
        },
      });

      const UnicalData = UnicalValueMap(res.result);

      Maps.set(key, UnicalData);

      return UnicalData;
    }
  };
};

export default useGetItemsById;
