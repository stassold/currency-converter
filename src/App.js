import React, { useState } from 'react';
import './App.css';
import FooterComponent from './Components/UI/FooterComponent';
import HeaderComponent from './Components/UI/HeaderComponent';

function App() {
    const [baseCurrency, setBaseCurrency] = useState('USD');
    return (
        <div>
            <HeaderComponent setBaseCurrency={setBaseCurrency} baseCurrency={baseCurrency} />
            <FooterComponent />
        </div>
    );
}

export default App;
