import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

import { useOrigin } from '@/hooks/useOrigin';
import { useToastNotification } from '@/hooks/useToastNotification';
import { useUserCredentials } from '@/hooks/useUserCredentials';
import { PageRoute } from '@/types';
import {
  FolderKanban,
  Key,
  LampDesk,
  Lightbulb,
  LogOut,
  Route,
  ScanEye,
  User,
} from 'lucide-react';
import { useNavigate } from 'react-router';
import { axiosInstance } from '../axios-interceptor/AxiosInterceptor';
import SidebarButton from './sidebar-button/SidebarButton';
import SidebarItem from './sidebar-item/SidebarItem';
import SidebarLogic from './sidebar-logic/SidebarLogic';
import SidebarText from './sidebar-text/SidebarText';
function Sidebar() {
  const origin = useOrigin();
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated } = useUserCredentials();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { emitToast } = useToastNotification();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const generatePath = async () => {
    const response = await axiosInstance.post(
      'https://hoteach.azurewebsites.net/api/GenerateLearningPlan',
      { UserId: user.userId }
    );

    if (response.status === 200) {
      console.log(response.data);
      emitToast('Learning path generated!', 'success');
      navigate(PageRoute.GENERATED_PATH, {
        state: { message: response.data },
      });
    } else {
      emitToast('Error generating learning path.', 'error');
    }
  };

  return (
    <SidebarLogic>
      <div className="w-full">
        <SidebarButton
          text="Generate Path"
          onClick={() => generatePath()}></SidebarButton>
        <ul className={`flex-1 pt-2`}>
          <SidebarText text="Learning" />
          <SidebarItem
            icon={<LampDesk size={20} />}
            text="Dashboard"
            onClick={() => navigate(PageRoute.DASHBOARD)}
          />
          <SidebarItem
            icon={<Route size={20} />}
            text="Set Preferences"
            onClick={() => navigate(PageRoute.LEARNING_PATH)}
          />
          <SidebarItem
            icon={<ScanEye size={20} />}
            text="Resource Access"
            onClick={() => navigate(PageRoute.RESOURCE_ACCESS)}
          />
        </ul>
        <ul className="flex-1 pt-2">
          <SidebarText text="Creating" />
          <SidebarItem
            icon={<FolderKanban size={20} />}
            text="Projects"
            onClick={() => navigate(PageRoute.PROJECTS)}
          />
          <SidebarItem
            icon={<Lightbulb size={20} />}
            text="Idea Generator"
            onClick={() => navigate(PageRoute.IDEA_GENERATOR)}
          />
        </ul>
      </div>
      <ul className="pt-2">
        <SidebarText text="Settings" />

        <SidebarItem
          icon={<User size={20} />}
          text="My Profile"
          onClick={() =>
            navigate(
              PageRoute.USER_PROFILE.replace(':userId', user.userId as string)
            )
          }
        />

        {!isAuthenticated ? (
          <SidebarItem
            icon={<Key size={20} />}
            text="Login"
            onClick={() => loginWithRedirect()}
          />
        ) : (
          <div className="mb-2">
            <SidebarItem
              icon={<LogOut size={20} />}
              text="Logout"
              onClick={() => logout({ logoutParams: { returnTo: origin } })}
            />
          </div>
        )}
      </ul>
    </SidebarLogic>
  );
}

export default Sidebar;
