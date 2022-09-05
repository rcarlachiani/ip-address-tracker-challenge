const API_KEY = 'e9f7444edb404f10b681a75c7cb8c037'
const API_URL = 'https://api.ipgeolocation.io/ipgeo?apiKey='

async function getData(IP) {
    let enteredIP = IP

    if (enteredIP !== undefined) {
        let response = await fetch(API_URL + API_KEY + '&ip=' + enteredIP);
        let data = await response.json()
        return data
    } else {
        let response = await fetch(API_URL + API_KEY);
        let data = await response.json()
        return data
    }
} 

export default getData;
