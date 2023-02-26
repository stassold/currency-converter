import axios from 'axios';


const API_BASE_URL = `https://www.cbr-xml-daily.ru/latest.js`;

    async function convertCurrency() {
        try {
            const response = await axios.get(`${API_BASE_URL}`)

            console.log(response.data.rates)
            return response.data.rates
        } catch (error) {
            console.error(error);
        }
    }

export  { convertCurrency };
