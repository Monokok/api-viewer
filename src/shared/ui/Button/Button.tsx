import styles from "./Button.module.css";

interface ButtonProps {
  buttonText: string; // текст на кнопке
  callback: () => void; // функция без аргументов
}

export const Button: React.FC<ButtonProps> = ({ buttonText, callback }) => {
  return (
    
      <button className={styles["button"]} onClick={callback}>
        {buttonText}
      </button>
    
  );
};
