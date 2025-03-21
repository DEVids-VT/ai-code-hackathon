import {
  createBrowserRouter,
  createRoutesFromChildren,
  Navigate,
  Route,
} from 'react-router';
import App from './App';
import ProtectedRoute from './components/common/auth/protected-route/ProtectedRoute';
import Activation from './pages/activation/Activation';
import Checkout from './pages/checkout/Checkout';
import CreateProject from './pages/create-project/Createproject';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/not-found/NotFound';
import Onboarding from './pages/onboarding/Onboarding';
import ProjectDetail from './pages/project-detail/ProjectDetail';
import { PageRoute, UserRole } from './types';
import GenerateLearningPath from './pages/learning-path/GenerateLearningPath';

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
        <Route index element={<Navigate to={PageRoute.DASHBOARD} />} />
        <Route
          path={PageRoute.CREATE_PROJECT}
          element={<CreateProject />}
          handle={{
            crumb: () => 'Create Project',
          }}
        />
        <Route
          path={PageRoute.LEARNING_PATH}
          element={<GenerateLearningPath />}
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
          path={PageRoute.ACTIVATION}
          element={<Activation />}
          handle={{
            crumb: () => 'Activation',
          }}
        />

        <Route
          path={PageRoute.ONBOARDING}
          element={<Onboarding />}
          handle={{
            crumb: () => 'Onboarding',
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
