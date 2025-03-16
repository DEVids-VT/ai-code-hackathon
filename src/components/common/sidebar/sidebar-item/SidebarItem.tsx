import { useContext } from 'react';
import { SidebarContext } from '../sidebar-logic/SidebarLogic';

interface SidebarItemProps {
  active?: boolean;
  alert?: boolean;
  onClick?: Function;
  text: string;
  icon: any;
}

function SidebarItem({ icon, text, active, alert, onClick }: SidebarItemProps) {
  const expanded = useContext(SidebarContext);

  return (
    <li
      onClick={() => onClick && onClick()}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 ' +
              'dark:from-dark-700 dark:to-dark-600 dark:text-dark-200'
            : 'hover:bg-indigo-50 dark:hover:bg-dark-800 text-gray-600 dark:text-dark-300'
        }
    `}>
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-52 ml-3' : 'w-0 h-0'
        }`}>
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 dark:bg-dark-400 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`z-50
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-[#ffe505] text-gray-800 text-sm dark:text-dark-300
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}>
          {text}
        </div>
      )}
    </li>
  );
}

export default SidebarItem;
