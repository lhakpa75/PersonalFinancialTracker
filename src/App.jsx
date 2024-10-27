// src/App.jsx
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

const Income = lazy(() => import("./components/Income"));
const Expenses = lazy(() => import("./components/Expenses"));
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Personal Finance Tracker</h1>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Income />
            <Expenses />
            <Dashboard />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
