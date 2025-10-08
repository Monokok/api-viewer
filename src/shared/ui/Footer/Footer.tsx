import styles from "./Footer.module.css";
import { FaVk, FaGithub } from "react-icons/fa";
/*
  Footer ведет на различные ресурсы ссылками:
  - блок с ссылками на соцсети (каждая оформляется в виде иконки соцсети);
  - блок кнопочек с подписями, что ведут на другие страницы сайта
*/

const ICON_SIZE = 20;

interface FooterProps {

  //колонки с ссылками
  colums?: Array<string>[];
}

const SOCIALS = [
  { title: 'VK', icon: <FaVk size={ICON_SIZE} />, href: "https://vk.com" },
  { title: 'GitHub', icon: <FaGithub size={ICON_SIZE} />, href: "https://github.com/Monokok" },
];

export const Footer: React.FC<FooterProps> = ({
  colums = [],
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        {/* контент */}

        {/* {colums.map(i => <h5>{i}</h5>)} */}
      </div>
      <nav className={styles.socialLinks}>
        {/* иконки */}
        {SOCIALS.map(({title, icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              {icon} {title} 
            </a>
        ))}
      </nav>
      © 2025 Все права защищены
    </footer>
  );
};
