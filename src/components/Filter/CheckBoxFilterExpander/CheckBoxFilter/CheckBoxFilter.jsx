import React, { useEffect, useState,useContext } from "react";
import { ContextApp } from "@pages/MainPages/reducer";
import style from "./CheckBoxFilter.module.css";
import useGetFields from "@hook/useGetFields";

const _useGetFields = useGetFields();

const CheckBoxFilter = ({ Header }) => {
    
    const [providers, setProviders] = useState([]);

    const {state, dispatch} = useContext(ContextApp);

    const toggleProvider = (event, provider) => {

        dispatch({
            type: 'test_update',
            payload: {
                app: {
                    ...state.app,
                    providers: event.target.checked ? 
                    [...state.app.providers, provider] :
                    state.app.providers.filter((item) => item !== provider)
                
                }
            }
        });
    };

    const GetProviders = async (url) => {
        try {
            setProviders(await _useGetFields(url,"brand"));

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