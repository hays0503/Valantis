import React, { useEffect, useRef } from 'react';
import useGetFields from "@hook/useGetFields";
import style from './DoubleRange.module.css';

const DoubleRange = ({ min, max, onChange }) => {

    const getRange = async (url) => {
        try{
            const price = await useGetFields(url,"price");
            const min = Math.min(...price);
            const max = Math.max(...price);
            return {min,max};
        }catch(e){
            getRange("http://api.valantis.store:40000/");
        }

    }

    const RangeVisual = useRef(null);

    const MaxRange = useRef(null);
    const MinRange = useRef(null);

    const _0MaxRange = useRef(1000);
    const _0MinRange = useRef(0);


    const _1MaxRange = useRef(1000);
    const _1MinRange = useRef(0);

    const MaxValue = useRef(null);
    const MinValue = useRef(null);

    let rangeMin = 100;

    const ActonRange = (e) => {
        let minRange = parseInt(MinRange.current.value);
        let maxRange = parseInt(MaxRange.current.value);
        if (maxRange - minRange < rangeMin) {
            if (e.target.className === "min") {
                MinRange.current.value = maxRange - rangeMin;
            } else {
                MaxRange.current.value = minRange + rangeMin;
            }
        } else {
            MinValue.current.value = minRange;
            MaxValue.current.value = maxRange;
            const left = (minRange / MinRange.current.max) * 100 + "%";

            RangeVisual.current.style.left = left;

            const right = 100 - (maxRange / MaxRange.current.max) * 100 + "%";

            RangeVisual.current.style.right = right;
        }
    };

    const ActonPrice = (e) => {
        let minPrice = MinValue.current.value;
        let maxPrice = MaxValue.current.value;
        if (maxPrice - minPrice >= rangeMin && maxPrice <= MaxRange.current.max) {
            if (e.target.className === "min") {
                MinRange.current.value = minPrice;
                const left = (minPrice / MinRange.current.max) * 100 + "%";
                RangeVisual.current.style.left = left;

            } else {
                MaxRange.current.value = maxPrice;
                const right = 100 - (maxPrice / MaxRange.current.max) * 100 + "%";
                RangeVisual.current.style.right = right;
            }
        }
    }

    useEffect(() => {
        getRange("https://api.valantis.store:41000/").then((value) => {
            MaxRange.current.max = value.max;
            MinRange.current.max = value.max;
        });
    },[]);


    return (
        <div className={style.doubleRangeContainer}>
            {/* <div className={style.range}> */}
                <div className={style.rangeSlider}>
                    <span ref={RangeVisual} className={style.rangeSelected}></span>
                </div>
                <div className={style.rangeInput}>

                    <input
                        type="range"
                        className={style.min}
                        ref={MinRange}
                        onChange={ActonRange}
                        onMouseMove={ActonRange}
                        min={_0MinRange.current}
                        max={_0MaxRange.current}
                        defaultValue="300"
                        step="1"
                    />

                    <input
                        type="range"
                        className={style.max}
                        ref={MaxRange}
                        onChange={ActonRange}
                        onMouseMove={ActonRange}
                        min={_1MinRange.current}
                        max={_1MaxRange.current}
                        defaultValue="700"
                        step="1"
                    />
                </div>
                <div className={style.rangePrice}>
                    <label htmlFor="min">От</label>
                    <input ref={MinValue} onChange={ActonPrice} type="number" name="min"
                        defaultValue="300"
                    />
                    <label htmlFor="max">До</label>
                    <input ref={MaxValue} onChange={ActonPrice} type="number" name="max"
                        defaultValue="700"
                    />
                </div>
            {/* </div> */}
        </div>
    );
}

export default DoubleRange;

