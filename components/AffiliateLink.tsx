import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Optional: track label for later */
  label?: string;
};

export default function AffiliateLink({ href, children, className, label }: Props) {
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <a
      href={href}
      className={className}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "nofollow sponsored noopener noreferrer" : undefined}
      aria-label={label}
    >
      {children}
    </a>
  );
}
