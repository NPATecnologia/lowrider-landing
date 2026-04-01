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
  gold: "bg-gold-gradient text-bg-void font-semibold hover:brightness-110 shadow-premium",
  outline:
    "border border-gold/30 text-gold hover:border-gold hover:bg-gold-50 transition-colors",
  whatsapp:
    "bg-whatsapp text-white font-semibold hover:brightness-110 shadow-[0_4px_20px_rgba(37,211,102,0.3)]",
};

const sizeStyles: Record<"sm" | "md" | "lg", string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-10 py-4.5 text-base",
};

export default function Button(props: ButtonProps) {
  const {
    variant = "gold",
    size = "md",
    className = "",
    ...rest
  } = props;

  const classes = `
    inline-flex items-center justify-center gap-2
    rounded-full font-display uppercase tracking-wide
    transition-all duration-300 ease-out
    hover:-translate-y-0.5
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim();

  if ("href" in rest && rest.href) {
    return (
      <a
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
