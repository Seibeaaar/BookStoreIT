import { ThemeProvider } from 'styled-components';
import theme from './ui/theme';
import Button from './components/Button';

const App = () => (
  <ThemeProvider theme={theme}>
    <Button text="Hello" />
  </ThemeProvider>
);

export default App;
