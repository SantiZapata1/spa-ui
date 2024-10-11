
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface Section {
  id: string;
  title: string;
}

interface MenuLateralProps {
  sections: Section[];
}

const MenuLateral: React.FC<MenuLateralProps> = ({ sections }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="hidden md:block relative group">
      {!menuVisible && (
        <div className="header h-screen w-full p-4 bg-gray-100 bg-opacity-0 flex flex-col" onMouseEnter={() => setMenuVisible(true)}>
          <Bars3Icon className="w-6 h-6 text-white" />
        </div>
      )}
      {menuVisible && (
        <aside className="header w-64 p-4 bg-gray-100 bg-opacity-50 h-screen flex flex-col" onMouseLeave={() => setMenuVisible(false)}>
          <ul className="space-y-4 mt-6">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="block p-3 text-gray-900 hover:bg-gray-200 hover:text-green-700 rounded-lg">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
};

export default MenuLateral;
