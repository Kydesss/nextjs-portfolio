import { ButtonHTMLAttributes, forwardRef } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "sm" | "md";
};

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
    sm: "px-6 py-2.5",
    md: "px-6 py-3",
};

const PrimaryButton = forwardRef<HTMLButtonElement, Props>(function PrimaryButton(
    { size = "md", className = "", children, ...rest },
    ref,
) {
    return (
        <button
            ref={ref}
            style={{
                background: "var(--color-accent)",
                color: "var(--color-paper)",
            }}
            className={`${sizeClasses[size]} rounded-lg font-medium transition-colors duration-200 hover:[background:var(--color-accent-deep)] ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
});

export default PrimaryButton;
