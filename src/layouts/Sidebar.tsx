import Logo from "./logo";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen p-5">
      <Logo/>

      <div className="mt-10 space-y-3">

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-800">
          Dashboard
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-800">
          Inventory
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-800">
          Sales
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-800">
          Purchase
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-800">
          Reports
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;