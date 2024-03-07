import { UnicalValue } from "@utils/UnicalValue";
import FetchData from "@utils/FetchData";

const useGetIds = () => {
  let Maps = new Map();
  return async (url, pages) => {
    const key = JSON.stringify(pages);

    if (Maps.has(key)) {
      const data = Maps.get(key);
      console.log("from cache useGetIds");
      return data;
    } else {
      console.log("miss cache useGetIds");
      const resIds = await FetchData(url, {
        action: "get_ids",
        params: { offset: pages * 50, limit: 50 },
      });

      const UnicalData = UnicalValue(resIds.result);

      Maps.set(key, UnicalData);

      return UnicalData;
    }
  };
};

export default useGetIds;
