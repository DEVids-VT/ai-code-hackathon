import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from 'react-router';
import App from './App';
import Logout from './components/common/auth/logout/Logout';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import Landing from './pages/landing/Landing';
import NotFound from './pages/not-found/NotFound';
import { PageRoute } from './types';

export const AppRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path={PageRoute.LANDING}
      element={<App />}
      handle={{
        crumb: () => 'Something',
      }}>
      <Route
        path={PageRoute.LOGIN}
        handle={{
          crumb: () => 'Login',
        }}
        element={<Login />}
      />
      <Route
        path={PageRoute.REGISTER}
        handle={{
          crumb: () => 'Register',
        }}
        element={<Register />}
      />
      <Route path={PageRoute.LOGOUT} element={<Logout />} />
      <Route
        index
        element={<Landing />}
        handle={{
          crumb: () => 'Landing',
        }}
      />
      <Route
        path="*"
        handle={{
          crumb: () => 'Not Found',
        }}
        element={<NotFound />}
      />
    </Route>
  )
);
