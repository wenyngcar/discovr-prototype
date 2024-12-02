"use client";

import { useParams } from "next/navigation";
// import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { usePropertyContext, Property } from "@/components/PropertyContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

// Dummy data (unchanged)
const dummyProperties: Property[] = [
  {
    id: 1,
    name: "Modern Office Space",
    type: "office",
    location: "New York, NY",
    price: 2500,
    size: 1200,
    // imageUrl: "/placeholder.svg?height=200&width=300&text=Modern+Office",
    description: "A sleek, modern office space in the heart of New York.",
  },
  {
    id: 2,
    name: "Downtown Retail Shop",
    type: "retail",
    location: "Los Angeles, CA",
    price: 3000,
    size: 800,
    // imageUrl: "/placeholder.svg?height=200&width=300&text=Retail+Shop",
    description: "Prime retail location in downtown Los Angeles.",
  },
  {
    id: 3,
    name: "Industrial Warehouse",
    type: "industrial",
    location: "Chicago, IL",
    price: 5000,
    size: 5000,
    // imageUrl: "/placeholder.svg?height=200&width=300&text=Industrial+Warehouse",
    description:
      "Spacious industrial warehouse with excellent logistics connections.",
  },
  {
    id: 4,
    name: "Coworking Hub",
    type: "coworking",
    location: "San Francisco, CA",
    price: 1500,
    size: 500,
    // imageUrl: "/placeholder.svg?height=200&width=300&text=Coworking+Hub",
    description: "Vibrant coworking space in the tech capital of the world.",
  },
  {
    id: 5,
    name: "Tech Office Park",
    type: "office",
    location: "Austin, TX",
    price: 4000,
    size: 2000,
    // imageUrl: "/placeholder.svg?height=200&width=300&text=Tech+Office+Park",
    description: "Modern office park tailored for tech companies in Austin.",
  },
  {
    id: 6,
    name: "Boutique Retail Space",
    type: "retail",
    location: "Miami, FL",
    price: 2000,
    size: 600,
    // imageUrl: "/placeholder.svg?height=200&width=300&text=Boutique+Retail",
    description:
      "Charming boutique retail space in a high-foot-traffic area of Miami.",
  },
  {
    id: 7,
    name: "Startup Incubator Office",
    type: "office",
    location: "Boston, MA",
    price: 3500,
    size: 1500,
    // imageUrl: "/placeholder.svg?height=200&width=300&text=Startup+Incubator",
    description:
      "Perfect office space for startups, close to major universities.",
  },
  {
    id: 8,
    name: "Art Gallery Space",
    type: "retail",
    location: "Santa Fe, NM",
    price: 1800,
    size: 1000,
    // imageUrl: "/placeholder.svg?height=200&width=300&text=Art+Gallery",
    description:
      "Beautiful gallery space in the heart of Santa Fe's art district.",
  },
  {
    id: 9,
    name: "Distribution Center",
    type: "industrial",
    location: "Atlanta, GA",
    price: 7000,
    size: 10000,
    // imageUrl: "/placeholder.svg?height=200&width=300&text=Distribution+Center",
    description:
      "Large distribution center with easy access to major highways.",
  },
  {
    id: 10,
    name: "Beachfront Restaurant Space",
    type: "retail",
    location: "San Diego, CA",
    price: 5500,
    size: 2500,
    // imageUrl:
    //   "/placeholder.svg?height=200&width=300&text=Beachfront+Restaurant",
    description: "Prime restaurant location with stunning ocean views.",
  },
];

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const { properties } = usePropertyContext();

  // Combine dummy properties with context properties
  const allProperties = [...dummyProperties, ...properties];

  const property = allProperties.find((p) => p.id === Number(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Alert className="mb-6">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Prototype Notice</AlertTitle>
            <AlertDescription>
              This is a prototype page. In the full version, you&apos;ll be able
              to communicate with the property owner and schedule viewings.
            </AlertDescription>
          </Alert>
          <h1 className="text-3xl font-bold mb-8">{property.name}</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {/* <Image
                src={property.imageUrl}
                alt={property.name}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              /> */}
            </div>
            <div>
              <p className="text-xl mb-4">
                <strong>Location:</strong> {property.location}
              </p>
              <p className="text-xl mb-4">
                <strong>Type:</strong> {property.type}
              </p>
              <p className="text-xl mb-4">
                <strong>Price:</strong> ${property.price}/month
              </p>
              <p className="text-xl mb-4">
                <strong>Size:</strong> {property.size} sq ft
              </p>
              <p className="text-xl mb-4">
                <strong>Description:</strong> {property.description}
              </p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="w-full mt-4">Contact Owner</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      This is a prototype. Contact functionality will be
                      available in the full version.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
