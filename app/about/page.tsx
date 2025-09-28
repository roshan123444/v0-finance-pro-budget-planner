import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import {
  Target,
  Users,
  Shield,
  Zap,
  Heart,
  ArrowRight,
  CheckCircle,
  Calculator,
  PieChart,
  TrendingUp,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              About <span className="text-primary">FinancePro</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              We believe everyone deserves access to professional-grade financial planning tools. Our mission is to make
              budgeting simple, insightful, and accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Financial literacy shouldn't be a privilege. FinancePro Budget Planner was created to democratize
                  access to professional financial planning tools, making them available to students, young
                  professionals, and anyone looking to take control of their financial future.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We combine intuitive design with powerful analytics to help you understand your money, make informed
                  decisions, and build lasting financial habits.
                </p>
                <Button asChild size="lg">
                  <Link href="/calculator">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Target className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Goal-Oriented</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Every feature is designed to help you achieve your financial goals faster.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Users className="w-8 h-8 text-accent mb-2" />
                    <CardTitle className="text-lg">User-Centric</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Built with real user feedback from students and professionals.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Shield className="w-8 h-8 text-success mb-2" />
                    <CardTitle className="text-lg">Privacy First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Your financial data never leaves your browser.</p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Zap className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Lightning Fast</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Instant calculations and real-time insights.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose FinancePro?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover what makes our budget planner different from the rest
              </p>
            </div>

            <div className="space-y-16">
              {/* Feature 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Intelligent Calculator</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our smart calculator doesn't just add and subtract. It provides real-time insights, calculates
                    savings percentages, and gives you a complete financial overview as you type.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-muted-foreground">Real-time balance calculations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-muted-foreground">Automatic savings percentage tracking</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-muted-foreground">Category-based expense organization</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
                  <div className="bg-card rounded-lg p-6 shadow-lg">
                    <h4 className="font-semibold mb-4">Monthly Budget Summary</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Income</span>
                        <span className="font-semibold text-success">$5,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Expenses</span>
                        <span className="font-semibold text-destructive">$3,800</span>
                      </div>
                      <div className="flex justify-between border-t pt-3">
                        <span className="font-semibold">Balance Left</span>
                        <span className="font-bold text-success">$1,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Savings Rate</span>
                        <span className="font-bold text-primary">24%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 bg-gradient-to-br from-accent/5 to-success/5 rounded-2xl p-8">
                  <div className="bg-card rounded-lg p-6 shadow-lg">
                    <h4 className="font-semibold mb-4">Expense Breakdown</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Housing</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-chart-1 rounded-full" />
                          </div>
                          <span className="text-sm font-medium">40%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Food</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="w-1/2 h-full bg-chart-2 rounded-full" />
                          </div>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Transport</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="w-1/4 h-full bg-chart-3 rounded-full" />
                          </div>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <PieChart className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Visual Analytics</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Transform your numbers into beautiful, easy-to-understand charts and graphs. Spot spending patterns,
                    identify opportunities, and track your progress over time.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-muted-foreground">Interactive pie charts for expense breakdown</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-muted-foreground">Bar charts comparing income vs expenses</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-muted-foreground">Financial health indicators</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-success" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Smart Insights</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Get personalized recommendations based on your spending patterns. Our intelligent system analyzes
                    your budget and provides actionable advice to improve your financial health.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-muted-foreground">Financial health assessment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-muted-foreground">Personalized saving recommendations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-muted-foreground">Budget optimization tips</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-success/5 to-primary/5 rounded-2xl p-8">
                  <div className="bg-card rounded-lg p-6 shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <h4 className="font-semibold text-success">Excellent Financial Health!</h4>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      You're saving over 20% of your income. Consider increasing your investment allocation to grow your
                      wealth further.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Emergency Fund</span>
                        <span className="text-success">✓ 6 months covered</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Debt-to-Income</span>
                        <span className="text-success">✓ Under 30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Savings Rate</span>
                        <span className="text-success">✓ Above 20%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Built with Care</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Every feature is thoughtfully designed with your financial wellbeing in mind
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Privacy & Security</h3>
                <p className="text-muted-foreground">
                  Your financial data is processed locally in your browser. We never store or transmit your personal
                  information.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Made with Love</h3>
                <p className="text-muted-foreground">
                  Created by people who understand the challenges of managing personal finances in today's world.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Community Driven</h3>
                <p className="text-muted-foreground">
                  Continuously improved based on feedback from our community of users who are serious about their
                  finances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Take Control?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who have transformed their financial lives with FinancePro Budget Planner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/calculator">
                  Start Budgeting Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
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
