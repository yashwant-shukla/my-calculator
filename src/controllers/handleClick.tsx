// src/controllers/handleClick.ts

export function handleClick(
    label: string,
    value: string,
    lastIsOperator: boolean,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    setLastIsOperator: React.Dispatch<React.SetStateAction<boolean>>
) {
    if (label === 'AC') {
        setValue('0');
        setLastIsOperator(false);
        return;
    }

    if (label === '=') {
        try {
            const result = eval(value);
            setValue(String(result));
        } catch {
            setValue('Error');
        }
        setLastIsOperator(false);
        return;
    }

    const isOperator = ['+', '-', '*', '/'].includes(label);

    if (isOperator && lastIsOperator) {
        return;
    }

    if (value === '0' && !isOperator) {
        setValue(label);
    } else {
        setValue(prev => prev + label);
    }

    setLastIsOperator(isOperator);
}
