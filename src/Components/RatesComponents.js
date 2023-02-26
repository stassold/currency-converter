import PropTypes from 'prop-types';
import React from 'react';



function RatesComponents(props) {
    const { baseRate } = props;
    return (
        <div>
            <h2>Rates:</h2>
            {baseRate && Object.entries(baseRate).map(([currency, rate]) => (
                <div key={currency}>
                    <span>{currency}: </span>
                    <span>{rate}</span>
                </div>
            ))}
        </div>
    );
}

RatesComponents.propTypes = {
    baseRate: PropTypes.object.isRequired,
};


export default RatesComponents;


