// Use React Query to fetch transactions

import { useQuery } from "@tanstack/react-query";

const fetchTransactions = async () => {
  const res = await fetch("/api/transactions");
  return res.json();
};

const Dashboard = () => {
  const { data, isLoading } = useQuery("transactions", fetchTransactions);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Transaction History</h1>
      <ul>
        {data.map((txn: any) => (
          <li key={txn.id}>
            {txn.category} - ${txn.amount} ({txn.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
