import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { ArrowRight, Calculator, PieChart, TrendingUp, Shield, Users, Smartphone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <TrendingUp className="w-4 h-4 mr-2" />
              Smart Financial Planning Made Simple
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Take Control of Your <span className="text-primary">Financial Future</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Professional budget planning tool designed for students and professionals. Track income, manage expenses,
              and achieve your financial goals with intelligent insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/calculator">
                  Start Budgeting
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Everything You Need to Budget Smart</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and insights to help you make informed financial decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Calculator</CardTitle>
                <CardDescription>
                  Input your income and expenses with our intuitive calculator that automatically computes your
                  financial balance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <PieChart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Visual Analytics</CardTitle>
                <CardDescription>
                  Interactive charts and graphs that show your spending patterns and help identify areas for improvement
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <CardTitle>Savings Insights</CardTitle>
                <CardDescription>
                  Track your savings percentage and get personalized recommendations to optimize your financial health
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>
                  Your financial data stays private and secure. All calculations are performed locally in your browser
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>For Everyone</CardTitle>
                <CardDescription>
                  Perfect for students managing allowances or professionals planning their monthly budgets
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-success" />
                </div>
                <CardTitle>Mobile Friendly</CardTitle>
                <CardDescription>
                  Access your budget planner anywhere, anytime. Fully responsive design that works on all devices
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Financial Life?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who have taken control of their finances with FinancePro Budget Planner
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/calculator">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FP</span>
              </div>
              <span className="font-bold text-xl text-foreground">FinancePro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 FinancePro Budget Planner. Built for smarter financial decisions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
