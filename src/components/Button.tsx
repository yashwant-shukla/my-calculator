import type { ButtonProps } from "../props/ButtonProps";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={() => onClick(label)}>{label}</button>
    );
};

export default Button;
