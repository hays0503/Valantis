import style from './Filter.module.css';
import Burger from '@img/burger.svg';
import Magnifier from '@img/magnifier.svg';

const Filter = ({ value, onChange }) => {
    return <div className={style.FilterContainer}>
        <img  className={style.FilterBurger} src={Burger} />
        <div className={style.FilterContainerSearch}>
            <input/>
            <img  className={style.FilterBurger} src={Magnifier} />
        </div>
    </div>
};

export default Filter;