import React ,{Suspense} from 'react';
import Loading from '@components/Loading/Loading';
import style from './Filter.module.css';
import Burger from '@img/burger.svg';
import Magnifier from '@img/magnifier.svg';

const CheckBoxFilter = React.lazy(() => import('@components/Filter/CheckBoxFilter/CheckBoxFilter'));
const DoubleRange = React.lazy(() => import('@components/Filter/DoubleRange/DoubleRange'));


const Filter = ({ value, onChange }) => {
    return (
    <div className={style.FilterContainer}>
        <div className={style.FilterHeader}>
            <img  className={style.FilterBurger} src={Burger} />

            <div className={style.FilterContainerSearch}>
                <input/>
                <img  className={style.FilterBurger} src={Magnifier} />
            </div>
        </div>

        <div className={style.FilterCustom}>            
            <CheckBoxFilter Header={"Производитель"}/>
            <DoubleRange Header={"Диапозон цен"} />            
        </div>

    </div>)
};

export default Filter;