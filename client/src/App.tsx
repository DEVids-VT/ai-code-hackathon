import { Outlet } from 'react-router';
import './App.css';
import Breadcrumb from './components/common/breadcrumb/Breadcrumb';
import ErrorBoundary from './components/common/error-boundary/ErrorBoundary';
import QueryClientProvider from './components/common/query-client-provider/QueryClientProvider';

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider>
        <main className="w-screen text-black h-screen dark:text-dark-300 flex justify-center align-middle bg-dark-100 dark:bg-black overflow-x-hidden overflow-hidden">
          {/* <Sidebar /> */}
          <div className="flex-1 p-5 sm:p-10 relative mt-3 overflow-y-scroll">
            <Breadcrumb />
            <Outlet />
          </div>
        </main>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
