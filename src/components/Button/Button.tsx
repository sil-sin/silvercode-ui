import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const styles: Record<string, React.CSSProperties> = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "background-color 0.2s, border-color 0.2s",
    border: "1px solid transparent",
    fontFamily: "inherit",
  },
  primary: {
    backgroundColor: "#0969da",
    color: "#ffffff",
    borderColor: "#0969da",
  },
  secondary: {
    backgroundColor: "#6c757d",
    color: "#ffffff",
    borderColor: "#6c757d",
  },
  outline: {
    backgroundColor: "transparent",
    color: "#0969da",
    borderColor: "#0969da",
  },
  sm: { padding: "4px 12px", fontSize: "12px" },
  md: { padding: "8px 16px", fontSize: "14px" },
  lg: { padding: "12px 24px", fontSize: "16px" },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", style, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        style={{
          ...styles.base,
          ...styles[variant],
          ...styles[size],
          ...style,
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
