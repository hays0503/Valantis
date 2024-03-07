import React, {  useContext } from "react";
import { ContextApp } from "@pages/MainPages/reducer";
import Magnifier from '@img/magnifier.svg';
import style from './Search.module.css';

const Search = () => {
  const {state, dispatch} = useContext(ContextApp);

  const Filter = (event) => {
    dispatch({
      type: 'test_update',
      payload: {
        app: {
          ...state.app,
          search: event.target.value
        }
      }
    });
  }

  return (
    <div className={style.FilterContainerSearch}>
      <input onChange={Filter}/>
      <img className={style.FilterBurger} src={Magnifier} />
    </div>
  );
};

export default Search;