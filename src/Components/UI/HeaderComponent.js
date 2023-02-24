import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import styles from './UI.module.css';

const { Header } = Layout;

const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'RUB'];



function HeaderComponent({ setBaseCurrency, baseCurrency }) {
    const handleCurrencyChange = ({ key }) => {
        setBaseCurrency(key);
    };

    const menuItems = currencies.map((currency) => (
        <Menu.Item key={currency}>{currency}</Menu.Item>
    ));

    const currencyMenu = <Menu onClick={handleCurrencyChange}>{menuItems}</Menu>;

    return (
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Converter</Menu.Item>
                <Menu.Item key="2">Rates</Menu.Item>
                <Menu.Item>
                    <Dropdown arrow overlay={currencyMenu} trigger={['click']}>
                        <span>Select Base Currency</span>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item className={styles.baseCurrency}>Base Currency: {baseCurrency}</Menu.Item>
            </Menu>
        </Header>
    );
}

export default HeaderComponent;