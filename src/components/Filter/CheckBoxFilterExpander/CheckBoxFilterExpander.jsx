
import CheckBoxFilter from "@components/Filter/CheckBoxFilterExpander/CheckBoxFilter/CheckBoxFilter";
import Expander from "@components/Expander/Expander";
import style from "./CheckBoxFilterExpander.module.css";

const CheckBoxFilterExpander = (props) => {
    const { Header } = props;
    return <Expander Header={Header} className={style.container}>
        <div className={style.checkBoxFilterExpander}> 
            <CheckBoxFilter Header={Header}/>
        </div>
    </Expander>
}

export default CheckBoxFilterExpander;