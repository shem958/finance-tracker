import Dashboard from "../components/Dashbord";
import Navbar from "../components/Navbar";
import TransactionForm from "../components/TransactionForm";

const DashboardPage = () => {
  const handleNewTransaction = (transaction: any) => {
    fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <TransactionForm onSubmit={handleNewTransaction} />
        <Dashboard />
      </div>
    </>
  );
};

export default DashboardPage;
