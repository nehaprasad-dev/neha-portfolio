"use client";

import type { MouseEvent, ReactNode } from "react";

type RepositoryLinkProps = {
  href: string;
  children: ReactNode;
};

export default function RepositoryLink({ href, children }: RepositoryLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <a href={href} className="repository-link" onClick={handleClick}>
      {children}
    </a>
  );
}
