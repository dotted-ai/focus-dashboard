"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  BarChart3,
  Calendar,
  ChevronDown,
  CloudRain,
  DollarSign,
  Download,
  Filter,
  Home,
  LineChart,
  Settings,
  Share2,
  Tag,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CostAnalysisPage() {
  const [timeRange, setTimeRange] = useState("30d")
  const [groupBy, setGroupBy] = useState("service")

  return (
    <div className="flex min-h-screen bg-[#EGE7E8] font-montserrat">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col bg-[#1E3B46] text-white md:flex">
        <div className="flex h-14 items-center border-b border-white/10 px-4">
          <h2 className="text-lg font-semibold">FOCUS Dashboard</h2>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            <Button
              variant="ghost"
              asChild
              className="flex w-full items-center justify-start gap-3 text-white/70 hover:text-white"
            >
              <Link href="/">
                <Home className="h-4 w-4" />
                Overview
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="flex w-full items-center justify-start gap-3 text-white bg-white/10"
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
            <h1 className="text-lg font-semibold">Cost Analysis</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Date Range</span>
            </Button>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
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
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
        </header>

        <main className="grid gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Cost</CardTitle>
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
                <CardTitle className="text-sm font-medium">Daily Average</CardTitle>
                <BarChart3 className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$822.85</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-[#EA994A] flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +3.8%
                  </span>{" "}
                  vs previous period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Forecasted Monthly</CardTitle>
                <LineChart className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$25,508.35</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-[#EA994A] flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +4.1%
                  </span>{" "}
                  vs previous month
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Cost Trends</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Daily
                  </Button>
                  <Button variant="outline" size="sm">
                    Weekly
                  </Button>
                  <Button variant="secondary" size="sm">
                    Monthly
                  </Button>
                </div>
              </div>
              <CardDescription>Historical cost trends over time with forecasted spending</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Cost trends chart would appear here</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Cost Breakdown</CardTitle>
                  <Select value={groupBy} onValueChange={setGroupBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Group by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="service">Service</SelectItem>
                      <SelectItem value="region">Region</SelectItem>
                      <SelectItem value="account">Account</SelectItem>
                      <SelectItem value="team">Team</SelectItem>
                      <SelectItem value="project">Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <CardDescription>Cost distribution by {groupBy}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Cost breakdown chart would appear here</p>
                </div>
              </CardContent>
            </Card>
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
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Cost Anomalies</CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <CardDescription>Unusual spending patterns detected in the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4 bg-amber-50">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-100 p-2">
                      <TrendingUp className="h-4 w-4 text-amber-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Compute Services Spike</h4>
                        <span className="text-sm font-medium text-amber-600">+42% increase</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Unusual increase in EC2 instance usage on June 15, 2023
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-sm font-medium text-[#EA994A]">Impact: $1,245.60</span>
                        <Button variant="outline" size="sm" className="ml-auto">
                          Investigate
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4 bg-amber-50">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-100 p-2">
                      <TrendingUp className="h-4 w-4 text-amber-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Data Transfer Costs</h4>
                        <span className="text-sm font-medium text-amber-600">+68% increase</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Unusual increase in outbound data transfer from US-East-1 region
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-sm font-medium text-[#EA994A]">Impact: $876.20</span>
                        <Button variant="outline" size="sm" className="ml-auto">
                          Investigate
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Cost Allocation Tags</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Actions <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Add New Tag</DropdownMenuItem>
                    <DropdownMenuItem>Edit Tags</DropdownMenuItem>
                    <DropdownMenuItem>Export Tag Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardDescription>Resource tagging analysis and compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tag Key</TableHead>
                    <TableHead>Resources Tagged</TableHead>
                    <TableHead>Coverage</TableHead>
                    <TableHead>Total Cost</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Tag className="mr-2 h-4 w-4 text-[#EA994A]" />
                        Environment
                      </div>
                    </TableCell>
                    <TableCell>245/280</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={87.5} className="h-2 w-16" />
                        <span>87.5%</span>
                      </div>
                    </TableCell>
                    <TableCell>$18,245.32</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Tag className="mr-2 h-4 w-4 text-[#EA994A]" />
                        Project
                      </div>
                    </TableCell>
                    <TableCell>198/280</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={70.7} className="h-2 w-16" />
                        <span>70.7%</span>
                      </div>
                    </TableCell>
                    <TableCell>$15,876.45</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Tag className="mr-2 h-4 w-4 text-[#EA994A]" />
                        Department
                      </div>
                    </TableCell>
                    <TableCell>210/280</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={75} className="h-2 w-16" />
                        <span>75%</span>
                      </div>
                    </TableCell>
                    <TableCell>$16,542.18</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Tag className="mr-2 h-4 w-4 text-[#EA994A]" />
                        Owner
                      </div>
                    </TableCell>
                    <TableCell>165/280</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={58.9} className="h-2 w-16" />
                        <span>58.9%</span>
                      </div>
                    </TableCell>
                    <TableCell>$12,987.65</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter Tags
              </Button>
              <Button variant="outline" size="sm">
                View All Tags
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cost Recommendations</CardTitle>
              <CardDescription>Actionable insights to reduce costs based on your spending patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#1E3B46]/10 p-2">
                      <TrendingDown className="h-4 w-4 text-[#1E3B46]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">Implement Reserved Instances</h4>
                      <p className="text-sm text-muted-foreground">
                        Convert 15 on-demand instances to reserved instances based on consistent usage patterns
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-sm font-medium text-[#EA994A]">Potential savings: $2,145.80/month</span>
                        <Button variant="outline" size="sm" className="ml-auto">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#1E3B46]/10 p-2">
                      <TrendingDown className="h-4 w-4 text-[#1E3B46]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">Optimize Storage Tiers</h4>
                      <p className="text-sm text-muted-foreground">
                        Move 2.5TB of infrequently accessed data to lower-cost storage tiers
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-sm font-medium text-[#EA994A]">Potential savings: $876.40/month</span>
                        <Button variant="outline" size="sm" className="ml-auto">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#1E3B46]/10 p-2">
                      <TrendingDown className="h-4 w-4 text-[#1E3B46]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">Right-size Compute Resources</h4>
                      <p className="text-sm text-muted-foreground">
                        8 instances identified with less than 20% CPU utilization over the past 30 days
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-sm font-medium text-[#EA994A]">Potential savings: $1,245.60/month</span>
                        <Button variant="outline" size="sm" className="ml-auto">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">
                View All Recommendations
              </Button>
            </CardFooter>
          </Card>
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

