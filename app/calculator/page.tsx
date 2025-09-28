"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, DollarSign, Home, Car, ShoppingCart, Plane, PiggyBank, MoreHorizontal } from "lucide-react"
import Link from "next/link"

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

export default function CalculatorPage() {
  const [budgetData, setBudgetData] = useState<BudgetData>({
    income: {
      salary: 0,
      freelance: 0,
      other: 0,
    },
    expenses: {
      rent: 0,
      food: 0,
      travel: 0,
      savings: 0,
      investments: 0,
      miscellaneous: 0,
    },
  })

  const updateIncome = (field: keyof BudgetData["income"], value: string) => {
    setBudgetData((prev) => ({
      ...prev,
      income: {
        ...prev.income,
        [field]: Number.parseFloat(value) || 0,
      },
    }))
  }

  const updateExpense = (field: keyof BudgetData["expenses"], value: string) => {
    setBudgetData((prev) => ({
      ...prev,
      expenses: {
        ...prev.expenses,
        [field]: Number.parseFloat(value) || 0,
      },
    }))
  }

  const totalIncome = Object.values(budgetData.income).reduce((sum, value) => sum + value, 0)
  const totalExpenses = Object.values(budgetData.expenses).reduce((sum, value) => sum + value, 0)
  const balance = totalIncome - totalExpenses
  const savingsPercentage = totalIncome > 0 ? ((budgetData.expenses.savings / totalIncome) * 100).toFixed(1) : "0"

  const hasData = totalIncome > 0 || totalExpenses > 0

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Budget Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter your monthly income and expenses to get a clear picture of your financial situation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Income Section */}
            <div className="lg:col-span-1">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-success">
                    <DollarSign className="w-5 h-5" />
                    Monthly Income
                  </CardTitle>
                  <CardDescription>Enter all sources of your monthly income</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="salary">Salary/Primary Income</Label>
                    <Input
                      id="salary"
                      type="number"
                      placeholder="0"
                      value={budgetData.income.salary || ""}
                      onChange={(e) => updateIncome("salary", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="freelance">Freelance/Side Income</Label>
                    <Input
                      id="freelance"
                      type="number"
                      placeholder="0"
                      value={budgetData.income.freelance || ""}
                      onChange={(e) => updateIncome("freelance", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="other-income">Other Income</Label>
                    <Input
                      id="other-income"
                      type="number"
                      placeholder="0"
                      value={budgetData.income.other || ""}
                      onChange={(e) => updateIncome("other", e.target.value)}
                    />
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Income:</span>
                      <span className="font-bold text-success text-lg">${totalIncome.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Expenses Section */}
            <div className="lg:col-span-1">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <ShoppingCart className="w-5 h-5" />
                    Monthly Expenses
                  </CardTitle>
                  <CardDescription>Track where your money goes each month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="rent" className="flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      Rent/Housing
                    </Label>
                    <Input
                      id="rent"
                      type="number"
                      placeholder="0"
                      value={budgetData.expenses.rent || ""}
                      onChange={(e) => updateExpense("rent", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="food" className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Food & Groceries
                    </Label>
                    <Input
                      id="food"
                      type="number"
                      placeholder="0"
                      value={budgetData.expenses.food || ""}
                      onChange={(e) => updateExpense("food", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="travel" className="flex items-center gap-2">
                      <Car className="w-4 h-4" />
                      Transportation
                    </Label>
                    <Input
                      id="travel"
                      type="number"
                      placeholder="0"
                      value={budgetData.expenses.travel || ""}
                      onChange={(e) => updateExpense("travel", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="savings" className="flex items-center gap-2">
                      <PiggyBank className="w-4 h-4" />
                      Savings
                    </Label>
                    <Input
                      id="savings"
                      type="number"
                      placeholder="0"
                      value={budgetData.expenses.savings || ""}
                      onChange={(e) => updateExpense("savings", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="investments" className="flex items-center gap-2">
                      <Plane className="w-4 h-4" />
                      Investments
                    </Label>
                    <Input
                      id="investments"
                      type="number"
                      placeholder="0"
                      value={budgetData.expenses.investments || ""}
                      onChange={(e) => updateExpense("investments", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="miscellaneous" className="flex items-center gap-2">
                      <MoreHorizontal className="w-4 h-4" />
                      Miscellaneous
                    </Label>
                    <Input
                      id="miscellaneous"
                      type="number"
                      placeholder="0"
                      value={budgetData.expenses.miscellaneous || ""}
                      onChange={(e) => updateExpense("miscellaneous", e.target.value)}
                    />
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Expenses:</span>
                      <span className="font-bold text-destructive text-lg">${totalExpenses.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Summary */}
            <div className="lg:col-span-1">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle>Financial Summary</CardTitle>
                  <CardDescription>Your budget overview at a glance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
                      <span className="text-sm font-medium">Total Income</span>
                      <span className="font-bold text-success">${totalIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-destructive/10 rounded-lg">
                      <span className="text-sm font-medium">Total Expenses</span>
                      <span className="font-bold text-destructive">${totalExpenses.toLocaleString()}</span>
                    </div>
                    <div
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        balance >= 0 ? "bg-success/10" : "bg-destructive/10"
                      }`}
                    >
                      <span className="text-sm font-medium">Balance Left</span>
                      <span className={`font-bold ${balance >= 0 ? "text-success" : "text-destructive"}`}>
                        ${balance.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                      <span className="text-sm font-medium">Savings Rate</span>
                      <span className="font-bold text-primary">{savingsPercentage}%</span>
                    </div>
                  </div>

                  {hasData && (
                    <div className="pt-4 border-t">
                      <Button asChild className="w-full" size="lg">
                        <Link
                          href={{
                            pathname: "/dashboard",
                            query: {
                              data: JSON.stringify(budgetData),
                            },
                          }}
                        >
                          View Detailed Analysis
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  )}

                  {!hasData && (
                    <div className="text-center py-4">
                      <p className="text-sm text-muted-foreground">
                        Enter your income and expenses to see your financial summary
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Quick Tips */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">💡 Quick Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    <strong>50/30/20 Rule:</strong> Allocate 50% for needs, 30% for wants, and 20% for savings.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Emergency Fund:</strong> Aim to save 3-6 months of expenses for unexpected situations.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Track Regularly:</strong> Review and update your budget monthly for better financial health.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
