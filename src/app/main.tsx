
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import { darkTheme } from './theme.ts';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App />)

