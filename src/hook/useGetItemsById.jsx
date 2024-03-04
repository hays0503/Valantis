import {UnicalValueMap} from "@utils/UnicalValue";
import FetchData from "@utils/FetchData";

const useGetItemsById = async (url,Ids) => {

    const res = await FetchData(url, {
        action: "get_items",
        params: {
          ids: Ids
        }
      });

    return UnicalValueMap(res.result);
}

export default useGetItemsById;