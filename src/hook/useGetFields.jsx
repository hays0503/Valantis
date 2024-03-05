import {UnicalValue} from "@utils/UnicalValue";
import FetchData from "@utils/FetchData";

const useGetFields = async (url,field) => {

    const resIds = await FetchData(url, {
        action: "get_fields",
        params: {"field": field, "offset": 0, "limit": 9000},
    });

    return UnicalValue(resIds.result);;
}

export default useGetFields;