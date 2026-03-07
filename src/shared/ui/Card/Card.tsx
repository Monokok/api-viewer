import styles from "./Card.module.css";
import { Button } from "../Button/Button";

interface CardProps {
  header: string;
  description: string;
  buttonText: string;
  callback: () => void;
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({
  header,
  description,
  buttonText,
  callback,
  imageUrl,
}) => {
  return (
     <div className={styles.card}>
      <img 
        src={imageUrl} 
        alt={header} 
        className={styles.image}
      />
      
      <div className={styles.textBlock}>
        <h3 className={styles.header}>{header}</h3>
      
        <p className={styles.description}>{description}</p>
        
        <div className={styles.buttonWrapper}>
          <Button 
            buttonText={buttonText} 
            callback={callback} 
          />
        </div>
      </div>
      
    </div>
  );
};

export default Card;
