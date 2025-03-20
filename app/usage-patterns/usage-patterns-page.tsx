"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  CloudRain,
  Cpu,
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
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function UsagePatternsPage() {
  const [timeRange, setTimeRange] = useState("30d")
  const [resourceType, setResourceType] = useState("all")
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
              className="flex w-full items-center justify-start gap-3 text-white bg-white/10"
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
            <h1 className="text-lg font-semibold">Usage Patterns</h1>
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
                <CardTitle className="text-sm font-medium">Avg. CPU Utilization</CardTitle>
                <Cpu className="h-4 w-4 text-[#EA994A]" />
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
                <CardTitle className="text-sm font-medium">Avg. Memory Usage</CardTitle>
                <Server className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">72.5%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +1.8%
                  </span>{" "}
                  vs previous period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Storage Growth</CardTitle>
                <HardDrive className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+4.2TB</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-[#EA994A] flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +8.3%
                  </span>{" "}
                  vs previous period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Peak Usage Time</CardTitle>
                <Clock className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2-4 PM</div>
                <p className="text-xs text-muted-foreground">Weekdays, EST timezone</p>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Resource Usage Over Time</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    CPU
                  </Button>
                  <Button variant="outline" size="sm">
                    Memory
                  </Button>
                  <Button variant="secondary" size="sm">
                    Network
                  </Button>
                  <Button variant="outline" size="sm">
                    Storage
                  </Button>
                </div>
              </div>
              <CardDescription>Historical resource utilization patterns with trend analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Resource usage chart would appear here</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Peak Usage Analysis</CardTitle>
                <CardDescription>When your resources are most heavily utilized</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Peak usage heatmap would appear here</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Usage Distribution</CardTitle>
                <CardDescription>Resource usage distribution by service type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Usage distribution chart would appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Resource Utilization</CardTitle>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search resources..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select value={resourceType} onValueChange={setResourceType}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Resources</SelectItem>
                      <SelectItem value="compute">Compute</SelectItem>
                      <SelectItem value="storage">Storage</SelectItem>
                      <SelectItem value="database">Database</SelectItem>
                      <SelectItem value="network">Network</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Resource</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>CPU Util.</TableHead>
                    <TableHead>Memory Util.</TableHead>
                    <TableHead>Network I/O</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Server className="mr-2 h-4 w-4 text-[#EA994A]" />
                        prod-app-server-01
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Compute</Badge>
                    </TableCell>
                    <TableCell>US-East-1</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={78} className="h-2 w-16" />
                        <span>78%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={65} className="h-2 w-16" />
                        <span>65%</span>
                      </div>
                    </TableCell>
                    <TableCell>245 MB/s</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Optimal</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Server className="mr-2 h-4 w-4 text-[#EA994A]" />
                        prod-app-server-02
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Compute</Badge>
                    </TableCell>
                    <TableCell>US-East-1</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={82} className="h-2 w-16" />
                        <span>82%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={74} className="h-2 w-16" />
                        <span>74%</span>
                      </div>
                    </TableCell>
                    <TableCell>278 MB/s</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Optimal</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <HardDrive className="mr-2 h-4 w-4 text-[#EA994A]" />
                        prod-storage-01
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Storage</Badge>
                    </TableCell>
                    <TableCell>US-East-1</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={45} className="h-2 w-16" />
                        <span>45%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={38} className="h-2 w-16" />
                        <span>38%</span>
                      </div>
                    </TableCell>
                    <TableCell>120 MB/s</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">Underutilized</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Server className="mr-2 h-4 w-4 text-[#EA994A]" />
                        test-server-01
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Compute</Badge>
                    </TableCell>
                    <TableCell>US-West-2</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={12} className="h-2 w-16" />
                        <span>12%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={18} className="h-2 w-16" />
                        <span>18%</span>
                      </div>
                    </TableCell>
                    <TableCell>35 MB/s</TableCell>
                    <TableCell>
                      <Badge className="bg-red-500">Idle</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Network className="mr-2 h-4 w-4 text-[#EA994A]" />
                        prod-load-balancer-01
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Network</Badge>
                    </TableCell>
                    <TableCell>US-East-1</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={68} className="h-2 w-16" />
                        <span>68%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={72} className="h-2 w-16" />
                        <span>72%</span>
                      </div>
                    </TableCell>
                    <TableCell>485 MB/s</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Optimal</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing 5 of 42 resources</div>
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
              <CardTitle>Idle Resources</CardTitle>
              <CardDescription>Resources with low utilization that could be optimized</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">VM-prod-12</div>
                    <div className="font-medium text-amber-500">12% utilized</div>
                  </div>
                  <Progress value={12} className="h-2" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Last 30 days average</span>
                    <span>Cost: $245.60/month</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">DB-backup-03</div>
                    <div className="font-medium text-amber-500">18% utilized</div>
                  </div>
                  <Progress value={18} className="h-2" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Last 30 days average</span>
                    <span>Cost: $328.75/month</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Storage-archive-05</div>
                    <div className="font-medium text-amber-500">22% utilized</div>
                  </div>
                  <Progress value={22} className="h-2" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Last 30 days average</span>
                    <span>Cost: $156.40/month</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">VM-test-08</div>
                    <div className="font-medium text-amber-500">25% utilized</div>
                  </div>
                  <Progress value={25} className="h-2" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Last 30 days average</span>
                    <span>Cost: $198.35/month</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="secondary">
                View All Idle Resources
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage Anomalies</CardTitle>
              <CardDescription>Unusual usage patterns detected in the last 30 days</CardDescription>
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
                        <h4 className="font-medium">Unusual CPU Spike</h4>
                        <span className="text-sm font-medium text-amber-600">+85% increase</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        prod-app-server-03 experienced an unusual CPU spike on June 18, 2023 between 2:00-4:00 AM
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-sm font-medium text-[#EA994A]">
                          Potential issue: Background process or attack
                        </span>
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
                        <h4 className="font-medium">Unusual Network Traffic</h4>
                        <span className="text-sm font-medium text-amber-600">+120% increase</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Unusual outbound network traffic detected from US-East-1 region on June 20, 2023
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-sm font-medium text-[#EA994A]">
                          Potential issue: Data exfiltration or backup job
                        </span>
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
              <CardTitle>Usage Optimization Recommendations</CardTitle>
              <CardDescription>Actionable insights to improve resource utilization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#1E3B46]/10 p-2">
                      <TrendingDown className="h-4 w-4 text-[#1E3B46]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">Right-size Underutilized Instances</h4>
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
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#1E3B46]/10 p-2">
                      <TrendingDown className="h-4 w-4 text-[#1E3B46]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">Implement Auto-scaling</h4>
                      <p className="text-sm text-muted-foreground">
                        5 application groups show predictable usage patterns and could benefit from auto-scaling
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
                      <h4 className="font-medium">Schedule Non-Production Resources</h4>
                      <p className="text-sm text-muted-foreground">
                        12 non-production resources could be scheduled to shut down during non-business hours
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-sm font-medium text-[#EA994A]">Potential savings: $932.20/month</span>
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

