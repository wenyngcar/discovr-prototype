"use client";

import { useState } from "react";
// import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { usePropertyContext, Property } from "@/components/PropertyContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ListPropertyPage() {
  const { properties, addProperty, editProperty } = usePropertyContext();
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const propertyData = {
      name: formData.get("property-name") as string,
      type: formData.get("property-type") as string,
      location: formData.get("location") as string,
      price: Number(formData.get("price")),
      size: Number(formData.get("size")),
      description: formData.get("description") as string,
      // imageUrl: `/placeholder.svg?height=200&width=300&text=${encodeURIComponent(
      //   formData.get("property-name") as string
      // )}`,
    };

    if (editingProperty) {
      editProperty(editingProperty.id, propertyData);
      setEditingProperty(null);
      setShowEditModal(false);
    } else {
      addProperty(propertyData);
      setShowSuccessModal(true);
    }

    event.currentTarget.reset();
  };

  const startEditing = (property: Property) => {
    setEditingProperty(property);
    setShowEditModal(true);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Manage Your Properties</h1>
          <Alert className="mb-6">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Prototype Notice</AlertTitle>
            <AlertDescription>
              This is a prototype page. In the full version, you&apos;ll need an
              account to list and manage properties.
            </AlertDescription>
          </Alert>
          <Tabs defaultValue="my-properties" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="my-properties">My Properties</TabsTrigger>
              <TabsTrigger value="add-property">Add New Property</TabsTrigger>
            </TabsList>
            <TabsContent value="my-properties">
              {properties.length === 0 ? (
                <div className="text-center py-10">
                  <h2 className="text-xl font-semibold mb-2">
                    No Properties Listed
                  </h2>
                  <p className="text-muted-foreground">
                    You haven&apos;t listed any properties yet. Add your first
                    property to get started!
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {properties.map((property) => (
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
                          variant="outline"
                          className="w-full"
                          onClick={() => startEditing(property)}
                        >
                          Edit Property
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent value="add-property">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-2xl mx-auto"
              >
                <div>
                  <Label htmlFor="property-name">Property Name</Label>
                  <Input
                    id="property-name"
                    name="property-name"
                    placeholder="Enter property name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="property-type">Property Type</Label>
                  <Select name="property-type" required>
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
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Enter property location"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="price">Price (per month)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Enter price"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="size">Size (sq ft)</Label>
                  <Input
                    id="size"
                    name="size"
                    type="number"
                    placeholder="Enter size"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe your property"
                  />
                </div>
                <Button type="submit" className="w-full">
                  List Property
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Property Added Successfully</DialogTitle>
            <DialogDescription>
              Your property has been listed successfully. You can view it in the
              &quot;My Properties&quot; tab.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowSuccessModal(false)}>Close</Button>
        </DialogContent>
      </Dialog>
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-h-[90vh]">
          <ScrollArea className="max-h-[80vh] pr-4">
            <DialogHeader>
              <DialogTitle>Edit Property</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="edit-property-name">Property Name</Label>
                <Input
                  id="edit-property-name"
                  name="property-name"
                  defaultValue={editingProperty?.name}
                  required
                />
              </div>
              <div>
                <Label htmlFor="edit-property-type">Property Type</Label>
                <Select
                  name="property-type"
                  defaultValue={editingProperty?.type}
                >
                  <SelectTrigger id="edit-property-type">
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
                <Label htmlFor="edit-location">Location</Label>
                <Input
                  id="edit-location"
                  name="location"
                  defaultValue={editingProperty?.location}
                  required
                />
              </div>
              <div>
                <Label htmlFor="edit-price">Price (per month)</Label>
                <Input
                  id="edit-price"
                  name="price"
                  type="number"
                  defaultValue={editingProperty?.price}
                  required
                />
              </div>
              <div>
                <Label htmlFor="edit-size">Size (sq ft)</Label>
                <Input
                  id="edit-size"
                  name="size"
                  type="number"
                  defaultValue={editingProperty?.size}
                  required
                />
              </div>
              <div>
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  name="description"
                  defaultValue={editingProperty?.description}
                />
              </div>
              <DialogFooter>
                <Button type="submit">Save Changes</Button>
              </DialogFooter>
            </form>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
