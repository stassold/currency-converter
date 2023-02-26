import { Input, Button } from 'antd';
import PropTypes from "prop-types";
import React, { useState } from 'react';
import styles from './ConverterComponent.module.css'



function ConverterComponent({baseRate}) {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const handleConvert = async () => {
        const matches = inputValue.match(/^(\d+(?:\.\d+)?)\s*(\w+)\s+in\s+(\w+)$/i);
        if (matches) {
            const [, amount, sourceCurrency, targetCurrency] = matches;
            const exchangeRate = baseRate
            exchangeRate['RUB'] = 1
            if (exchangeRate && exchangeRate[sourceCurrency]!=undefined && exchangeRate[targetCurrency] != undefined) {
                const convertedAmount = parseFloat(amount) * Number(1/exchangeRate[sourceCurrency]) * exchangeRate[targetCurrency] ;
                setResult(`${amount} ${sourceCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${targetCurrency.toUpperCase()}`);
            } else {
                setResult(`Unable to convert ${sourceCurrency.toUpperCase()} to ${targetCurrency.toUpperCase()}`);
            }
        } else {
            setResult('Invalid input format. Please enter a value in the format "15 USD in RUB".');
        }
    };

    return (
        <div className={styles.converter}>
            <Input
                placeholder="Enter amount and currency (e.g. 15 USD in RUB)"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="primary" onClick={handleConvert}>
                Convert
            </Button>
            {result && <div>{result}</div>}
        </div>
    );
}

ConverterComponent.propTypes = {
    baseRate: PropTypes.object.isRequired,
};


export default ConverterComponent;
