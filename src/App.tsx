import { Outlet, useLocation } from 'react-router';
import { Bounce, ToastContainer } from 'react-toastify';
import './App.css';
import Auth0Provider from './components/common/auth/auth-provider/Auth0Provider';
import Authenticate from './components/common/auth/authenticate/Authenticate';
import Breadcrumb from './components/common/breadcrumb/Breadcrumb';
import ErrorBoundary from './components/common/error-boundary/ErrorBoundary';
import QueryClientProvider from './components/common/query-client-provider/QueryClientProvider';
import Sidebar from './components/common/sidebar/Sidebar';
import { TooltipProvider } from './components/ui/tooltip';
import { OnboardingProvider } from './contexts/OnboardingContext';
import { PageRoute } from './types';

function App() {
  const location = useLocation();
  const hideSidebar =
    location.pathname === PageRoute.CHECKOUT ||
    location.pathname === PageRoute.ACTIVATION ||
    location.pathname === PageRoute.ONBOARDING;

  return (
    <ErrorBoundary>
      <Auth0Provider>
        <Authenticate>
          <QueryClientProvider>
            <TooltipProvider>
              <OnboardingProvider>
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
                {!hideSidebar ? (
                  <main className="w-screen text-black h-screen dark:text-dark-300 flex justify-center align-middle bg-dark-100 dark:bg-black overflow-x-hidden overflow-hidden">
                    <Sidebar />
                    <div className="flex-1 relative overflow-y-scroll">
                      <div className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                        <div className="h-[56px] flex">
                          <div className="flex-1 pt-4 px-4">
                            <Breadcrumb />
                          </div>
                        </div>
                      </div>
                      <div className="p-5 sm:p-10">
                        <Outlet />
                      </div>
                    </div>
                  </main>
                ) : (
                  <Outlet />
                )}
              </OnboardingProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </Authenticate>
      </Auth0Provider>
    </ErrorBoundary>
  );
}

export default App;
