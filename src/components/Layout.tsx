
import React from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className={cn("flex-1 p-6 overflow-auto", className)}>
        <div className="container mx-auto max-w-4xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
