import axios from 'axios';

const API_BASE_URL = ' https://currate.ru/api';
const API_APP_ID = 'c5d3798759521f31e629029206cfee08';

async function convertCurrency(pairs) {
    try {
        const response = await axios.get(`${API_BASE_URL}/?get=rates`, {
            params: {
                pairs: pairs,
                key: API_APP_ID
            }
        });

        return response.data.data;
    } catch (error) {
        console.error(error);
    }
}

export { convertCurrency };
