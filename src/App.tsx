import { ThemeProvider } from 'styled-components';
import theme from './ui/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <div>Hello</div>
  </ThemeProvider>
);

export default App;
