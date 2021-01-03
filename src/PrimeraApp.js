//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

//FC
const PrimeraApp = ({ saludo, subtitlo }) => {

    return (
        <>
            <h1>{ saludo }</h1>
            { /*<pre> { JSON.stringify(saludo, null, 3)} </pre> */}
            <p>{ subtitlo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitlo: "Soy un subtitulo"
}

export default PrimeraApp; 