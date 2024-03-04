import React, { useEffect, useState } from "react";
import style from "./CheckBoxFilter.module.css";
import useGetFields from "@hook/useGetFields";

const CheckBoxFilter = ({ Header }) => {
    
    const [providers, setProviders] = useState([]);

    const toggleProvider = (event, provider) => {
        console.log("event = ",event);
        console.log("provider = ",provider);
    };

    const GetProviders = async (url) => {
        try {
            setProviders(await useGetFields(url,"brand"));

        } catch (e) {
            console.log("Случилась ошибка запроса:", e.message);
            console.log("Попытка повторного запроса");
            return GetProviders("http://api.valantis.store:40000/");
        }
    }


    useEffect(() => {
        GetProviders("https://api.valantis.store:41000/");
    },[]);

    return (
        <>
            {
                providers.map((provider) => {
                    return (
                        <label key={provider} className={style.checkboxAsButton}>
                            <input
                                type="checkbox"
                                onChange={(event) => toggleProvider(event, provider)}
                                className={style.checkboxAsButtonInput}
                            />
                            <span className={`${style.providers} ${style.checkboxAsButtonLabel}`}>
                                {provider}
                            </span>
                        </label>
                    );
                })
            }
        </>
    )
};

export default CheckBoxFilter;