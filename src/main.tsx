import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { AppRouter } from './App.router.tsx';
import './index.css';

createRoot(document.getElementById('app-root')!).render(
  <RouterProvider router={AppRouter} />
);
