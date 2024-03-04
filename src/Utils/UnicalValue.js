const UnicalValue = (value) => {
    const Sets = new Set([...value]);
    const Unical = [...Sets.values()];
    return Unical;
}

const UnicalValueMap = (value) => {
    const Maps = new Map();
    value.forEach((item) => {
        Maps.set(item.id, item);
    });
    const Unical = [...Maps.values()];
    return Unical;
}

export {UnicalValue, UnicalValueMap};