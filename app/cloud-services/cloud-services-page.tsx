"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  BarChart3,
  Calendar,
  CloudRain,
  Database,
  DollarSign,
  Download,
  Filter,
  Globe,
  HardDrive,
  Home,
  LineChart,
  Network,
  Search,
  Server,
  Settings,
  Shield,
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

export default function CloudServicesPage() {
  const [timeRange, setTimeRange] = useState("30d")
  const [serviceFilter, setServiceFilter] = useState("all")
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
              className="flex w-full items-center justify-start gap-3 text-white bg-white/10"
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
            <h1 className="text-lg font-semibold">Cloud Services</h1>
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
                <CardTitle className="text-sm font-medium">Total Services</CardTitle>
                <CloudRain className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
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
                <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
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
                <CardTitle className="text-sm font-medium">Avg. Utilization</CardTitle>
                <BarChart3 className="h-4 w-4 text-[#EA994A]" />
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
                <CardTitle className="text-sm font-medium">Health Score</CardTitle>
                <Shield className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92.7%</div>
                <Progress value={92.7} className="h-2" />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Service Inventory</CardTitle>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search services..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select value={serviceFilter} onValueChange={setServiceFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Services</SelectItem>
                      <SelectItem value="compute">Compute</SelectItem>
                      <SelectItem value="storage">Storage</SelectItem>
                      <SelectItem value="database">Database</SelectItem>
                      <SelectItem value="network">Network</SelectItem>
                      <SelectItem value="security">Security</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Instances</TableHead>
                    <TableHead>Utilization</TableHead>
                    <TableHead>Monthly Cost</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Server className="mr-2 h-4 w-4 text-[#EA994A]" />
                        EC2 Instances
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Compute</Badge>
                    </TableCell>
                    <TableCell>US-East-1</TableCell>
                    <TableCell>24</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={78} className="h-2 w-16" />
                        <span>78%</span>
                      </div>
                    </TableCell>
                    <TableCell>$8,245.32</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Healthy</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <HardDrive className="mr-2 h-4 w-4 text-[#EA994A]" />
                        S3 Storage
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Storage</Badge>
                    </TableCell>
                    <TableCell>Global</TableCell>
                    <TableCell>15</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={65} className="h-2 w-16" />
                        <span>65%</span>
                      </div>
                    </TableCell>
                    <TableCell>$4,128.75</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Healthy</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Database className="mr-2 h-4 w-4 text-[#EA994A]" />
                        RDS Databases
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Database</Badge>
                    </TableCell>
                    <TableCell>US-East-1</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={82} className="h-2 w-16" />
                        <span>82%</span>
                      </div>
                    </TableCell>
                    <TableCell>$4,982.10</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Healthy</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Network className="mr-2 h-4 w-4 text-[#EA994A]" />
                        VPC Network
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Network</Badge>
                    </TableCell>
                    <TableCell>US-East-1</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={45} className="h-2 w-16" />
                        <span>45%</span>
                      </div>
                    </TableCell>
                    <TableCell>$2,245.68</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Healthy</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Globe className="mr-2 h-4 w-4 text-[#EA994A]" />
                        CloudFront CDN
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">Network</Badge>
                    </TableCell>
                    <TableCell>Global</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={72} className="h-2 w-16" />
                        <span>72%</span>
                      </div>
                    </TableCell>
                    <TableCell>$1,845.65</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">Warning</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing 5 of 42 services</div>
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

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Service Distribution</CardTitle>
                <CardDescription>Breakdown of services by type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Service distribution chart would appear here</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Regional Distribution</CardTitle>
                <CardDescription>Services by geographic region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Regional distribution chart would appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Service Performance</CardTitle>
              <CardDescription>Performance metrics for key services over time</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="compute">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="compute">Compute</TabsTrigger>
                  <TabsTrigger value="storage">Storage</TabsTrigger>
                  <TabsTrigger value="database">Database</TabsTrigger>
                  <TabsTrigger value="network">Network</TabsTrigger>
                </TabsList>
                <TabsContent value="compute" className="space-y-4 pt-4">
                  <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Compute performance metrics would appear here</p>
                  </div>
                </TabsContent>
                <TabsContent value="storage" className="space-y-4 pt-4">
                  <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Storage performance metrics would appear here</p>
                  </div>
                </TabsContent>
                <TabsContent value="database" className="space-y-4 pt-4">
                  <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Database performance metrics would appear here</p>
                  </div>
                </TabsContent>
                <TabsContent value="network" className="space-y-4 pt-4">
                  <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Network performance metrics would appear here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Recommendations</CardTitle>
              <CardDescription>Optimization opportunities for your cloud services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#1E3B46]/10 p-2">
                      <Server className="h-4 w-4 text-[#1E3B46]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">Right-size EC2 instances</h4>
                      <p className="text-sm text-muted-foreground">
                        8 EC2 instances are consistently underutilized and could be downsized to a smaller instance type
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
                      <HardDrive className="h-4 w-4 text-[#1E3B46]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">Optimize S3 storage classes</h4>
                      <p className="text-sm text-muted-foreground">
                        2.5TB of data in S3 Standard hasn't been accessed in over 90 days and could be moved to S3
                        Infrequent Access
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
                      <Database className="h-4 w-4 text-[#1E3B46]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">Consolidate RDS instances</h4>
                      <p className="text-sm text-muted-foreground">
                        3 RDS instances have low utilization and could be consolidated into a single instance
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

