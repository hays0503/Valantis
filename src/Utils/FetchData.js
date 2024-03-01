import md5 from 'md5';



async function FetchData(url, param) {
    const currentDate = new Date();
    const addZero = (num) => num > 9 ? num : '0'+num.toString();
    const dayString = addZero(currentDate.getUTCDate());
    const mountString = addZero(currentDate.getUTCMonth()+ 1)
    const md5Data = `Valantis_${currentDate.getUTCFullYear()}${mountString}${dayString}`;
    const hash = md5(md5Data);
    console.log(hash);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth': hash
            },
            body: JSON.stringify(param),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error in fetch:', error);
        throw error;
    }
}

export default FetchData;
