import { Outlet } from 'react-router';
import './App.css';
import ErrorBoundary from './components/common/error-boundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  );
}

export default App;
