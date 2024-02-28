import md5 from 'md5';

async function FetchData(url, param) {
    const currentDate = new Date();
    const month = currentDate.getUTCMonth() + 1;
    const md5Data = `Valantis_${currentDate.getUTCFullYear()}${month>9 ? month : '0'+month.toString()}${currentDate.getUTCDate()}`;
    console.log(md5Data);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth': md5(md5Data)
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
