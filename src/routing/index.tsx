import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import Header from 'src/components/Header';
import HomePage from 'src/pages/Home';
import Footer from 'src/components/Footer';
import NotFoundPage from 'src/pages/404';
import ShopPage from 'src/pages/Shop';
import { useEffect } from 'react';

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <HomePage />,
        path: '/',
      },
      {
        element: <ShopPage />,
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
