import Link from "next/link";
import React from "react";

function PageLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <span>
      <Link
        href={href}
        className="text-primary underline decoration-wavy decoration-1 underline-offset-2 hover:text-primary/80"
      >
        {children}
      </Link>
    </span>
  );
}

export default PageLink;
