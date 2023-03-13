import Home from './pages/home/home';
import NotFound from './pages/notfound/notfound';
import About from './pages/about/about';
import Housing from './pages/housing/housing';
import { createBrowserRouter } from 'react-router-dom';

export default function AppRoutes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: "/housing/:id",
            element: <Housing />
        },
    ]);
    return (
        router
    );
}