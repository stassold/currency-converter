import React, { useState, useEffect } from 'react';
import './App.css';
import {convertCurrency} from  './API/cbrApi'
import ConverterComponent from "./Components/ConverterComponent";
import FooterComponent from './Components/UI/FooterComponent';
import HeaderComponent from './Components/UI/HeaderComponent';



function App() {

    useEffect(() => {
       setBaseRate(convertCurrency())
    }, []);

    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [baseRate, setBaseRate] = useState(null)
    return (
        <div>
            <HeaderComponent setBaseCurrency={setBaseCurrency} baseCurrency={baseCurrency} />
            <ConverterComponent baseRate={baseRate} />
            <FooterComponent />
        </div>
    );
}

export default App;
