import { TransactionForm } from "./components/transaction-form";

export default function Home() {
  return (
    <div>
      <header></header>
      <main>
        <div className="w-full mt-8">
          <h1 className="text-center text-6xl font-bold bg-gradient-to-b from-green-400 to-yellow-300 text-transparent bg-clip-text">
            O Real
          </h1>
        </div>
        <div className="w-3/5 mx-auto">
          <TransactionForm />
        </div>
      </main>
    </div>
  );
}
