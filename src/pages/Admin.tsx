import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Users, Plus, Settings, BarChart3, ArrowLeft, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "User",
      status: "Active",
      joinDate: "2024-01-15"
    },
    {
      id: "2", 
      name: "Michael Chen",
      email: "michael@example.com",
      role: "Volunteer",
      status: "Active",
      joinDate: "2024-01-10"
    },
    {
      id: "3",
      name: "Emily Davis",
      email: "emily@example.com", 
      role: "User",
      status: "Inactive",
      joinDate: "2024-01-08"
    }
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "User"
  });

  const [showAddUser, setShowAddUser] = useState(false);

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const user: User = {
      id: (users.length + 1).toString(),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: "Active",
      joinDate: new Date().toISOString().split('T')[0]
    };

    setUsers([...users, user]);
    setNewUser({ name: "", email: "", role: "User" });
    setShowAddUser(false);
    
    toast({
      title: "Success",
      description: `User ${newUser.name} has been added successfully.`
    });
  };

  const stats = [
    { label: "Total Users", value: users.length, icon: Users },
    { label: "Active Users", value: users.filter(u => u.status === "Active").length, icon: BarChart3 },
    { label: "Volunteers", value: users.filter(u => u.role === "Volunteer").length, icon: Settings },
    { label: "New This Month", value: 12, icon: Plus }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-glass-backdrop backdrop-blur-md border-b border-glass-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  OpenMind Admin
                </h1>
                <p className="text-sm text-muted-foreground">User Management Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="glass-primary"
                onClick={() => setShowAddUser(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add User
              </Button>
              <Button 
                variant="glass"
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-glass/60 backdrop-blur-sm border-glass-border/30 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                </div>
                <stat.icon className="w-8 h-8 text-primary/60" />
              </div>
            </Card>
          ))}
        </div>

        {/* Add User Form */}
        {showAddUser && (
          <Card className="bg-glass/60 backdrop-blur-sm border-glass-border/30 p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Add New User</h3>
            <form onSubmit={handleAddUser} className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  placeholder="Enter full name"
                  className="bg-glass/50 border-glass-border/30"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  placeholder="Enter email address"
                  className="bg-glass/50 border-glass-border/30"
                />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })}>
                  <SelectTrigger className="bg-glass/50 border-glass-border/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="User">User</SelectItem>
                    <SelectItem value="Volunteer">Volunteer</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end space-x-2">
                <Button type="submit" variant="glass-primary">
                  Add User
                </Button>
                <Button 
                  type="button" 
                  variant="glass" 
                  onClick={() => setShowAddUser(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        )}

        {/* Users Table */}
        <Card className="bg-glass/60 backdrop-blur-sm border-glass-border/30">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Users</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-glass-border/30">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Email</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Role</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Join Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-glass-border/20 hover:bg-glass/30 transition-colors">
                      <td className="py-3 px-4 font-medium">{user.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{user.email}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                          user.role === "Admin" ? "bg-primary/20 text-primary" :
                          user.role === "Volunteer" ? "bg-success/20 text-success" :
                          "bg-muted text-muted-foreground"
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                          user.status === "Active" ? "bg-success/20 text-success" : "bg-muted text-muted-foreground"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{user.joinDate}</td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Admin;