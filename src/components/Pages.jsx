import { useState } from 'react';
import Navbar from './Navbar';
import { menuItems } from '../data/Modules';
import CRTContainer from './CRTContainer';
import BlogFilter from './BlogFilter';

export default function Pages() {
  const [activeTab, setActiveTab] = useState('blogs');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <CRTContainer>
      <div className="flex min-h-[calc(100dvh-3rem)] w-full flex-col p-2 font-mono sm:p-6">
        <main className="flex flex-1 flex-row justify-center overflow-y-auto">
            <BlogFilter/>
            <BlogFilter/>
        </main>

        <footer className="mt-auto flex flex-col gap-4 border-t border-purple/40 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <Navbar
            activeTab={activeTab}
            setActiveTab={handleTabChange}
            menuItems={menuItems}
          />
        </footer>

      </div>
    </CRTContainer>
  );
}