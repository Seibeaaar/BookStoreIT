import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from 'src/components/Header';
import HomePage from 'src/pages/Home';
import Footer from 'src/components/Footer';
import NotFoundPage from 'src/pages/404';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <HomePage />,
        path: '/',
      },
      {
        element: <div>Shop</div>,
        path: '/shop',
      },
      {
        element: <div>About</div>,
        path: '/about',
      },
      {
        element: <div>Contact Us</div>,
        path: '/contact',
      },
      {
        element: <NotFoundPage />,
        path: '*',
      },
    ],
  },
]);

export default router;
