import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Products from "./pages/Products";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderPage = () => {
    if (activeTab === "dashboard") return <Dashboard />;
    if (activeTab === "customers") return <Customers />;
    if (activeTab === "products") return <Products />;
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-auto">{renderPage()}</div>
      <nav className="flex justify-around p-2 bg-gray-100 shadow">
        <button onClick={() => setActiveTab("dashboard")}>🏠</button>
        <button onClick={() => setActiveTab("customers")}>👥</button>
        <button onClick={() => setActiveTab("products")}>📦</button>
      </nav>
    </div>
  );
}

export default App;