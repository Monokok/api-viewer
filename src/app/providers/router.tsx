import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage';
import { ApiViewerPage } from '../../pages/ApiViewerPage/ApiViewerPage';

export function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/api-viewer' element={<ApiViewerPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}