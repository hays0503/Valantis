import md5 from 'md5';

function GenerateAuth() {
    const currentDate = new Date();
    const addZero = (num) => num > 9 ? num : '0' + num.toString();
    const dayString = addZero(currentDate.getUTCDate());
    const mountString = addZero(currentDate.getUTCMonth() + 1);
    const md5Data = `Valantis_${currentDate.getUTCFullYear()}${mountString}${dayString}`;
    const hash = md5(md5Data);
    return hash;
}

export default GenerateAuth;