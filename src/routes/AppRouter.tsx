import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import DashboardPage from "../features/dashboard/components/pages/DashboardPage";
import InventoryPage from "../features/inventory/pages/InventoryPage";
import ProductsPage from "../features/products/pages/ProductsPage";
import CategoriesPage from "../features/categories/pages/CategoriesPage";
import CustomersPage from "../features/customers/pages/CustomersPage";
import SalesPage from "../features/sales/pages/SalesPage";
import PurchasePage from "../features/purchase/pages/PurchasePage";
import ReportsPage from "../features/reports/pages/ReportsPage";
import SettingsPage from "../features/settings/pages/SettingsPage";
import SuppliersPage from "../features/suppliers/pages/SuppliersPage";
import LoginPage from "../features/auth/pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "inventory",
        element: <InventoryPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },
      {
        path: "suppliers",
        element: <SuppliersPage />,
      },
      {
        path: "sales",
        element: <SalesPage />,
      },
      {
        path: "purchase",
        element: <PurchasePage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);