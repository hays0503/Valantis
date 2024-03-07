import React from 'react';
import Search from '@components/Filter/Search/Search';
import style from './Filter.module.css';
import Burger from '@img/burger.svg';


const CheckBoxFilterExpander = React.lazy(() => import('@components/Filter/CheckBoxFilterExpander/CheckBoxFilterExpander'));
const DoubleRangeExpander = React.lazy(() => import('@components/Filter/DoubleRangeExpander/DoubleRangeExpander'));


const Filter = ({ value, onChange }) => {
    return (
    <div className={style.FilterContainer}>
        <div className={style.FilterHeader}>
            <img  className={style.FilterBurger} src={Burger} />

            <Search />
        </div>

        <div className={style.FilterCustom}>            
            <CheckBoxFilterExpander Header={"Производитель"}/>
            <DoubleRangeExpander Header={"Диапозон цен"} />
        </div>

    </div>)
};

export default Filter;