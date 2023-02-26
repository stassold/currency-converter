import PropTypes from 'prop-types';
import React from 'react';



function RatesComponents(props) {
    const { baseRate , baseCurrency } = props;
    const rate = baseRate
    if(rate)
        rate['RUB'] = 1;
    const ratebase = rate[baseCurrency]
    return (
        <div>
            <h2>Rates: </h2>
            {baseRate && Object.entries(rate).map(([currency, rate]) => (
                <div key={currency}>
                    <span>{currency}: </span>
                    <span>{Number((1/rate) * ratebase ).toFixed(4)} {baseCurrency}</span>
                </div>
            ))}
        </div>
    );
}

RatesComponents.propTypes = {
    baseRate: PropTypes.object.isRequired,
    baseCurrency: PropTypes.string.isRequired
};


export default RatesComponents;


