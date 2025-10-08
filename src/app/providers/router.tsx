import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { ApiViewerPage } from "../../pages/ApiViewerPage/ApiViewerPage";
import styles from './router.module.css'
import {Footer} from '../../shared/ui/Footer/Footer'

export function Router() {
  return (
    <div className={styles['route-container']}>

        
        <BrowserRouter>
        {/* Navigation bar */}
        <nav className={styles.nav}>
            <Link to="/">Главная</Link>
            <Link to="/api-viewer">API Viewer</Link>
            <Link to="/github">GitHub</Link>
            {/* <Link to="/about">О нас</Link> */}
            <div className={styles['header-auth']}>
              <Link to="/login">Вход</Link>
              <Link to="/register">Регистрация</Link>
            </div>
        </nav>

        {/*Add routes to other paths*/}
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/api-viewer" element={<ApiViewerPage />} />
        </Routes>
        </BrowserRouter>
        <Footer></Footer>
    </div>
  );
}
