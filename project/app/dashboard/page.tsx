import { getServerSession } from "next-auth/next";
import { Card } from "@/components/ui/card";
import { BarChart, Users, Activity } from "lucide-react";

export default async function Dashboard() {
  const session = await getServerSession();
  const isAdmin = (session?.user as any)?.role === "admin";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome, {session?.user?.name}</h1>
        <p className="text-gray-500">
          {isAdmin ? "Admin Dashboard" : "User Dashboard"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <h3 className="text-2xl font-bold">1,234</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Now</p>
              <h3 className="text-2xl font-bold">123</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <BarChart className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold">$12,345</h3>
            </div>
          </div>
        </Card>
      </div>

      {isAdmin && (
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Admin Controls</h2>
          <p className="text-gray-500">
            This section is only visible to administrators.
          </p>
        </Card>
      )}
    </div>
  );
}