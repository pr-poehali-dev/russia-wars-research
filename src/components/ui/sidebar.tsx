
import * as React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div
      className={cn("w-64 h-screen bg-sidebar border-r overflow-auto", className)}
      {...props}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-sidebar-foreground">
          Войны на территории России
        </h2>
        <nav className="space-y-1">
          <SidebarItem href="/" title="Главная" />
          <SidebarItem href="/introduction" title="Введение" />
          <SidebarItem href="/overview" title="Хронологический обзор" />
          <SidebarItem href="/ancient-period" title="Древнейший период" />
          <SidebarItem href="/kievan-rus" title="Киевская Русь" />
          <SidebarItem href="/moscow-kingdom" title="Московское царство" />
          <SidebarItem href="/russian-empire" title="Российская империя" />
          <SidebarItem href="/twentieth-century" title="XX век" />
          <SidebarItem href="/modern-russia" title="Россия в XXI веке" />
          <SidebarItem href="/war-causes" title="Причины войн" />
          <SidebarItem href="/war-influence" title="Влияние войн" />
          <SidebarItem href="/conclusion" title="Заключение" />
          <SidebarItem href="/bibliography" title="Список литературы" />
        </nav>
      </div>
    </div>
  );
}

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  href: string;
  title: string;
}

export function SidebarItem({ href, title, ...props }: SidebarItemProps) {
  return (
    <Link
      to={href}
      className="flex items-center py-2 px-3 rounded-md text-sm transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    >
      <ChevronRight className="h-4 w-4 mr-2" />
      <span>{title}</span>
    </Link>
  );
}
