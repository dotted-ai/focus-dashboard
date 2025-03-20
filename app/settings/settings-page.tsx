"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Bell,
  CloudRain,
  Copy,
  CreditCard,
  DollarSign,
  Download,
  Globe,
  Home,
  Key,
  LineChart,
  Lock,
  LogOut,
  Moon,
  Plug,
  Save,
  SettingsIcon,
  Shield,
  Sun,
  TrendingDown,
  Upload,
  Users,
  X,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SettingsPage() {
  const [theme, setTheme] = useState("system")
  const [currency, setCurrency] = useState("usd")
  const [language, setLanguage] = useState("en")
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [slackNotifications, setSlackNotifications] = useState(true)
  const [budgetAlerts, setBudgetAlerts] = useState(true)
  const [anomalyAlerts, setAnomalyAlerts] = useState(true)
  const [optimizationAlerts, setOptimizationAlerts] = useState(true)

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
              className="flex w-full items-center justify-start gap-3 text-white bg-white/10"
            >
              <Link href="/settings">
                <SettingsIcon className="h-4 w-4" />
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
            <h1 className="text-lg font-semibold">Settings</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
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

          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="api">API Keys</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal information and profile settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload
                        </Button>
                        <Button variant="outline" size="sm">
                          <X className="mr-2 h-4 w-4" />
                          Remove
                        </Button>
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" defaultValue="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="job-title">Job Title</Label>
                        <Input id="job-title" defaultValue="FinOps Manager" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Select defaultValue="finance">
                          <SelectTrigger id="department">
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="it">IT</SelectItem>
                            <SelectItem value="engineering">Engineering</SelectItem>
                            <SelectItem value="operations">Operations</SelectItem>
                            <SelectItem value="product">Product</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself"
                      defaultValue="FinOps professional with 5+ years of experience in cloud cost optimization and management."
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Profile</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Account Tab */}
            <TabsContent value="account" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account settings and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Password</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div></div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Lock className="mr-2 h-4 w-4" />
                      Change Password
                    </Button>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <div className="font-medium">Two-Factor Authentication</div>
                        <div className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </div>
                      </div>
                      <Button variant="outline">
                        <Shield className="mr-2 h-4 w-4" />
                        Enable
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Billing Information</h3>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="font-medium">Current Plan</div>
                          <div className="text-sm text-muted-foreground">Enterprise Plan</div>
                        </div>
                        <Badge>Active</Badge>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="font-medium">Billing Cycle</div>
                          <div className="text-sm text-muted-foreground">Annual (Next billing: Jan 15, 2024)</div>
                        </div>
                        <Button variant="outline" size="sm">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Manage Billing
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Danger Zone</h3>
                    <div className="rounded-lg border border-destructive/20 p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="font-medium">Delete Account</div>
                          <div className="text-sm text-muted-foreground">
                            Permanently delete your account and all associated data
                          </div>
                        </div>
                        <Button variant="destructive" size="sm">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Configure how and when you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-notifications" className="flex flex-col gap-1">
                          <span>Email Notifications</span>
                          <span className="font-normal text-sm text-muted-foreground">
                            Receive notifications via email
                          </span>
                        </Label>
                        <Switch
                          id="email-notifications"
                          checked={emailNotifications}
                          onCheckedChange={setEmailNotifications}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="budget-alerts" className="flex flex-col gap-1">
                          <span>Budget Alerts</span>
                          <span className="font-normal text-sm text-muted-foreground">
                            Receive alerts when budgets exceed thresholds
                          </span>
                        </Label>
                        <Switch id="budget-alerts" checked={budgetAlerts} onCheckedChange={setBudgetAlerts} />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="anomaly-alerts" className="flex flex-col gap-1">
                          <span>Anomaly Alerts</span>
                          <span className="font-normal text-sm text-muted-foreground">
                            Receive alerts for unusual spending patterns
                          </span>
                        </Label>
                        <Switch id="anomaly-alerts" checked={anomalyAlerts} onCheckedChange={setAnomalyAlerts} />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="optimization-alerts" className="flex flex-col gap-1">
                          <span>Optimization Recommendations</span>
                          <span className="font-normal text-sm text-muted-foreground">
                            Receive notifications about new optimization opportunities
                          </span>
                        </Label>
                        <Switch
                          id="optimization-alerts"
                          checked={optimizationAlerts}
                          onCheckedChange={setOptimizationAlerts}
                        />
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Slack Integration</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="slack-notifications" className="flex flex-col gap-1">
                          <span>Slack Notifications</span>
                          <span className="font-normal text-sm text-muted-foreground">
                            Receive notifications in Slack
                          </span>
                        </Label>
                        <Switch
                          id="slack-notifications"
                          checked={slackNotifications}
                          onCheckedChange={setSlackNotifications}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="slack-channel">Slack Channel</Label>
                        <Input id="slack-channel" defaultValue="#cloud-costs" />
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notification Schedule</h3>
                    <div className="space-y-2">
                      <Label htmlFor="notification-frequency">Report Frequency</Label>
                      <Select defaultValue="weekly">
                        <SelectTrigger id="notification-frequency">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Notification Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* API Keys Tab */}
            <TabsContent value="api" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>API Keys</CardTitle>
                  <CardDescription>Manage API keys for programmatic access to your data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-end">
                    <Button>
                      <Key className="mr-2 h-4 w-4" />
                      Generate New API Key
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Key</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Last Used</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Dashboard Integration</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <code className="rounded bg-muted px-1 py-0.5 text-sm">••••••••••••••••</code>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Copy className="h-3.5 w-3.5" />
                              <span className="sr-only">Copy API key</span>
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>Jan 12, 2023</TableCell>
                        <TableCell>Today</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Active</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Revoke
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Cost Export</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <code className="rounded bg-muted px-1 py-0.5 text-sm">••••••••••••••••</code>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Copy className="h-3.5 w-3.5" />
                              <span className="sr-only">Copy API key</span>
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>Mar 5, 2023</TableCell>
                        <TableCell>2 days ago</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Active</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Revoke
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Reporting Tool</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <code className="rounded bg-muted px-1 py-0.5 text-sm">••••••••••••••••</code>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Copy className="h-3.5 w-3.5" />
                              <span className="sr-only">Copy API key</span>
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>May 18, 2023</TableCell>
                        <TableCell>1 week ago</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Active</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Revoke
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="rounded-lg border p-4">
                    <h3 className="mb-2 font-medium">API Documentation</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn how to use our API to access your cloud cost and usage data programmatically.
                    </p>
                    <Button variant="outline" size="sm" className="mt-4">
                      View API Documentation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Integrations Tab */}
            <TabsContent value="integrations" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Integrations</CardTitle>
                  <CardDescription>Connect with third-party services and cloud providers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Cloud Providers</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-[#1E3B46]/10 p-2">
                            <CloudRain className="h-6 w-6 text-[#1E3B46]" />
                          </div>
                          <div>
                            <div className="font-medium">AWS</div>
                            <div className="text-sm text-muted-foreground">Amazon Web Services</div>
                          </div>
                        </div>
                        <Badge className="bg-green-500">Connected</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-[#1E3B46]/10 p-2">
                            <CloudRain className="h-6 w-6 text-[#1E3B46]" />
                          </div>
                          <div>
                            <div className="font-medium">Azure</div>
                            <div className="text-sm text-muted-foreground">Microsoft Azure</div>
                          </div>
                        </div>
                        <Badge className="bg-green-500">Connected</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-[#1E3B46]/10 p-2">
                            <CloudRain className="h-6 w-6 text-[#1E3B46]" />
                          </div>
                          <div>
                            <div className="font-medium">GCP</div>
                            <div className="text-sm text-muted-foreground">Google Cloud Platform</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Connect
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Communication Tools</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-[#1E3B46]/10 p-2">
                            <Bell className="h-6 w-6 text-[#1E3B46]" />
                          </div>
                          <div>
                            <div className="font-medium">Slack</div>
                            <div className="text-sm text-muted-foreground">Slack Workspace Integration</div>
                          </div>
                        </div>
                        <Badge className="bg-green-500">Connected</Badge>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-[#1E3B46]/10 p-2">
                            <Bell className="h-6 w-6 text-[#1E3B46]" />
                          </div>
                          <div>
                            <div className="font-medium">Microsoft Teams</div>
                            <div className="text-sm text-muted-foreground">Teams Integration</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Connect
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data & Analytics</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-[#1E3B46]/10 p-2">
                            <Plug className="h-6 w-6 text-[#1E3B46]" />
                          </div>
                          <div>
                            <div className="font-medium">Tableau</div>
                            <div className="text-sm text-muted-foreground">Data Visualization</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Connect
                        </Button>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-[#1E3B46]/10 p-2">
                            <Plug className="h-6 w-6 text-[#1E3B46]" />
                          </div>
                          <div>
                            <div className="font-medium">Power BI</div>
                            <div className="text-sm text-muted-foreground">Microsoft Power BI</div>
                          </div>
                        </div>
                        <Badge className="bg-green-500">Connected</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Plug className="mr-2 h-4 w-4" />
                    Browse Integration Marketplace
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Appearance Tab */}
            <TabsContent value="appearance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>Customize the look and feel of your dashboard</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Theme</h3>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="flex flex-col items-center gap-2">
                        <Button
                          variant="outline"
                          size="lg"
                          className={`h-24 w-full rounded-md border-2 ${
                            theme === "light" ? "border-[#EA994A]" : "border-transparent"
                          }`}
                          onClick={() => setTheme("light")}
                        >
                          <Sun className="h-6 w-6" />
                        </Button>
                        <Label>Light</Label>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Button
                          variant="outline"
                          size="lg"
                          className={`h-24 w-full rounded-md border-2 bg-[#1E3B46] ${
                            theme === "dark" ? "border-[#EA994A]" : "border-transparent"
                          }`}
                          onClick={() => setTheme("dark")}
                        >
                          <Moon className="h-6 w-6 text-white" />
                        </Button>
                        <Label>Dark</Label>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <Button
                          variant="outline"
                          size="lg"
                          className={`h-24 w-full rounded-md border-2 ${
                            theme === "system" ? "border-[#EA994A]" : "border-transparent"
                          }`}
                          onClick={() => setTheme("system")}
                        >
                          <div className="flex w-full justify-between px-4">
                            <Sun className="h-6 w-6" />
                            <Moon className="h-6 w-6" />
                          </div>
                        </Button>
                        <Label>System</Label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Language & Region</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select value={language} onValueChange={setLanguage}>
                          <SelectTrigger id="language">
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Spanish</SelectItem>
                            <SelectItem value="fr">French</SelectItem>
                            <SelectItem value="de">German</SelectItem>
                            <SelectItem value="ja">Japanese</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select value={currency} onValueChange={setCurrency}>
                          <SelectTrigger id="currency">
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD ($)</SelectItem>
                            <SelectItem value="eur">EUR (€)</SelectItem>
                            <SelectItem value="gbp">GBP (£)</SelectItem>
                            <SelectItem value="jpy">JPY (¥)</SelectItem>
                            <SelectItem value="cad">CAD ($)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="utc-5">
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                          <SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
                          <SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
                          <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                          <SelectItem value="utc+0">UTC</SelectItem>
                          <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Dashboard Layout</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="compact-view" className="flex flex-col gap-1">
                          <span>Compact View</span>
                          <span className="font-normal text-sm text-muted-foreground">
                            Use a more compact layout for dashboard components
                          </span>
                        </Label>
                        <Switch id="compact-view" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="show-tooltips" className="flex flex-col gap-1">
                          <span>Show Tooltips</span>
                          <span className="font-normal text-sm text-muted-foreground">
                            Display tooltips with additional information on hover
                          </span>
                        </Label>
                        <Switch id="show-tooltips" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Appearance Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Advanced Tab */}
            <TabsContent value="advanced" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Settings</CardTitle>
                  <CardDescription>Configure advanced settings and data management options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Management</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="data-retention" className="flex flex-col gap-1">
                          <span>Data Retention Period</span>
                          <span className="font-normal text-sm text-muted-foreground">
                            How long to keep historical cost and usage data
                          </span>
                        </Label>
                        <Select defaultValue="24">
                          <SelectTrigger id="data-retention" className="w-[180px]">
                            <SelectValue placeholder="Select period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3">3 months</SelectItem>
                            <SelectItem value="6">6 months</SelectItem>
                            <SelectItem value="12">12 months</SelectItem>
                            <SelectItem value="24">24 months</SelectItem>
                            <SelectItem value="36">36 months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="data-refresh" className="flex flex-col gap-1">
                          <span>Data Refresh Frequency</span>
                          <span className="font-normal text-sm text-muted-foreground">
                            How often to refresh cloud cost and usage data
                          </span>
                        </Label>
                        <Select defaultValue="24">
                          <SelectTrigger id="data-refresh" className="w-[180px]">
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6">Every 6 hours</SelectItem>
                            <SelectItem value="12">Every 12 hours</SelectItem>
                            <SelectItem value="24">Every 24 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Export & Import</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border p-4">
                        <h4 className="mb-2 font-medium">Export Data</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Export your cost and usage data in various formats
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            CSV
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            JSON
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Excel
                          </Button>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h4 className="mb-2 font-medium">Import Data</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Import cost and usage data from external sources
                        </p>
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          Import Data
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">System Information</h3>
                    <div className="rounded-lg border p-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Version</span>
                        <span className="text-sm">2.4.1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Last Updated</span>
                        <span className="text-sm">June 15, 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Database Size</span>
                        <span className="text-sm">4.2 GB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Total Records</span>
                        <span className="text-sm">1,245,678</span>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Session Management</h3>
                    <div className="rounded-lg border p-4">
                      <h4 className="mb-2 font-medium">Active Sessions</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Manage your active login sessions across devices
                      </p>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Device</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Last Active</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                Chrome on Windows
                              </div>
                            </TableCell>
                            <TableCell>New York, USA</TableCell>
                            <TableCell>Current session</TableCell>
                            <TableCell className="text-right">
                              <Badge>Current</Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                Safari on macOS
                              </div>
                            </TableCell>
                            <TableCell>San Francisco, USA</TableCell>
                            <TableCell>2 days ago</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                Mobile App on iOS
                              </div>
                            </TableCell>
                            <TableCell>Chicago, USA</TableCell>
                            <TableCell>5 days ago</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                              </Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <Button variant="outline" size="sm" className="mt-4">
                        Logout All Other Sessions
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Save Advanced Settings</Button>
                </CardFooter>
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

