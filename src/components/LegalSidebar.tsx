import { useState, useEffect } from "react";
import { ChevronRight, List } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  id: string;
  title: string;
  num?: number;
}

interface LegalSidebarProps {
  items: SidebarItem[];
  title?: string;
}

const LegalSidebar = ({ items, title = "ÍNDICE" }: LegalSidebarProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(items[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden xl:block sticky top-24 h-fit w-72 shrink-0">
        <div className="bg-card border border-border rounded-xl p-5 shadow-lg">
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
            <div className="p-2 rounded-lg bg-primary/10">
              <List className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-foreground text-lg">{title}</h3>
          </div>
          <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-start gap-2 group",
                  activeSection === item.id
                    ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                {item.num !== undefined && (
                  <span
                    className={cn(
                      "font-bold shrink-0 w-5",
                      activeSection === item.id ? "text-primary" : "text-primary/60"
                    )}
                  >
                    {item.num}.
                  </span>
                )}
                <span className="leading-tight">{item.title}</span>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 ml-auto shrink-0 transition-transform opacity-0 group-hover:opacity-100",
                    activeSection === item.id && "opacity-100 text-primary"
                  )}
                />
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Collapsible Index */}
      <div className="xl:hidden mb-8">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <List className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-foreground">{title}</span>
          </div>
          <ChevronRight
            className={cn(
              "w-5 h-5 text-muted-foreground transition-transform duration-200",
              isCollapsed ? "" : "rotate-90"
            )}
          />
        </button>
        {!isCollapsed && (
          <div className="mt-2 bg-card border border-border rounded-xl p-4">
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsCollapsed(true);
                  }}
                  className={cn(
                    "text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-start gap-2",
                    activeSection === item.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  {item.num !== undefined && (
                    <span className="text-primary font-bold shrink-0">{item.num}.</span>
                  )}
                  <span className="leading-tight">{item.title}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default LegalSidebar;
