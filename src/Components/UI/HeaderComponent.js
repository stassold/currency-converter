import { Layout, Menu, Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UI.module.css'

const { Header } = Layout;


const currencies = ['RUB', 'USD', 'JPY', 'AUD', 'AZN', 'GBP', 'AMD', 'BYN', 'BGN',
    'BRL', 'HUF', 'VND', 'HKD', 'GEL', 'DKK', 'AED', 'EUR', 'EGP', 'INR', 'IDR', 'KZT', 'CAD', 'QAR', 'KGS', 'CNY', 'MDL', 'NZD', 'NOK',
    'PLN', 'RON', 'XDR', 'SGD', 'TJS', 'THB', 'TRY', 'TMT', 'UZS', 'UAH',
    'CZK', 'SEK', 'CHF', 'RSD', 'ZAR', 'KRW',
];

function HeaderComponent({ setBaseCurrency, baseCurrency }) {
    const handleCurrencyChange = (value) => {
        setBaseCurrency(value);
    };

    const options = currencies.map(currency => (
        <Select key={currency} value={currency}>{currency}</Select>
    ))

    return (
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to="/">Converter</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/rates">Rates</Link></Menu.Item>
                <Menu.Item disabled={true}>
                    <Select showSearch="true" style={{ width: 100 }} value={baseCurrency} onChange={handleCurrencyChange}>
                        {options}
                    </Select>
                </Menu.Item>
                <Menu.Item disabled={true} className={styles.baseCurrency}>Base Currency: {baseCurrency}</Menu.Item>
            </Menu>
        </Header>
    );
}

HeaderComponent.propTypes = {
    setBaseCurrency: PropTypes.func.isRequired,
    baseCurrency: PropTypes.string.isRequired,
};

export default HeaderComponent;
