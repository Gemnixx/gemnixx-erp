import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { navigation } from "../../constants/navigation";

const Sidebar = () => {
  return (
    <aside className="w-72 h-screen bg-slate-900 text-white border-r border-slate-800">

      <div className="p-6 border-b border-slate-800">
        <Logo />
      </div>

      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800 text-slate-300"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;