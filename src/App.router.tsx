import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from 'react-router';
import App from './App';
import Dashboard from './pages/dashboard/Dashboard';
import Landing from './pages/landing/Landing';
import NotFound from './pages/not-found/NotFound';
import ProjectDetail from './pages/project-detail/ProjectDetail';
import { PageRoute } from './types';

export const AppRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path={PageRoute.LANDING}
      element={<App />}
      handle={{
        crumb: () => 'Home',
      }}>
      {/* Everyone */}
      <Route index element={<Landing />} />

      <Route
        path={PageRoute.DASHBOARD}
        handle={{
          crumb: () => 'Dashboard',
        }}>
        <Route index element={<Dashboard />} />
        <Route
          path={PageRoute.PROJECT_DETAIL}
          element={<ProjectDetail />}
          handle={{
            crumb: () => 'Project Detail',
          }}
        />
      </Route>

      <Route path="*" element={<NotFound />} />

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
