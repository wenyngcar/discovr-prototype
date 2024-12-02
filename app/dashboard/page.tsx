import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Property Dashboard</h1>
            <Button>Add New Listing</Button>
          </div>
          <Alert className="mb-6">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Prototype Notice</AlertTitle>
            <AlertDescription>
              This is a prototype page. In the full version, you&apos;ll need an
              account to list and manage properties.
            </AlertDescription>
          </Alert>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">
                    Modern Office Space {i + 1}
                  </TableCell>
                  <TableCell>New York, NY</TableCell>
                  <TableCell>$2,500/mo</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Active
                    </span>
                  </TableCell>
                  <TableCell>
                    <Link
                      className="text-blue-600 hover:underline"
                      href={`/listing/${i + 1}`}
                    >
                      View
                    </Link>
                    {" | "}
                    <Link className="text-blue-600 hover:underline" href="#">
                      Edit
                    </Link>
                    {" | "}
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
