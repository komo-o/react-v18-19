import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantStyles = {
  default: "text-blue-600 hover:text-blue-700 hover:underline",
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
};

const sizeStyles = {
  sm: "text-sm px-3 py-1 rounded",
  md: "text-base px-4 py-2 rounded-md",
  lg: "text-lg px-6 py-3 rounded-lg",
};

export default function Link({
  href,
  children,
  variant = "default",
  size = "md",
  className = "",
}: LinkProps) {
  const baseStyles = "inline-block transition-all duration-200";
  const styles =
    variant === "default"
      ? `${baseStyles} ${variantStyles[variant]} ${className}`
      : `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <NextLink href={href} className={styles}>
      {children}
    </NextLink>
  );
}
