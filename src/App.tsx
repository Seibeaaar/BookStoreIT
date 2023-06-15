import { ThemeProvider } from 'styled-components';
import theme from './ui/theme';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import router from './routing';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
