"use client";

import { SquareMousePointer } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { TransactionForm } from "../transaction-form";

export const Header = () => {
  const [isTransactionFormShowing, setIsTransactionFormShowing] =
    useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-b from-green-400 to-green-600 text-transparent bg-clip-text">
          Real
        </h1>
        <ul className="flex ml-12">
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li className="ml-4">
            <Link href="/transactions">Registros</Link>
          </li>
        </ul>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" size="icon">
            <SquareMousePointer className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsTransactionFormShowing(true)}>
            Adicionar transação
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {isTransactionFormShowing && <TransactionForm />}
    </header>
  );
};
