import { Suspense } from "react";
import { TransactionsTable } from "./components/transactions-table";

export default async function Transactions() {
  return (
    <main className="w-screen h-screen bg-stone-950">
      <div className="w-3/5 mx-auto">
        <Suspense fallback={<>loading...</>}>
          <TransactionsTable />
        </Suspense>
      </div>
    </main>
  );
}
