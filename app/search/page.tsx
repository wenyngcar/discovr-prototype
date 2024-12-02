"use client";

import { useState, useMemo } from "react";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePropertyContext, Property } from "@/components/PropertyContext";

// Dummy data
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

export default function SearchPage() {
  const { properties } = usePropertyContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState<string | undefined>();
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sizeRange, setSizeRange] = useState([0, 10000]);
  const router = useRouter();

  // Combine dummy properties with context properties
  const allProperties = useMemo(
    () => [...dummyProperties, ...properties],
    [properties]
  );

  const filteredProperties = useMemo(() => {
    return allProperties.filter(
      (property) =>
        (property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!propertyType || property.type === propertyType) &&
        property.price >= priceRange[0] &&
        property.price <= priceRange[1] &&
        property.size >= sizeRange[0] &&
        property.size <= sizeRange[1]
    );
  }, [allProperties, searchTerm, propertyType, priceRange, sizeRange]);

  const handleViewDetails = (id: number) => {
    router.push(`/property/${id}`);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Find Your Perfect Space</h1>
          <Alert className="mb-6">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Prototype Notice</AlertTitle>
            <AlertDescription>
              This is a prototype page. In the full version, you&apos;ll need an
              account to list and manage properties.
            </AlertDescription>
          </Alert>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1 space-y-6">
              <div>
                <Label htmlFor="location">Search</Label>
                <Input
                  id="location"
                  placeholder="Search by name or location"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="property-type">Property Type</Label>
                <Select onValueChange={setPropertyType} value={propertyType}>
                  <SelectTrigger id="property-type">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="office">Office</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="coworking">Coworking</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Price Range (per month)</Label>
                <Slider
                  defaultValue={[0, 10000]}
                  max={10000}
                  min={0}
                  step={100}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <div>
                <Label>Space Size (sq ft)</Label>
                <Slider
                  defaultValue={[0, 10000]}
                  max={10000}
                  min={0}
                  step={100}
                  onValueChange={setSizeRange}
                />
                <div className="flex justify-between mt-2">
                  <span>{sizeRange[0]} sq ft</span>
                  <span>{sizeRange[1]} sq ft</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProperties.map((property) => (
                <Card key={property.id}>
                  <CardHeader>
                    {/* <Image
                      src={property.imageUrl}
                      alt={property.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    /> */}
                    <CardTitle>{property.name}</CardTitle>
                    <CardDescription>{property.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      <strong>Type:</strong> {property.type}
                    </p>
                    <p>
                      <strong>Price:</strong> ${property.price}/month
                    </p>
                    <p>
                      <strong>Size:</strong> {property.size} sq ft
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      onClick={() => handleViewDetails(property.id)}
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
