import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Ruler, Users } from "lucide-react";

export default function ListingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                alt="Property Image"
                className="rounded-lg object-cover w-full"
                height="400"
                src="/placeholder.svg?height=400&width=600"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <Image
                    key={i}
                    alt={`Thumbnail ${i + 1}`}
                    className="rounded object-cover w-full"
                    height="100"
                    src="/placeholder.svg?height=100&width=100"
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">
                Modern Office Space in Downtown
              </h1>
              <p className="text-xl font-semibold mb-2">$2,500 / month</p>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="mr-2 h-5 w-5" />
                <span>123 Business Street, New York, NY 10001</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Ruler className="mr-2 h-5 w-5" />
                  <span>1,200 sq ft</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  <span>Up to 20 people</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>Available from July 1, 2023</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="mb-4">
                This modern office space is perfect for growing businesses.
                Located in the heart of downtown, it offers a prime location
                with easy access to public transportation and numerous
                amenities. The space features open plan areas, private offices,
                a conference room, and a fully equipped kitchen.
              </p>
              <h2 className="text-xl font-semibold mb-2">Amenities</h2>
              <ul className="list-disc list-inside mb-6">
                <li>High-speed internet</li>
                <li>24/7 access</li>
                <li>Meeting rooms</li>
                <li>Fully furnished</li>
                <li>On-site parking</li>
                <li>Cleaning services</li>
              </ul>
              <Button className="w-full mb-4">Schedule a Viewing</Button>
              <Button variant="outline" className="w-full">
                Contact Landlord
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
