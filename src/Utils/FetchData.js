import md5 from 'md5';

function FetchData(url,param) {
    const currentDate = new Date();
    const month = currentDate.getUTCMonth() + 1;
    const md5Data = `Valantis_${currentDate.getUTCFullYear()}${month>9?month:'0'+month.toString()}${currentDate.getUTCDate()}`
    console.log(md5Data);
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth':md5(md5Data)
            },
            body: JSON.stringify(param),
        })
            .then((response) => response.json())
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                console.log('Error in fetch :', error);
                reject(error);
            });
    });
}

export default FetchData;
