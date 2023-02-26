import { Input, Button } from 'antd';
import React, { useState } from 'react';
import {convertCurrency} from  '../API/cbrApi'



function ConverterComponent() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const handleConvert = async () => {
        const matches = inputValue.match(/^(\d+(?:\.\d+)?)\s*(\w+)\s+in\s+(\w+)$/i);
        if (matches) {
            const [, amount, sourceCurrency, targetCurrency] = matches;
            const exchangeRate = convertCurrency()
            if (exchangeRate) {
                const convertedAmount = parseFloat(amount) * exchangeRate;
                setResult(`${amount} ${sourceCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${targetCurrency.toUpperCase()}`);
            } else {
                setResult(`Unable to convert ${sourceCurrency.toUpperCase()} to ${targetCurrency.toUpperCase()}`);
            }
        } else {
            setResult('Invalid input format. Please enter a value in the format "15 USD in RUB".');
        }
    };

    return (
        <div>
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



export default ConverterComponent;
