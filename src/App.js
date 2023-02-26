import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import {convertCurrency} from  './API/cbrApi'
import ConverterComponent from "./Components/ConverterComponent";
import RatesComponents from "./Components/RatesComponents";
import FooterComponent from './Components/UI/FooterComponent';
import HeaderComponent from './Components/UI/HeaderComponent';




function App() {

    useEffect(() => {
        convertCurrency().then((rates) => setBaseRate(rates));
    }, []);

    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [baseRate, setBaseRate] = useState(null)
    return (
        <div>
            <Router>
            <HeaderComponent setBaseCurrency={setBaseCurrency} baseCurrency={baseCurrency}  />
                <Routes>
                    <Route exact path="/" element={<ConverterComponent baseRate={baseRate} />} />
                    <Route exact path="/rates" element={<RatesComponents baseRate={baseRate} baseCurrency={baseCurrency}/>}/>
                </Routes>
            <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
