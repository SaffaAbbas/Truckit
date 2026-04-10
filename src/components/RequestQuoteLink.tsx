"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

function scrollToQuote() {
  const el = document.getElementById("quote");
  if (!el) return;

  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const extraPadding = 12; // keep section comfortably below fixed header

  const top =
    window.scrollY + el.getBoundingClientRect().top - headerHeight - extraPadding;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
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

