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
  PieChart,
  Search,
  Settings,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TeamAllocationPage() {
  const [timeRange, setTimeRange] = useState("30d")
  const [teamFilter, setTeamFilter] = useState("all")
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
              className="flex w-full items-center justify-start gap-3 text-white bg-white/10"
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
            <h1 className="text-lg font-semibold">Team Allocation</h1>
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
                <CardTitle className="text-sm font-medium">Total Team Spend</CardTitle>
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
                <CardTitle className="text-sm font-medium">Teams</CardTitle>
                <Users className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-[#EA994A] flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +1
                  </span>{" "}
                  vs previous period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Budget Utilization</CardTitle>
                <Wallet className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">82.3%</div>
                <Progress value={82.3} className="h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Avg. Cost Per Team</CardTitle>
                <BarChart3 className="h-4 w-4 text-[#EA994A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3,085.69</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-[#EA994A] flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    +3.8%
                  </span>{" "}
                  vs previous period
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Team Cost Distribution</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Teams
                  </Button>
                  <Button variant="outline" size="sm">
                    Departments
                  </Button>
                  <Button variant="secondary" size="sm">
                    Projects
                  </Button>
                </div>
              </div>
              <CardDescription>Cost allocation across teams, departments, and projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Team cost distribution chart would appear here</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Teams by Spend</CardTitle>
                <CardDescription>Teams with the highest cloud spending</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Engineering</div>
                      <div className="font-medium">$8,245.32</div>
                    </div>
                    <Progress value={33} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Data Science</div>
                      <div className="font-medium">$6,128.75</div>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">DevOps</div>
                      <div className="font-medium">$4,982.10</div>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Product</div>
                      <div className="font-medium">$3,245.68</div>
                    </div>
                    <Progress value={13} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Marketing</div>
                      <div className="font-medium">$2,083.65</div>
                    </div>
                    <Progress value={9} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Team Spending Trends</CardTitle>
                <CardDescription>Monthly spending patterns by team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-[#1E3B46]/5 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Team spending trends chart would appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Team Cost Breakdown</CardTitle>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search teams..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select value={teamFilter} onValueChange={setTeamFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Team</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Members</TableHead>
                    <TableHead>Monthly Cost</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Utilization</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-[#EA994A]" />
                        Frontend
                      </div>
                    </TableCell>
                    <TableCell>Engineering</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>$4,245.32</TableCell>
                    <TableCell>$5,000.00</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={84.9} className="h-2 w-16" />
                        <span>84.9%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">On Budget</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-[#EA994A]" />
                        Backend
                      </div>
                    </TableCell>
                    <TableCell>Engineering</TableCell>
                    <TableCell>15</TableCell>
                    <TableCell>$4,000.00</TableCell>
                    <TableCell>$4,500.00</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={88.9} className="h-2 w-16" />
                        <span>88.9%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">On Budget</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-[#EA994A]" />
                        Data Science
                      </div>
                    </TableCell>
                    <TableCell>Engineering</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>$6,128.75</TableCell>
                    <TableCell>$5,500.00</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={111.4} className="h-2 w-16" />
                        <span>111.4%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-red-500">Over Budget</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-[#EA994A]" />
                        DevOps
                      </div>
                    </TableCell>
                    <TableCell>Engineering</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>$4,982.10</TableCell>
                    <TableCell>$5,000.00</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={99.6} className="h-2 w-16" />
                        <span>99.6%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">Near Limit</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-[#EA994A]" />
                        Product
                      </div>
                    </TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>$3,245.68</TableCell>
                    <TableCell>$4,000.00</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={81.1} className="h-2 w-16" />
                        <span>81.1%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">On Budget</Badge>
                    </TableCell>
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
              <div className="text-sm text-muted-foreground">Showing 5 of 8 teams</div>
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

          <Tabs defaultValue="team-members">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="team-members">Team Members</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="budget-tracking">Budget Tracking</TabsTrigger>
            </TabsList>
            <TabsContent value="team-members" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Cost Per Team Member</CardTitle>
                  <CardDescription>Individual resource usage and cost allocation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Member</TableHead>
                        <TableHead>Team</TableHead>
                        <TableHead>Resources</TableHead>
                        <TableHead>Monthly Cost</TableHead>
                        <TableHead>Trend</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">John Doe</div>
                              <div className="text-xs text-muted-foreground">john.doe@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Frontend</TableCell>
                        <TableCell>12</TableCell>
                        <TableCell>$345.20</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                            <span className="text-xs text-green-500">+2.4%</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                              <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Jane Smith</div>
                              <div className="text-xs text-muted-foreground">jane.smith@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Data Science</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>$782.50</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <TrendingUp className="mr-1 h-4 w-4 text-[#EA994A]" />
                            <span className="text-xs text-[#EA994A]">+12.8%</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                              <AvatarFallback>RJ</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Robert Johnson</div>
                              <div className="text-xs text-muted-foreground">robert.johnson@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>DevOps</TableCell>
                        <TableCell>15</TableCell>
                        <TableCell>$892.35</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <TrendingDown className="mr-1 h-4 w-4 text-green-500" />
                            <span className="text-xs text-green-500">-3.2%</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                              <AvatarFallback>EW</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Emily Wilson</div>
                              <div className="text-xs text-muted-foreground">emily.wilson@example.com</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Backend</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>$412.80</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                            <span className="text-xs text-green-500">+1.5%</span>
                          </div>
                        </TableCell>
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
                  <div className="text-sm text-muted-foreground">Showing 4 of 51 team members</div>
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
            <TabsContent value="projects" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Project Cost Allocation</CardTitle>
                  <CardDescription>Cost breakdown by project and team</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Project</TableHead>
                        <TableHead>Teams</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead>Monthly Cost</TableHead>
                        <TableHead>Budget</TableHead>
                        <TableHead>Utilization</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <PieChart className="mr-2 h-4 w-4 text-[#EA994A]" />
                            Project Alpha
                          </div>
                        </TableCell>
                        <TableCell>Frontend, Backend</TableCell>
                        <TableCell>Jan 15, 2023</TableCell>
                        <TableCell>$5,245.32</TableCell>
                        <TableCell>$6,000.00</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={87.4} className="h-2 w-16" />
                            <span>87.4%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">On Budget</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <PieChart className="mr-2 h-4 w-4 text-[#EA994A]" />
                            Project Beta
                          </div>
                        </TableCell>
                        <TableCell>Data Science, DevOps</TableCell>
                        <TableCell>Mar 10, 2023</TableCell>
                        <TableCell>$8,128.75</TableCell>
                        <TableCell>$7,500.00</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={108.4} className="h-2 w-16" />
                            <span>108.4%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-red-500">Over Budget</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <PieChart className="mr-2 h-4 w-4 text-[#EA994A]" />
                            Project Gamma
                          </div>
                        </TableCell>
                        <TableCell>Backend, DevOps</TableCell>
                        <TableCell>May 5, 2023</TableCell>
                        <TableCell>$4,982.10</TableCell>
                        <TableCell>$5,500.00</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={90.6} className="h-2 w-16" />
                            <span>90.6%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">On Budget</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <PieChart className="mr-2 h-4 w-4 text-[#EA994A]" />
                            Project Delta
                          </div>
                        </TableCell>
                        <TableCell>Product, Frontend</TableCell>
                        <TableCell>Jun 20, 2023</TableCell>
                        <TableCell>$3,245.68</TableCell>
                        <TableCell>$4,000.00</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={81.1} className="h-2 w-16" />
                            <span>81.1%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">On Budget</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Showing 4 of 12 projects</div>
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
            <TabsContent value="budget-tracking" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Budget Allocation & Tracking</CardTitle>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Actions <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Adjust Budgets</DropdownMenuItem>
                        <DropdownMenuItem>Set Alerts</DropdownMenuItem>
                        <DropdownMenuItem>Export Budget Report</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardDescription>Track budget allocation and utilization by team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Engineering</div>
                          <div className="text-xs text-muted-foreground">Frontend, Backend, DevOps, Data Science</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">$19,356.17 / $20,000.00</div>
                          <div className="text-xs text-muted-foreground">96.8% utilized</div>
                        </div>
                      </div>
                      <Progress value={96.8} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Product</div>
                          <div className="text-xs text-muted-foreground">Product Management, UX/UI</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">$3,245.68 / $4,000.00</div>
                          <div className="text-xs text-muted-foreground">81.1% utilized</div>
                        </div>
                      </div>
                      <Progress value={81.1} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Marketing</div>
                          <div className="text-xs text-muted-foreground">Digital Marketing, Content</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">$2,083.65 / $3,000.00</div>
                          <div className="text-xs text-muted-foreground">69.5% utilized</div>
                        </div>
                      </div>
                      <Progress value={69.5} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Sales</div>
                          <div className="text-xs text-muted-foreground">Sales Operations, CRM</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">$1,245.60 / $2,000.00</div>
                          <div className="text-xs text-muted-foreground">62.3% utilized</div>
                        </div>
                      </div>
                      <Progress value={62.3} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="secondary">
                    View Detailed Budget Report
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Team Cost Anomalies</CardTitle>
              <CardDescription>Unusual spending patterns by team detected in the last 30 days</CardDescription>
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
                        <h4 className="font-medium">Data Science Team Spending Spike</h4>
                        <span className="text-sm font-medium text-amber-600">+42% increase</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Unusual increase in compute instance usage by the Data Science team on June 15, 2023
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
                        <h4 className="font-medium">DevOps Storage Costs</h4>
                        <span className="text-sm font-medium text-amber-600">+68% increase</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Unusual increase in storage costs from the DevOps team
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
              <CardTitle>Team Optimization Recommendations</CardTitle>
              <CardDescription>Actionable insights to reduce costs by team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#1E3B46]/10 p-2">
                      <TrendingDown className="h-4 w-4 text-[#1E3B46]" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">Data Science Team Resource Optimization</h4>
                      <p className="text-sm text-muted-foreground">
                        Recommend switching to reserved instances for consistent GPU workloads
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-sm font-medium text-[#EA994A]">Potential savings: $1,245.80/month</span>
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
                      <h4 className="font-medium">DevOps Team Storage Optimization</h4>
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
                      <h4 className="font-medium">Frontend Team Development Resources</h4>
                      <p className="text-sm text-muted-foreground">
                        Schedule automatic shutdown of development environments during non-business hours
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

