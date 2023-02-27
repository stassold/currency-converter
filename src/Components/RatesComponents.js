import PropTypes from 'prop-types';
import React from 'react';
import styles from './RatesComponents.module.css'



function RatesComponents(props) {
    const { baseRate , baseCurrency } = props;
    const rate = baseRate
    let ratebase = 1
    if(rate) {
        rate['RUB'] = 1;
        ratebase = rate[baseCurrency]
    }

    return (
        <div className={styles.rates}>
            <h2>Rates: </h2>
            {baseRate && Object.entries(rate).map(([currency, rate]) => (
                <div className={styles.currency} key={currency}>
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


