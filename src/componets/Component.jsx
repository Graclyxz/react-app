import React, { useState } from 'react';

const Component = () => {
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        setSubmittedValue(inputValue);
    };

    return (
        <div>
            <h1>Hello, World!</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Submit</button>
            <p>Real-time Text: {inputValue}</p>
            <p>Submitted Text: {submittedValue}</p>
        </div>
    );
};

export default Component;