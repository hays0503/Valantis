import React from "react";
import Expander from "@components/Expander/Expander";
import DoubleRange from "@components/Filter/DoubleRangeExpander/DoubleRange/DoubleRange";
import style from "./DoubleRangeExpander.module.css";

const DoubleRangeExpander = (props) => {
    const { Header } = props;
    return (
        <Expander Header={Header} className={style.doubleRangeExpander}>
            <DoubleRange />
        </Expander>
    )
};

export default DoubleRangeExpander;