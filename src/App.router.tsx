import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from 'react-router';
import App from './App';
import Checkout from './pages/checkout/Checkout';
import Dashboard from './pages/dashboard/Dashboard';
import Landing from './pages/landing/Landing';
import NotFound from './pages/not-found/NotFound';
import Onboarding from './pages/onboarding/Onboarding';
import ProjectDetail from './pages/project-detail/ProjectDetail';
import { PageRoute } from './types';
import CreateProject from './pages/create-project/Createproject';
import LearningPathForm from './pages/learning-path/LearningPath';

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
        path={PageRoute.CREATE_PROJECT}
        element={<CreateProject />}
        handle={{
          crumb: () => 'Create Project',
        }}
      />
      <Route
        path={PageRoute.LEARNING_PATH}
        element={<LearningPathForm />}
        handle={{
          crumb: () => 'Learning Path',
        }}
      />
      <Route
        path={PageRoute.CHECKOUT}
        element={<Checkout />}
        handle={{
          crumb: () => 'Checkout',
        }}
      />

      <Route
        path={PageRoute.ONBOARDING}
        element={<Onboarding />}
        handle={{
          crumb: () => 'Dashboard',
        }}
      />

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
