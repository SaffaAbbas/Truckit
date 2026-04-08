"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

function scrollToQuote() {
  const el = document.getElementById("quote");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function RequestQuoteLink({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Link
      href="/#quote"
      className={className}
      onClick={(e) => {
        onClick?.();

        // Always scroll, even if we're already on /#quote (hash doesn't change).
        if (pathname === "/") {
          e.preventDefault();
          scrollToQuote();
          window.history.replaceState(null, "", "/#quote");
          return;
        }

        // If we're on another page, navigate home then scroll.
        e.preventDefault();
        router.push("/#quote");
        // Let navigation paint, then scroll.
        setTimeout(() => scrollToQuote(), 50);
      }}
    >
      {children}
    </Link>
  );
}

