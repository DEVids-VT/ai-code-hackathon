import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from 'react-router';
import App from './App';
import ProtectedRoute from './components/common/auth/protected-route/ProtectedRoute';
import Checkout from './pages/checkout/Checkout';
import CreateProject from './pages/create-project/Createproject';
import Dashboard from './pages/dashboard/Dashboard';
import Landing from './pages/landing/Landing';
import LearningPathForm from './pages/learning-path/LearningPath';
import NotFound from './pages/not-found/NotFound';
import Onboarding from './pages/onboarding/Onboarding';
import ProjectDetail from './pages/project-detail/ProjectDetail';
import { PageRoute, UserRole } from './types';

export const AppRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path={PageRoute.LANDING}
      element={<App />}
      handle={{
        crumb: () => 'Home',
      }}>
      {/* Only activated users can access these pages */}
      <Route element={<ProtectedRoute requiredRoles={[UserRole.ACTIVATED]} />}>
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
      </Route>

      <Route element={<ProtectedRoute requiredRoles={null} />}>
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
