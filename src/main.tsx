import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App';
import { LikesProvider } from './context/LikesContext';
import './style.css';

// basename is needed because on GitHub Pages the site lives in /<repo>/, not at the root
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* Provider sits above App so likes survive page changes */}
      <LikesProvider>
        <App />
      </LikesProvider>
    </BrowserRouter>
  </StrictMode>,
);
