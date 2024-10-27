import Dashboard from "./components/Dashboard";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import Savings from "./components/Savings";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Personal Finance Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Income />
        <Expenses />
        <Savings />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
