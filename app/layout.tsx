import { ReactNode } from "react";
import { PropertyProvider } from "../components/PropertyContext";
import "./globals.css";

type MyComponentProps = {
  children: ReactNode;
};

const MyComponent = ({ children }: MyComponentProps) => {
  return (
    <html lang="en">
      <body>
        <PropertyProvider>{children}</PropertyProvider>
      </body>
    </html>
  );
};

export default MyComponent;
