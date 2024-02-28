const UnicalValue = (value) => {
    const Sets = new Set([...value]);
    const Unical = [...Sets.values()];
    return Unical;
}

export default UnicalValue;