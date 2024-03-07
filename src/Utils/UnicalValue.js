const UnicalValue = (value) => {
    const Sets = new Set([...value]);
    const Unical = [...Sets.values()];
    //Убираем пустые значения
    return Unical.filter((item) => item !== null);
}

const UnicalValueMap = (value) => {
    const Maps = new Map();
    value.forEach((item) => {
        Maps.set(item.id, item);
    });
    const Unical = [...Maps.values()];
    return Unical.filter((item) => item !== null);;
}

export {UnicalValue, UnicalValueMap};