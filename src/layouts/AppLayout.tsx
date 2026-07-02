import { Outlet } from "react-router-dom";
import Sidebar from "../shared/components/layout/Sidebar";
import Navbar from "../shared/components/layout/Navbar";

const AppLayout = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-8 bg-slate-100 min-h-screen">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default AppLayout;