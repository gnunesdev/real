"use client";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  ArrowUpRight,
  Wallet,
  CreditCard,
  PiggyBank,
  TrendingUp,
  DollarSign,
} from "lucide-react";

export default function Home() {
  // Sample data for the chart
  const data = [
    { name: "Jan", Income: 4000, Expenses: 2400 },
    { name: "Feb", Income: 3000, Expenses: 1398 },
    { name: "Mar", Income: 2000, Expenses: 9800 },
    { name: "Apr", Income: 2780, Expenses: 3908 },
    { name: "May", Income: 1890, Expenses: 4800 },
    { name: "Jun", Income: 2390, Expenses: 3800 },
  ];

  // Sample data for top expenses
  const topExpenses = [
    { name: "Rent", amount: 1500, category: "Housing" },
    { name: "Car Payment", amount: 400, category: "Transportation" },
    { name: "Groceries", amount: 350, category: "Food" },
    { name: "Utilities", amount: 200, category: "Housing" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 p-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Balanço total
              </CardTitle>
              <Wallet className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,345.67</div>
              <p className="text-xs text-muted-foreground">
                +X% em comparação ao último mês
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Entradas mensais
              </CardTitle>
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$5,240.00</div>
              <p className="text-xs text-muted-foreground">
                +X% em comparação ao último mês
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Gastos mensais
              </CardTitle>
              <CreditCard className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3,890.00</div>
              <p className="text-xs text-muted-foreground">
                -X% em comparação ao último mês
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Meta de limite de gastos
              </CardTitle>
              <PiggyBank className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$10,000 / $12,000</div>
              <Progress value={80} className="mt-2" />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Entradas x Saídas</CardTitle>
              <CardDescription>
                Comparação mensal dos últimos 6 meses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  Income: {
                    label: "Income",
                    color: "hsl(var(--chart-1))",
                  },
                  Expenses: {
                    label: "Expenses",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="Income" fill="var(--color-Income)" />
                    <Bar dataKey="Expenses" fill="var(--color-Expenses)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Top Expenses</CardTitle>
              <CardDescription>
                Your most significant purchases this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topExpenses.map((expense, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{expense.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {expense.category}
                      </p>
                    </div>
                    <div className="text-sm font-medium">
                      ${expense.amount.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Budget Overview</CardTitle>
              <CardDescription>Your spending across categories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Housing</span>
                  <span>70% used</span>
                </div>
                <Progress value={70} />
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Transportation</span>
                  <span>45% used</span>
                </div>
                <Progress value={45} />
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Food</span>
                  <span>90% used</span>
                </div>
                <Progress value={90} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Financial Health Score</CardTitle>
              <CardDescription>
                Based on your spending habits and savings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-[200px]">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary">78</div>
                  <p className="text-sm text-muted-foreground mt-2">Good</p>
                </div>
              </div>
              <div className="text-center mt-4">
                <Button>
                  Improve Your Score
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
