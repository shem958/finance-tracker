import { useState } from "react";

const TransactionForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("INCOME");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ amount: parseFloat(amount), category, type });
    setAmount("");
    setCategory("");
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 mb-2 w-full"
      >
        <option value="INCOME">Income</option>
        <option value="EXPENSE">Expense</option>
      </select>
      <button type="submit" className="bg-green-500 text-white p-2 w-full">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
