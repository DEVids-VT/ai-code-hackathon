import { SquarePlus } from 'lucide-react';
import { useContext } from 'react';
import { SidebarContext } from '../sidebar-logic/SidebarLogic';
interface ISidebarButtonProps {
  text: string;
  onClick?: Function;
}

export default function SidebarButton({ text, onClick }: ISidebarButtonProps) {
  const expanded = useContext(SidebarContext);

  return (
    <div
      className={`flex flex-row justify-center my-3 ${expanded ? 'px-2' : ''}`}>
      <button
        onClick={() => onClick && onClick()}
        className={`flex items-center justify-center bg-[#ffe505] cursor-pointer ${
          expanded ? 'py-3 px-4 w-full' : 'w-12 h-12'
        } rounded-lg text-gray-800 font-semibold hover:bg-[#fffb05] shadow-purple-complex transition-all duration-300 overflow-hidden`}
        style={{
          whiteSpace: expanded ? 'nowrap' : 'normal',
        }}>
        {expanded ? text : <SquarePlus size={20} />}
      </button>
    </div>
  );
}
