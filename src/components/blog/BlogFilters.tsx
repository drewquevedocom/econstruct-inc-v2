import Link from "next/link";
import { getBlogArchiveSummary } from "@/lib/blog";

interface BlogFiltersProps {
  active?: string;
}

const filters = [
  { label: "All", href: "/blog", slug: "all" },
  {
    label: "Restaurant & Bar",
    href: "/blog/category/restaurant-and-bar",
    slug: "restaurant-and-bar",
  },
  {
    label: "General Contracting",
    href: "/blog/category/general-contracting",
    slug: "general-contracting",
  },
  {
    label: "Remodeling & Renovation",
    href: "/blog/category/remodeling-and-renovation",
    slug: "remodeling-and-renovation",
  },
  {
    label: "Los Angeles Projects",
    href: "/blog/category/los-angeles-projects",
    slug: "los-angeles-projects",
  },
  {
    label: "Permits & Compliance",
    href: "/blog/category/permits-and-compliance",
    slug: "permits-and-compliance",
  },
];

export default function BlogFilters({ active = "all" }: BlogFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = filter.slug === active;
          return (
            <Link
              key={filter.slug}
              href={filter.href}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
                isActive
                  ? "bg-brand-dark text-white"
                  : "border border-brand-dark/12 bg-white text-brand-dark hover:border-accent-gold hover:text-accent-gold"
              }`}
            >
              {filter.label}
            </Link>
          );
        })}
      </div>
      <p className="max-w-3xl text-base leading-relaxed text-body-text">
        {getBlogArchiveSummary(active === "all" ? undefined : active)}
      </p>
    </div>
  );
}
