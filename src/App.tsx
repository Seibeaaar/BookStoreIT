import { ThemeProvider } from 'styled-components';
import theme from './ui/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routing';

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
