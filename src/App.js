import React, { useState } from 'react';
import './App.css';
import HeaderComponent from "./Components/UI/HeaderComponent";
import FooterComponent from "./Components/UI/FooterComponent";

function App() {
    const [baseCurrency, setBaseCurrency] = useState('USD');
  return (
    <div >
        <HeaderComponent setBaseCurrency={setBaseCurrency} baseCurrency= {baseCurrency} ></HeaderComponent>
        <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
