import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  basePath?: string;
}

function buildHref(basePath: string, page: number) {
  return page === 1 ? basePath : `${basePath}?page=${page}`;
}

function getPageRange(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "...")[] = [1];

  if (current > 3) pages.push("...");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("...");

  pages.push(total);
  return pages;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  totalPosts,
  postsPerPage,
  basePath = "/blog",
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageRange(currentPage, totalPages);
  const startPost = (currentPage - 1) * postsPerPage + 1;
  const endPost = Math.min(currentPage * postsPerPage, totalPosts);

  return (
    <div className="mt-16 border-t border-black/8 pt-12">
      {/* Count line */}
      <p className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-black/35">
        Showing {startPost}–{endPost} of {totalPosts} articles &nbsp;·&nbsp; Page {currentPage} of {totalPages}
      </p>

      <nav
        aria-label="Blog pagination"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {/* Prev */}
        {currentPage > 1 ? (
          <Link
            href={buildHref(basePath, currentPage - 1)}
            rel="prev"
            className="group flex items-center gap-2 rounded-full border border-brand-dark/15 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-dark transition-all hover:border-accent-gold hover:text-accent-gold"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Prev
          </Link>
        ) : (
          <span className="flex items-center gap-2 rounded-full border border-black/6 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-black/20 select-none cursor-not-allowed">
            <ArrowLeft size={14} />
            Prev
          </span>
        )}

        {/* Page numbers */}
        <div className="flex items-center gap-1.5">
          {pages.map((page, i) =>
            page === "..." ? (
              <span
                key={`ellipsis-${i}`}
                className="flex h-11 w-8 items-center justify-center text-sm font-bold text-black/25 select-none"
              >
                ···
              </span>
            ) : page === currentPage ? (
              <span
                key={page}
                aria-current="page"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-dark text-sm font-bold text-white shadow-[0_4px_14px_rgba(12,15,26,0.22)]"
              >
                {page}
              </span>
            ) : (
              <Link
                key={page}
                href={buildHref(basePath, page)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-dark/12 text-sm font-bold text-brand-dark transition-all hover:border-accent-gold hover:bg-accent-gold/8 hover:text-accent-gold"
              >
                {page}
              </Link>
            )
          )}
        </div>

        {/* Next */}
        {currentPage < totalPages ? (
          <Link
            href={buildHref(basePath, currentPage + 1)}
            rel="next"
            className="group flex items-center gap-2 rounded-full border border-brand-dark/15 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-dark transition-all hover:border-accent-gold hover:text-accent-gold"
          >
            Next
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        ) : (
          <span className="flex items-center gap-2 rounded-full border border-black/6 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-black/20 select-none cursor-not-allowed">
            Next
            <ArrowRight size={14} />
          </span>
        )}
      </nav>

      {/* Gold accent bar */}
      <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
    </div>
  );
}
