import useSavings from "../hooks/useSavings";

function Dashboard() {
  const { savingsGoal, remainingGoal } = useSavings();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <p>Savings Goal: ${savingsGoal}</p>
      <p>Remaining Goal: ${remainingGoal > 0 ? remainingGoal : 0}</p>
    </div>
  );
}

export default Dashboard;
