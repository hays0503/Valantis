import FetchData from "@utils/FetchData";

const useGetFilter = () => {
  let Maps = new Map();
  return async (url, param) => {
    const key = JSON.stringify(param);

    if (Maps.has(key)) {
      const data = Maps.get(key);
      console.log("from cache useGetFilter");
      return data;
    } else {
      console.log("miss cache useGetFilter");

      const resIds = await FetchData(url, {
        action: "filter",
        params: param,
      });

      Maps.set(key, resIds.result);

      return resIds.result;
    }
  };
};

export default useGetFilter;
