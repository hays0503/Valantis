import GenerateAuth from './Auth';


async function FetchData(url, param) {
    const hash = GenerateAuth();
    // console.log(hash);

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
         throw error;
     }
}

export default FetchData;

