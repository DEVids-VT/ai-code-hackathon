import { useContext } from 'react';
import { SidebarContext } from '../sidebar-logic/SidebarLogic';

interface SidebarTextProps {
  text: string;
}

function SidebarText({ text }: SidebarTextProps) {
  const expanded = useContext(SidebarContext);

  return (
    <span
      className={
        'pl-3 text-sm text-gray-600 dark:text-dark-300 overflow-hidden transition-all ' +
        (!expanded ? 'hidden' : '')
      }>
      {text}
    </span>
  );
}

export default SidebarText;
