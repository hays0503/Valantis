import React, { useEffect, useRef, useState, useContext } from "react";
import { ContextApp } from "@pages/MainPages/reducer";
import useGetFields from "@hook/useGetFields";
import style from "./DoubleRange.module.css";

const _useGetFields = useGetFields();

const DoubleRange = () => {
  const RangeVisual = useRef(null);

  const MaxRange = useRef(null);
  const MinRange = useRef(null);

  const MaxValue = useRef(null);
  const MinValue = useRef(null);

  const [rangeObj, setObjRange] = useState({ min: 0, max: 0 });
  const [message, setMessage] = useState("");

  const { state, dispatch } = useContext(ContextApp);

  let rangeMin = 100;

  const setStyle = (minRange, maxRange) => {
    const left = (minRange / MinRange.current.max) * 100 + "%";

    RangeVisual.current.style.left = left;

    const right = 100 - (maxRange / MaxRange.current.max) * 100 + "%";

    RangeVisual.current.style.right = right;
  };

  const setRange = (minRange, maxRange) => {
    MinRange.current.min = minRange;
    MinRange.current.max = maxRange;
    MinRange.current.value = minRange;

    MaxRange.current.max = maxRange;
    MaxRange.current.min = minRange;
    MaxRange.current.value = maxRange;

    MinValue.current.value = minRange;
    MaxValue.current.value = maxRange;
  };

  const getRange = async (url) => {
    try {
      const price = await _useGetFields(url, "price");
      const _min = Math.min(...price);
      const _max = Math.max(...price);
      dispatch({
        type: "test_update",
        payload: {
          app: {
            ...state.app,
            price_range: { defMax: _max, defMin: _min , max:_max,min:_min},
          },
        },
      });
      setRange(_min, _max);
      setStyle(_min, _max);
      setObjRange({ min: _min, max: _max });
    } catch (e) {
      getRange("http://api.valantis.store:40000/");
    }
  };

  const ActonRange = (e) => {
    let minRange = parseInt(MinRange.current.value);
    let maxRange = parseInt(MaxRange.current.value);
    if (maxRange - minRange < rangeMin) {
      if (e.target.name === "min") {
        MinRange.current.value = maxRange - rangeMin;
      } else {
        MaxRange.current.value = minRange + rangeMin;
      }
    } else {
      MinValue.current.value = minRange;
      MaxValue.current.value = maxRange;
      dispatch({
        type: "test_update",
        payload: {
          app: {
            ...state.app,
            price_range: {...state.app.price_range, max: maxRange, min: minRange },
          },
        },
      });
    }

    setStyle(minRange, maxRange);
  };

  const ActonPrice = (e) => {
    let minPrice = MinValue.current.value;
    let maxPrice = MaxValue.current.value;

    if (maxPrice - minPrice < rangeMin) {

    } else {

      MinRange.current.value = minPrice;
      MaxRange.current.value = maxPrice;
      dispatch({
        type: "test_update",
        payload: {
          app: {
            ...state.app,
            price_range: {...state.app.price_range, max: maxPrice, min: minPrice },
          },
        },
      });
      setStyle(minPrice, maxPrice);
    }
  };

  const onBlurInput = (e) => {
    let minPrice = MinValue.current.value;
    let maxPrice = MaxValue.current.value;

    if (minPrice < rangeObj.min || minPrice > rangeObj.max) {
      MinRange.current.value = rangeObj.min;
      MinValue.current.value = rangeObj.min;
      dispatch({
        type: "test_update",
        payload: {
          app: {
            ...state.app,
            price_range: {...state.app.price_range, max: maxPrice, min: rangeObj.min },
          },
        },
      });
    }
    if (maxPrice > rangeObj.max || maxPrice < rangeObj.min) {
      MaxRange.current.value = rangeObj.max;
      MaxValue.current.value = rangeObj.max;
      dispatch({
        type: "test_update",
        payload: {
          app: {
            ...state.app,
            price_range: {...state.app.price_range, max: rangeObj.max, min: minPrice },
          },
        },
      });
    }
  };

  useEffect(() => {
    getRange("https://api.valantis.store:41000/");    
  }, []);

  return (
    <div className={style.wrapper}>
      {MaxRange && MinRange && (
        <div className={style.doubleRangeContainer}>
          <div className={style.rangeSlider}>
            <span ref={RangeVisual} className={style.rangeSelected}></span>
          </div>
          <div className={style.rangeInput}>
            <input
              type="range"
              name="min"
              ref={MinRange}
              onChange={ActonRange}
              // onMouseMove={ActonRange}
              step="1"
            />

            <input
              type="range"
              name="max"
              ref={MaxRange}
              onChange={ActonRange}
              // onMouseMove={ActonRange}
              step="1"
            />
          </div>
          <div className={style.rangePrice}>
            <label htmlFor="min">От</label>
            <input
              ref={MinValue}
              onChange={ActonPrice}
              onBlur={onBlurInput}
              placeholder={rangeObj.min}
              type="number"
              name="min"
            />
            <label htmlFor="max">До</label>
            <input
              ref={MaxValue}
              onChange={ActonPrice}
              onBlur={onBlurInput}
              placeholder={rangeObj.max}
              type="number"
              name="max"
            />
          </div>
        </div>
      )}
      {message}
    </div>
  );
};

export default DoubleRange;
