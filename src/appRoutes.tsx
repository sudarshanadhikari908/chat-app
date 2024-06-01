// src/appRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    );
};

export default AppRoutes;