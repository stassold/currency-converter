import axios from 'axios';

const API_BASE_URL = 'https://openexchangerates.org/api';
const API_APP_ID = '5dc14a5b6d1d400fbbcd0626c604015f';

async function getExchangeRates(baseCurrency) {
    try {
        const response = await axios.get(`${API_BASE_URL}/latest.json`, {
            params: {
                app_id: API_APP_ID,
                base: baseCurrency,
                symbols: 'EUR,GBP,JPY'
            }
        });

        return response.data.rates;
    } catch (error) {
        console.error(error);
    }
}

export { getExchangeRates };
