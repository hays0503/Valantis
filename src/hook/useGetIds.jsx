import {UnicalValue} from "@utils/UnicalValue";
import FetchData from "@utils/FetchData";

const useGetIds = async (url,pages) => {

    const resIds = await FetchData(url, {
        action: "get_ids",
        params: { offset: pages * 50, limit: 50 },
    });

    return UnicalValue(resIds.result);;
}

export default useGetIds;