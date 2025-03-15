import { Outlet } from 'react-router';
import { Bounce, ToastContainer } from 'react-toastify';
import './App.css';
import Authenticate from './components/common/auth/authenticate/Authenticate';
import Breadcrumb from './components/common/breadcrumb/Breadcrumb';
import ErrorBoundary from './components/common/error-boundary/ErrorBoundary';
import LoadingSpinner from './components/common/loading-spinner/LoadingSpinner';
import QueryClientProvider from './components/common/query-client-provider/QueryClientProvider';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Authenticate>
          <QueryClientProvider>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              limit={3}
              hideProgressBar={false}
              newestOnTop
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
            <main className="w-screen text-black h-screen dark:text-dark-300 flex justify-center align-middle bg-dark-100 dark:bg-black overflow-x-hidden overflow-hidden">
              {/* <Sidebar /> */}
              <div className="flex-1 p-5 sm:p-10 relative mt-3 overflow-y-scroll">
                <Breadcrumb />
                <Outlet />
                <LoadingSpinner size={20} />
              </div>
            </main>
          </QueryClientProvider>
        </Authenticate>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
