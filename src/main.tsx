// src/main.tsx
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 👈 importa esto
import App from './App';
import './index.css';
import LoadingScreen from './ui/LoadingScreen';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* 👈 envuelve el App con esto */}
      <Suspense fallback={<LoadingScreen />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
