import React from 'react';
const InputField = ({ onInput }) => {

    return (
        <input type="text" className="search-field" name="search-result" onChange={(e) => onInput(e)} />
    );
}

export default InputField