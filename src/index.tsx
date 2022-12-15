import { createRoot } from 'react-dom/client';
import './assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf';
import './index.css';

import App from './App';
import { ToastProvider } from './components';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ToastProvider>
        <App />
    </ToastProvider>
);
