import { ThemeProvider } from 'styled-components';
import theme from './ui/theme';
import { RouterProvider } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import CartModal from './components/CartModal';
import router from './routing';

const initialOptions = {
  clientId: 'test',
  currency: 'USD',
  intent: 'capture',
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PayPalScriptProvider options={initialOptions}>
        <ThemeProvider theme={theme}>
          <CartModal>
            <RouterProvider router={router} />
          </CartModal>
        </ThemeProvider>
      </PayPalScriptProvider>
    </PersistGate>
  </Provider>
);

export default App;
