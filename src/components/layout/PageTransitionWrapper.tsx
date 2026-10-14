"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    // When pathname changes (navigating between different routes), smoothly scroll to top
    if (prevPathRef.current !== null && prevPathRef.current !== pathname) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
    prevPathRef.current = pathname;
  }, [pathname]);

  return (
    <div key={pathname} className="flex-1 flex flex-col page-transition-fade">
      {children}
    </div>
  );
}
