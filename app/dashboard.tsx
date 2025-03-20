"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart,
  CloudRain,
  DollarSign,
  Download,
  Filter,
  Home,
  LineChart,
  PieChart,
  Settings,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("30d")

  return (
    <div className="flex min-h-screen bg-[#EGE7E8] font-montserrat">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col bg-[#1E3B46] text-white md:flex">
        <div className="flex h-14 items-center border-b border-white/10 px-4">
          <h2 className="text-lg font-semibold">FOCUS Dashboard</h2>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            <Button variant="ghost" asChild className="flex w-full items-center justify-start gap-3 text-white">
              <Link href="/">
                <Home className="h-4 w-4" />
                Overview
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="flex w-full items-center justify-start gap-3 text-white/70 hover:text-white"
            >
              <Link href="/cost-analysis">
                <DollarSign className="h-4 w-4" />
                Cost Analysis
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="flex w-full items-center justify-start gap-3 text-white/70 hover:text-white"
            >
              <Link href="/cloud-services">
                <CloudRain className="h-4 w-4" />
                Cloud Services
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="flex w-full items-center justify-start gap-3 text-white/70 hover:text-white"
            >
              <Link href="/usage-patterns">
                <LineChart className="h-4 w-4" />
                Usage Patterns
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="flex w-full items-center justify-start gap-3 text-white/70 hover:text-white"
            >
              <Link href="/optimization">
                <TrendingDown className="h-4 w-4" />
                Optimization
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="flex w-full items-center justify-start gap-3 text-white/70 hover:text-white"
            >
              <Link href="/team-allocation">
                <Users className="h-4 w-4" />
                Team Allocation
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="flex w-full items-center justify-start gap-3 text-white/70 hover:text-white"
            >
              <Link href="/settings">
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </Button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 md:px-6">
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">FinOps Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
              <span className="sr-only">Download</span>
            </Button>
          </div>
        </header>

        <main className="grid gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Cloud Spend</CardTitle>
                <DollarSign className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,685.50</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-[#EA994A] flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +5.2%
                  </span>{" "}
                  vs previous period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Optimization Potential</CardTitle>
                <TrendingDown className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3,842.75</div>
                <p className="text-xs text-muted-foreground">15.6% of total spend</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Resource Utilization</CardTitle>
                <BarChart className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68.4%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +2.1%
                  </span>{" "}
                  vs previous period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Budget Adherence</CardTitle>
                <PieChart className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92.7%</div>
                <Progress value={92.7} className="h-2" />
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="cost-analysis">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="cost-analysis">Cost Analysis</TabsTrigger>
              <TabsTrigger value="usage-patterns">Usage Patterns</TabsTrigger>
              <TabsTrigger value="optimization">Optimization</TabsTrigger>
            </TabsList>
            <TabsContent value="cost-analysis" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Cost Distribution by Service</CardTitle>
                  <CardDescription>Breakdown of costs across different cloud services and providers</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Cost distribution chart would appear here</p>
                  </div>
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Cost Drivers</CardTitle>
                    <CardDescription>Services with the highest spending</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Compute Services</div>
                          <div className="font-medium">$8,245.32</div>
                        </div>
                        <Progress value={33} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Storage</div>
                          <div className="font-medium">$6,128.75</div>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Database Services</div>
                          <div className="font-medium">$4,982.10</div>
                        </div>
                        <Progress value={20} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Network</div>
                          <div className="font-medium">$3,245.68</div>
                        </div>
                        <Progress value={13} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Other Services</div>
                          <div className="font-medium">$2,083.65</div>
                        </div>
                        <Progress value={9} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Cost Trends</CardTitle>
                    <CardDescription>Monthly spending patterns over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                      <p className="text-muted-foreground">Cost trends chart would appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="usage-patterns" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Resource Usage Over Time</CardTitle>
                  <CardDescription>Patterns of resource consumption across services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Usage patterns chart would appear here</p>
                  </div>
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Peak Usage Times</CardTitle>
                    <CardDescription>When your resources are most heavily utilized</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                      <p className="text-muted-foreground">Peak usage chart would appear here</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Idle Resources</CardTitle>
                    <CardDescription>Resources with low utilization rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">VM-prod-12</div>
                          <div className="font-medium text-amber-500">12% utilized</div>
                        </div>
                        <Progress value={12} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">DB-backup-03</div>
                          <div className="font-medium text-amber-500">18% utilized</div>
                        </div>
                        <Progress value={18} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Storage-archive-05</div>
                          <div className="font-medium text-amber-500">22% utilized</div>
                        </div>
                        <Progress value={22} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">VM-test-08</div>
                          <div className="font-medium text-amber-500">25% utilized</div>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="optimization" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Optimization Recommendations</CardTitle>
                  <CardDescription>Actionable insights to reduce costs and improve efficiency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-amber-100 p-2">
                          <TrendingDown className="h-4 w-4 text-amber-600" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-medium">Right-size underutilized compute instances</h4>
                          <p className="text-sm text-muted-foreground">
                            8 instances identified with less than 20% CPU utilization over the past 30 days
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">
                              Potential savings: $1,245.60/month
                            </span>
                            <Button variant="outline" size="sm" className="ml-auto">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-amber-100 p-2">
                          <TrendingDown className="h-4 w-4 text-amber-600" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-medium">Unused elastic IPs</h4>
                          <p className="text-sm text-muted-foreground">
                            12 elastic IPs are not associated with any running instances
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">Potential savings: $876.00/month</span>
                            <Button variant="outline" size="sm" className="ml-auto">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-amber-100 p-2">
                          <TrendingDown className="h-4 w-4 text-amber-600" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-medium">Unattached storage volumes</h4>
                          <p className="text-sm text-muted-foreground">
                            5 storage volumes are not attached to any instances
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">Potential savings: $932.40/month</span>
                            <Button variant="outline" size="sm" className="ml-auto">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-amber-100 p-2">
                          <TrendingDown className="h-4 w-4 text-amber-600" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-medium">Reserved instance opportunities</h4>
                          <p className="text-sm text-muted-foreground">
                            Convert 15 on-demand instances to reserved instances based on usage patterns
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">
                              Potential savings: $2,145.80/month
                            </span>
                            <Button variant="outline" size="sm" className="ml-auto">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

function Menu(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

