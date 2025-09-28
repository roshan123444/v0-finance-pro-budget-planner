"use client"

import { useSearchParams } from "next/navigation"
import { Suspense, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import Link from "next/link"
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  DollarSign,
  PieChartIcon,
  BarChart3,
} from "lucide-react"

interface BudgetData {
  income: {
    salary: number
    freelance: number
    other: number
  }
  expenses: {
    rent: number
    food: number
    travel: number
    savings: number
    investments: number
    miscellaneous: number
  }
}

function DashboardContent() {
  const searchParams = useSearchParams()
  const dataParam = searchParams.get("data")

  const budgetData: BudgetData = useMemo(() => {
    if (!dataParam) {
      return {
        income: { salary: 0, freelance: 0, other: 0 },
        expenses: { rent: 0, food: 0, travel: 0, savings: 0, investments: 0, miscellaneous: 0 },
      }
    }
    try {
      return JSON.parse(dataParam)
    } catch {
      return {
        income: { salary: 0, freelance: 0, other: 0 },
        expenses: { rent: 0, food: 0, travel: 0, savings: 0, investments: 0, miscellaneous: 0 },
      }
    }
  }, [dataParam])

  const totalIncome = Object.values(budgetData.income).reduce((sum, value) => sum + value, 0)
  const totalExpenses = Object.values(budgetData.expenses).reduce((sum, value) => sum + value, 0)
  const balance = totalIncome - totalExpenses
  const savingsPercentage = totalIncome > 0 ? ((budgetData.expenses.savings / totalIncome) * 100).toFixed(1) : "0"

  // Prepare data for pie chart (expenses breakdown)
  const expenseData = [
    { name: "Rent/Housing", value: budgetData.expenses.rent, color: "hsl(var(--chart-1))" },
    { name: "Food & Groceries", value: budgetData.expenses.food, color: "hsl(var(--chart-2))" },
    { name: "Transportation", value: budgetData.expenses.travel, color: "hsl(var(--chart-3))" },
    { name: "Savings", value: budgetData.expenses.savings, color: "hsl(var(--chart-4))" },
    { name: "Investments", value: budgetData.expenses.investments, color: "hsl(var(--chart-5))" },
    { name: "Miscellaneous", value: budgetData.expenses.miscellaneous, color: "hsl(var(--primary))" },
  ].filter((item) => item.value > 0)

  // Prepare data for bar chart (income vs expenses)
  const comparisonData = [
    {
      category: "Income",
      amount: totalIncome,
      fill: "hsl(var(--success))",
    },
    {
      category: "Expenses",
      amount: totalExpenses,
      fill: "hsl(var(--destructive))",
    },
  ]

  // Financial health assessment
  const getFinancialHealth = () => {
    if (balance > totalIncome * 0.2) {
      return { status: "excellent", message: "Excellent! You're saving over 20% of your income.", icon: CheckCircle }
    }
    if (balance > 0) {
      return { status: "good", message: "Good job! You're living within your means.", icon: TrendingUp }
    }
    return { status: "warning", message: "Warning: You're spending more than you earn.", icon: AlertTriangle }
  }

  const healthAssessment = getFinancialHealth()

  if (!dataParam || totalIncome === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">No Budget Data Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Please use the budget calculator to input your financial data first.
            </p>
            <Button asChild size="lg">
              <Link href="/calculator">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Go to Calculator
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Financial Dashboard</h1>
              <p className="text-lg text-muted-foreground">Your complete budget analysis and insights</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/calculator">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Edit Budget
              </Link>
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Income</CardTitle>
                <DollarSign className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">${totalIncome.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Monthly earnings</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                <TrendingDown className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">${totalExpenses.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Monthly spending</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Balance Left</CardTitle>
                {balance >= 0 ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                )}
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${balance >= 0 ? "text-success" : "text-destructive"}`}>
                  ${balance.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">After expenses</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
                <PieChartIcon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{savingsPercentage}%</div>
                <p className="text-xs text-muted-foreground">Of total income</p>
              </CardContent>
            </Card>
          </div>

          {/* Financial Health Status */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <healthAssessment.icon
                  className={`w-5 h-5 ${
                    healthAssessment.status === "excellent"
                      ? "text-success"
                      : healthAssessment.status === "good"
                        ? "text-primary"
                        : "text-destructive"
                  }`}
                />
                Financial Health Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p
                className={`text-lg font-medium ${
                  healthAssessment.status === "excellent"
                    ? "text-success"
                    : healthAssessment.status === "good"
                      ? "text-primary"
                      : "text-destructive"
                }`}
              >
                {healthAssessment.message}
              </p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Recommendation:</strong>{" "}
                  {healthAssessment.status === "excellent"
                    ? "Consider increasing your investment allocation to grow your wealth further."
                    : healthAssessment.status === "good"
                      ? "Try to increase your savings rate to 20% or more for better financial security."
                      : "Review your expenses and look for areas to cut back. Consider increasing your income sources."}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Expense Breakdown Pie Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChartIcon className="w-5 h-5" />
                  Expense Breakdown
                </CardTitle>
                <CardDescription>Where your money goes each month</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    rent: { label: "Rent/Housing", color: "hsl(var(--chart-1))" },
                    food: { label: "Food & Groceries", color: "hsl(var(--chart-2))" },
                    travel: { label: "Transportation", color: "hsl(var(--chart-3))" },
                    savings: { label: "Savings", color: "hsl(var(--chart-4))" },
                    investments: { label: "Investments", color: "hsl(var(--chart-5))" },
                    miscellaneous: { label: "Miscellaneous", color: "hsl(var(--primary))" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                        formatter={(value) => [`$${Number(value).toLocaleString()}`, "Amount"]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Income vs Expenses Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Income vs Expenses
                </CardTitle>
                <CardDescription>Monthly financial comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    amount: { label: "Amount", color: "hsl(var(--primary))" },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                        formatter={(value) => [`$${Number(value).toLocaleString()}`, "Amount"]}
                      />
                      <Bar dataKey="amount" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Breakdown */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Income Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Income Sources</CardTitle>
                <CardDescription>Breakdown of your monthly income</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {budgetData.income.salary > 0 && (
                  <div className="flex justify-between items-center">
                    <span>Salary/Primary Income</span>
                    <span className="font-semibold">${budgetData.income.salary.toLocaleString()}</span>
                  </div>
                )}
                {budgetData.income.freelance > 0 && (
                  <div className="flex justify-between items-center">
                    <span>Freelance/Side Income</span>
                    <span className="font-semibold">${budgetData.income.freelance.toLocaleString()}</span>
                  </div>
                )}
                {budgetData.income.other > 0 && (
                  <div className="flex justify-between items-center">
                    <span>Other Income</span>
                    <span className="font-semibold">${budgetData.income.other.toLocaleString()}</span>
                  </div>
                )}
                <div className="pt-4 border-t flex justify-between items-center">
                  <span className="font-bold">Total Income</span>
                  <span className="font-bold text-success text-lg">${totalIncome.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            {/* Expense Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Expense Categories</CardTitle>
                <CardDescription>Detailed view of your monthly expenses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(budgetData.expenses).map(([key, value]) => {
                  if (value === 0) return null
                  const labels: Record<string, string> = {
                    rent: "Rent/Housing",
                    food: "Food & Groceries",
                    travel: "Transportation",
                    savings: "Savings",
                    investments: "Investments",
                    miscellaneous: "Miscellaneous",
                  }
                  return (
                    <div key={key} className="flex justify-between items-center">
                      <span>{labels[key]}</span>
                      <span className="font-semibold">${value.toLocaleString()}</span>
                    </div>
                  )
                })}
                <div className="pt-4 border-t flex justify-between items-center">
                  <span className="font-bold">Total Expenses</span>
                  <span className="font-bold text-destructive text-lg">${totalExpenses.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background">
          <Navigation />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <p className="text-lg text-muted-foreground">Loading your financial dashboard...</p>
            </div>
          </div>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  )
}
