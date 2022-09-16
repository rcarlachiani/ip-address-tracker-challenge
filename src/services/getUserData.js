const API_KEY = 'at_7LaVfEHVtqKMDRzJCkixPjSkHDzgv'
const API_URL = 'https://geo.ipify.org/api/v2/country,city,vpn?apiKey='

async function getData(IP) {
    let enteredIP = IP

    if (enteredIP !== undefined) {
        let response = await fetch(API_URL + API_KEY + '&ipAddress=' + enteredIP);
        let data = await response.json()
        return data
    } else {
        let response = await fetch(API_URL + API_KEY);
        let data = await response.json()
        return data
    }
} 

export default getData;
