import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import 'modern-normalize';
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Toaster />
  </>
);
