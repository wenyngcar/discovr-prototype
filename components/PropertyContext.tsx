"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

export interface Property {
  id: number;
  name: string;
  type: string;
  location: string;
  price: number;
  size: number;
  // imageUrl: string
  description: string;
}

interface PropertyContextType {
  properties: Property[];
  addProperty: (property: Omit<Property, "id">) => void;
  editProperty: (id: number, updatedProperty: Omit<Property, "id">) => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(
  undefined
);

export const usePropertyContext = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error(
      "usePropertyContext must be used within a PropertyProvider"
    );
  }
  return context;
};

export const PropertyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [nextId, setNextId] = useState(1);

  const addProperty = (property: Omit<Property, "id">) => {
    setProperties([...properties, { ...property, id: nextId }]);
    setNextId(nextId + 1);
  };

  const editProperty = (id: number, updatedProperty: Omit<Property, "id">) => {
    setProperties(
      properties.map((prop) =>
        prop.id === id ? { ...updatedProperty, id } : prop
      )
    );
  };

  return (
    <PropertyContext.Provider value={{ properties, addProperty, editProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};
