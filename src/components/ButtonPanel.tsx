import React from 'react';
import Button from "./Button";
import type { ButtonPanelProps } from '../props/ButtonPanelProps';

const buttonRows = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
];

const ButtonPanel: React.FC<ButtonPanelProps> = ({ onButtonClick }) => {
    return (
        <div className="button-panel" style={{
            display: 'grid',
            gridTemplateRows: 'repeat(5, 1fr)',
            gap: '1px',
            backgroundColor: '#858694',
            padding: '1px',
            width: '100%',
            maxWidth: '400px'
        }}>
            {buttonRows.map((row, rowIndex) => (
                <div key={rowIndex} style={{
                    display: 'grid',
                    gridTemplateColumns: rowIndex === 4 ? '2fr 1fr 1fr' : 'repeat(4, 1fr)',
                    gap: '1px'
                }}>
                    {row.map((label) => (
                        <Button key={label} label={label} onClick={() => onButtonClick(label)} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ButtonPanel;

