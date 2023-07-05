import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import Header from 'src/components/Header';
import HomePage from 'src/pages/Home';
import Footer from 'src/components/Footer';
import NotFoundPage from 'src/pages/404';
import ShopPage from 'src/pages/Shop';
import BookPage from 'src/pages/Book';
import BlogPage from 'src/pages/Blog';
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
        element: <BlogPage />,
        path: '/blog',
      },
      {
        element: <div>Contact Us</div>,
        path: '/contact',
      },
      {
        element: <BookPage />,
        path: '/books/:id',
      },
      {
        element: <NotFoundPage />,
        path: '*',
      },
    ],
  },
]);

export default router;
