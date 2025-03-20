"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  BarChart3,
  Calendar,
  Check,
  ChevronDown,
  CloudRain,
  Database,
  DollarSign,
  Download,
  Filter,
  HardDrive,
  Home,
  LineChart,
  Network,
  Search,
  Server,
  Settings,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function OptimizationPage() {
  const [timeRange, setTimeRange] = useState("30d")
  const [optimizationType, setOptimizationType] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

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
              className="flex w-full items-center justify-start gap-3 text-white bg-white/10"
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
            <h1 className="text-lg font-semibold">Optimization</h1>
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

          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Savings Potential</CardTitle>
                <DollarSign className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$5,842.75</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-[#EA994A] flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +12.4%
                  </span>{" "}
                  vs previous period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Optimization Opportunities</CardTitle>
                <TrendingDown className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-[#EA994A] flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +3
                  </span>{" "}
                  vs previous period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Implemented Savings</CardTitle>
                <Check className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,145.30</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +8.7%
                  </span>{" "}
                  vs previous period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Implementation Rate</CardTitle>
                <BarChart3 className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">36.7%</div>
                <Progress value={36.7} className="h-2" />
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All Recommendations</TabsTrigger>
              <TabsTrigger value="compute">Compute</TabsTrigger>
              <TabsTrigger value="storage">Storage</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle>Optimization Recommendations</CardTitle>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search recommendations..."
                          className="pl-8"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Select value={optimizationType} onValueChange={setOptimizationType}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Filter by type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="rightsizing">Rightsizing</SelectItem>
                          <SelectItem value="reserved">Reserved Instances</SelectItem>
                          <SelectItem value="idle">Idle Resources</SelectItem>
                          <SelectItem value="storage">Storage Optimization</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[#1E3B46]/10 p-2">
                          <Server className="h-4 w-4 text-[#1E3B46]" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Right-size underutilized compute instances</h4>
                            <Badge>Rightsizing</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            8 instances identified with less than 20% CPU utilization over the past 30 days
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">
                              Potential savings: $1,245.60/month
                            </span>
                            <div className="ml-auto flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button size="sm">Implement</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[#1E3B46]/10 p-2">
                          <Server className="h-4 w-4 text-[#1E3B46]" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Reserved instance opportunities</h4>
                            <Badge>Reserved Instances</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Convert 15 on-demand instances to reserved instances based on usage patterns
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">
                              Potential savings: $2,145.80/month
                            </span>
                            <div className="ml-auto flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button size="sm">Implement</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[#1E3B46]/10 p-2">
                          <Network className="h-4 w-4 text-[#1E3B46]" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Unused elastic IPs</h4>
                            <Badge>Idle Resources</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            12 elastic IPs are not associated with any running instances
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">Potential savings: $876.00/month</span>
                            <div className="ml-auto flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button size="sm">Implement</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[#1E3B46]/10 p-2">
                          <HardDrive className="h-4 w-4 text-[#1E3B46]" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Unattached storage volumes</h4>
                            <Badge>Idle Resources</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            5 storage volumes are not attached to any instances
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">Potential savings: $932.40/month</span>
                            <div className="ml-auto flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button size="sm">Implement</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[#1E3B46]/10 p-2">
                          <HardDrive className="h-4 w-4 text-[#1E3B46]" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Optimize S3 storage classes</h4>
                            <Badge>Storage Optimization</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Move 2.5TB of infrequently accessed data to lower-cost storage tiers
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">Potential savings: $642.95/month</span>
                            <div className="ml-auto flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button size="sm">Implement</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Showing 5 of 28 recommendations</div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="compute" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Compute Optimization Recommendations</CardTitle>
                  <CardDescription>Recommendations specific to compute resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[#1E3B46]/10 p-2">
                          <Server className="h-4 w-4 text-[#1E3B46]" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Right-size underutilized compute instances</h4>
                            <Badge>Rightsizing</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            8 instances identified with less than 20% CPU utilization over the past 30 days
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">
                              Potential savings: $1,245.60/month
                            </span>
                            <div className="ml-auto flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button size="sm">Implement</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[#1E3B46]/10 p-2">
                          <Server className="h-4 w-4 text-[#1E3B46]" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Reserved instance opportunities</h4>
                            <Badge>Reserved Instances</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Convert 15 on-demand instances to reserved instances based on usage patterns
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">
                              Potential savings: $2,145.80/month
                            </span>
                            <div className="ml-auto flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button size="sm">Implement</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="storage" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Storage Optimization Recommendations</CardTitle>
                  <CardDescription>Recommendations specific to storage resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[#1E3B46]/10 p-2">
                          <HardDrive className="h-4 w-4 text-[#1E3B46]" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Unattached storage volumes</h4>
                            <Badge>Idle Resources</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            5 storage volumes are not attached to any instances
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">Potential savings: $932.40/month</span>
                            <div className="ml-auto flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button size="sm">Implement</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[#1E3B46]/10 p-2">
                          <HardDrive className="h-4 w-4 text-[#1E3B46]" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Optimize S3 storage classes</h4>
                            <Badge>Storage Optimization</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Move 2.5TB of infrequently accessed data to lower-cost storage tiers
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">Potential savings: $642.95/month</span>
                            <div className="ml-auto flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button size="sm">Implement</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="database" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Database Optimization Recommendations</CardTitle>
                  <CardDescription>Recommendations specific to database resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[#1E3B46]/10 p-2">
                          <Database className="h-4 w-4 text-[#1E3B46]" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Consolidate RDS instances</h4>
                            <Badge>Rightsizing</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            3 RDS instances have low utilization and could be consolidated into a single instance
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">Potential savings: $932.20/month</span>
                            <div className="ml-auto flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button size="sm">Implement</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="network" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Network Optimization Recommendations</CardTitle>
                  <CardDescription>Recommendations specific to network resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[#1E3B46]/10 p-2">
                          <Network className="h-4 w-4 text-[#1E3B46]" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Unused elastic IPs</h4>
                            <Badge>Idle Resources</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            12 elastic IPs are not associated with any running instances
                          </p>
                          <div className="flex items-center pt-2">
                            <span className="text-sm font-medium text-[#EA994A]">Potential savings: $876.00/month</span>
                            <div className="ml-auto flex gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button size="sm">Implement</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Savings by Category</CardTitle>
                <CardDescription>Potential savings breakdown by optimization category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Savings by category chart would appear here</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Implementation Status</CardTitle>
                <CardDescription>Status of optimization recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Implemented</div>
                      <div className="font-medium text-green-500">12 recommendations</div>
                    </div>
                    <Progress value={36.7} className="h-2 bg-muted" />
                    <div className="text-xs text-muted-foreground">$2,145.30/month savings realized</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">In Progress</div>
                      <div className="font-medium text-amber-500">8 recommendations</div>
                    </div>
                    <Progress value={24.2} className="h-2 bg-muted" />
                    <div className="text-xs text-muted-foreground">$1,412.65/month savings pending</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Not Started</div>
                      <div className="font-medium text-muted-foreground">13 recommendations</div>
                    </div>
                    <Progress value={39.1} className="h-2 bg-muted" />
                    <div className="text-xs text-muted-foreground">$2,284.80/month potential savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Implementation Tracking</CardTitle>
              <CardDescription>Track the status of implemented optimization recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Recommendation</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Potential Savings</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Implementation Date</TableHead>
                    <TableHead>Actual Savings</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Server className="mr-2 h-4 w-4 text-[#EA994A]" />
                        Right-size dev instances
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Rightsizing</Badge>
                    </TableCell>
                    <TableCell>$845.20/month</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Implemented</Badge>
                    </TableCell>
                    <TableCell>June 15, 2023</TableCell>
                    <TableCell>$872.45/month</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <HardDrive className="mr-2 h-4 w-4 text-[#EA994A]" />
                        Delete unused snapshots
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Storage Optimization</Badge>
                    </TableCell>
                    <TableCell>$328.75/month</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Implemented</Badge>
                    </TableCell>
                    <TableCell>June 22, 2023</TableCell>
                    <TableCell>$328.75/month</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Network className="mr-2 h-4 w-4 text-[#EA994A]" />
                        Release unused Elastic IPs
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Idle Resources</Badge>
                    </TableCell>
                    <TableCell>$432.10/month</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">In Progress</Badge>
                    </TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Server className="mr-2 h-4 w-4 text-[#EA994A]" />
                        Purchase Reserved Instances
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Reserved Instances</Badge>
                    </TableCell>
                    <TableCell>$1,245.60/month</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">In Progress</Badge>
                    </TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Database className="mr-2 h-4 w-4 text-[#EA994A]" />
                        Consolidate RDS instances
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Rightsizing</Badge>
                    </TableCell>
                    <TableCell>$932.20/month</TableCell>
                    <TableCell>
                      <Badge className="bg-slate-500">Not Started</Badge>
                    </TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing 5 of 33 implementations</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Scheduled Optimizations</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Actions <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Create New Schedule</DropdownMenuItem>
                    <DropdownMenuItem>Edit Schedules</DropdownMenuItem>
                    <DropdownMenuItem>Export Schedule Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardDescription>Automated resource scheduling for cost optimization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#1E3B46]/10 p-2">
                      <Server className="h-4 w-4 text-[#1E3B46]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">Development Environment Shutdown</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatically stops 12 development instances during non-business hours (8PM-6AM weekdays, all
                        day weekends)
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-sm font-medium text-[#EA994A]">Estimated savings: $1,245.60/month</span>
                        <div className="ml-auto flex gap-2">
                          <Badge className="bg-green-500">Active</Badge>
                          <Button variant="outline" size="sm">
                            Edit Schedule
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#1E3B46]/10 p-2">
                      <Database className="h-4 w-4 text-[#1E3B46]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">Test Database Scaling</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatically scales down 5 test database instances during non-business hours
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-sm font-medium text-[#EA994A]">Estimated savings: $876.40/month</span>
                        <div className="ml-auto flex gap-2">
                          <Badge className="bg-green-500">Active</Badge>
                          <Button variant="outline" size="sm">
                            Edit Schedule
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">
                Create New Schedule
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

