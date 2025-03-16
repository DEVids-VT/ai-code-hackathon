import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

import { useOrigin } from '@/hooks/useOrigin';
import { useUserCredentials } from '@/hooks/useUserCredentials';
import { PageRoute } from '@/types';
import {
  FolderKanban,
  Key,
  Lightbulb,
  LogOut,
  Route,
  ScanEye,
  User,
} from 'lucide-react';
import { useNavigate } from 'react-router';
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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <SidebarLogic>
      <div className="w-full">
        <SidebarButton
          text="Create Project"
          onClick={() => navigate(PageRoute.CREATE_PROJECT)}></SidebarButton>
        <ul className={`flex-1 pt-2`}>
          <SidebarText text="Learning" />
          <SidebarItem
            icon={<Route size={20} />}
            text="Learning Path"
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
