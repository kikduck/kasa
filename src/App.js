import Home from './pages/home/home';
import NotFound from './pages/notfound/notfound';
import About from './pages/about/about';
import Housing from './pages/housing/housing';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
    path: "/housing",
    element: <Housing />
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;