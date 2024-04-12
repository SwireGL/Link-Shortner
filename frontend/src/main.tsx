import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import theme from './theme';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
