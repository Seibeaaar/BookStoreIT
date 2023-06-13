import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from 'src/components/Header';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <div>Home</div>,
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
        element: <div>Not Found</div>,
        path: '*',
      },
    ],
  },
]);

export default router;
