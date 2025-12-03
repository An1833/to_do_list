import { createRoot } from 'react-dom/client';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme.ts'; // ← изменено с darkTheme на theme
import App from './App.tsx';

const root = createRoot(document.getElementById('root')!);

root.render(
  <ThemeProvider theme={theme} defaultMode="dark">
    <CssBaseline />
    <App />
  </ThemeProvider>
);