import { UnicalValue } from "@utils/UnicalValue";
import FetchData from "@utils/FetchData";

const useGetFields = () => {
  let Maps = new Map();
  return async (url, field) => {
    const key = JSON.stringify(field);
    if (Maps.has(key)) {
      const data = Maps.get(key);
      console.log("from cache useGetFields");
      return data;
    } else {
      console.log("miss cache useGetFields");

      const resIds = await FetchData(url, {
        action: "get_fields",
        params: { field: field, offset: 0, limit: 9000 },
      });

      const UnicalData = UnicalValue(resIds.result);

      Maps.set(key, UnicalData);

      return UnicalData;
    }
  };
};

export default useGetFields;
