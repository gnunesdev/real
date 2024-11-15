import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { db } from "~/config/prisma";

export const TransactionsTable = async () => {
  const transactions = await db.transactions.findMany();

  return (
    <Table>
      <TableCaption>Entradas e saídas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">
              {transaction.description}
            </TableCell>
            <TableCell>{transaction.categoryId}</TableCell>
            <TableCell>{transaction.type}</TableCell>
            <TableCell className="text-right">
              {String(transaction.value)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
