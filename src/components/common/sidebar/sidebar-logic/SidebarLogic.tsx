import { useUserCredentials } from '@/hooks/useUserCredentials';
import { PageRoute } from '@/types';
import { ChevronFirst, ChevronLast } from 'lucide-react';
import { createContext, PropsWithChildren, useState } from 'react';
import { Link } from 'react-router';
import logo from './logo.png';

export const SidebarContext = createContext<boolean>(true);

function SidebarLogic({ children }: PropsWithChildren) {
  const [expanded, setExpanded] = useState<boolean>(true);
  const { user } = useUserCredentials();

  const routeToUserProfile = PageRoute.USER_PROFILE.replace(
    ':userId',
    user.userId
  );

  return (
    <section
      className={`h-screen ${
        expanded
          ? 'absolute w-screen md:sticky md:w-80'
          : ' w-0  sm:w-auto sticky'
      }  top-0  z-40`}>
      <nav className="h-full flex flex-col justify-between bg-white dark:bg-dark-950 sm:border-r dark:border-r-dark-800 shadow-sm">
        <div className="h-full flex flex-col justify-between">
          <div
            className={
              'p-4 flex justify-between items-center ' +
              (expanded ? 'py-1' : 'py-3')
            }>
            <img
              src={logo}
              className={`overflow-hidden transition-all ${
                expanded ? 'w-32' : 'w-0'
              }`}
              alt=""
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className={`p-1.5 cursor-pointer  ${
                expanded
                  ? 'rounded-lg relative'
                  : 'rounded-r-lg absolute top-5 sm:top-auto w-9 sm:w-auto sm:relative'
              } left-0 bg-gray-50 hover:bg-gray-100 dark:bg-dark-900 dark:hover:bg-dark-950 sm:rounded-lg sm:bg-gray-50 sm:hover:bg-gray-100 dark:sm:bg-dark-900 dark:sm:hover:bg-dark-700`}>
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <div
            className={`px-3 pt-2 border-t h-full flex ${
              expanded ? 'flex' : 'hidden sm:flex'
            }  flex-col justify-between dark:border-t-dark-800`}>
            <SidebarContext.Provider value={expanded}>
              {children}
            </SidebarContext.Provider>
          </div>
          <div
            className={`border-t dark:border-t-dark-800 bg-white dark:bg-dark-950 p-3 pl-4 ${
              expanded ? 'flex' : 'hidden sm:flex'
            }`}>
            <Link to={routeToUserProfile}>
              <img
                src={user?.picture}
                alt=""
                className="w-10 h-10 rounded-md"
              />
            </Link>
            <div
              className={`
              flex justify-between items-center 
              overflow-hidden transition-all ${
                expanded ? 'w-52 ml-3' : 'w-0 h-0'
              }
          `}>
              <div className="leading-4">
                <Link className="h-fit" to={routeToUserProfile}>
                  <h4 className="font-semibold">{user.name}</h4>
                </Link>
                <span className="text-xs text-gray-600 dark:text-dark-500">
                  {user.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default SidebarLogic;
