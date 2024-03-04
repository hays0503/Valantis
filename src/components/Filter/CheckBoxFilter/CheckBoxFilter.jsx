import React, { useState } from "react";
import Expander from "@components/Expander/Expander";
import style from "./CheckBoxFilter.module.css";



const CheckBoxFilter = ({ Header }) => {
    const providersArr = ["Provider1", "Provider2", "Provider3", "Provider4"];
    const [providers, setProviders] = useState(providersArr);

    return (
        <Expander Header={Header} className={style.checkBoxFilter}>
            {
                providersArr.map((provider) => {
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
        </Expander>
    )
};

export default CheckBoxFilter;