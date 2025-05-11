// src/components/Calculator.tsx
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { handleClick } from '../controllers/handleClick';

const Calculator: React.FC = () => {
    const [value, setValue] = useState('0.00');
    const [lastIsOperator, setLastIsOperator] = useState(false);

    return (
        <div className="calculator" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            margin: '0',
            maxWidth: '400px',
            position: 'absolute',
            top: '0',
            left: '0',
            padding: '50px'
        }}>
            <Display value={value} />
            <ButtonPanel onButtonClick={(label) => handleClick(label, value, lastIsOperator, setValue, setLastIsOperator)} />
        </div>
    );
};

export default Calculator;