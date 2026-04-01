import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "gold" | "outline" | "whatsapp";

interface ButtonBaseProps {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  gold: "bg-gold-gradient text-bg-void font-semibold hover:brightness-110 shadow-premium hover:shadow-[0_8px_32px_rgba(201,168,76,0.25)]",
  outline:
    "border border-gold/25 text-gold hover:border-gold/60 hover:bg-gold-50 hover:shadow-[0_0_20px_rgba(201,168,76,0.08)]",
  whatsapp:
    "bg-whatsapp text-white font-semibold hover:brightness-110 shadow-[0_4px_20px_rgba(37,211,102,0.3)]",
};

const sizeStyles: Record<"sm" | "md" | "lg", string> = {
  sm: "px-6 py-2.5 text-xs",
  md: "px-8 py-3 text-sm",
  lg: "px-10 py-4 text-sm",
};

export default function Button(props: ButtonProps) {
  const { variant = "gold", size = "md", className = "", ...rest } = props;

  const classes = [
    "inline-flex items-center justify-center gap-2",
    "rounded-full font-display uppercase tracking-widest",
    "transition-all duration-300 ease-out",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    "cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ].join(" ");

  if ("href" in rest && rest.href) {
    return <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
