export default function Navbar({ activeTab, setActiveTab, menuItems }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-purple/40 pb-4 pt-4">
      <nav className="flex flex-wrap items-center gap-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded transition-all cursor-pointer ${
              activeTab === item.id
                ? 'bg-turquoise text-slate-950 shadow-[2px_2px_0px_0px_rgba(247,37,133,1)] scale-105'
                : 'bg-purple/20 text-turquoise hover:bg-purple/40 border border-purple/40'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}