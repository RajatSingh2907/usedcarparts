import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
};

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const isDark = theme === "dark";

  return (
    <div className={cx("max-w-3xl", alignClass, className)}>
      {eyebrow ? (
        <div
          className={cx(
            "mb-4",
            align === "center" ? "flex justify-center" : "flex"
          )}
        >
          <span
            className={cx(
              "inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest",
              isDark ? "text-cyan-400" : "text-cyan-700"
            )}
          >
            {eyebrow}
          </span>
        </div>
      ) : null}

      <h2
        className={cx(
          "text-2xl font-bold leading-tight sm:text-3xl md:text-4xl",
          isDark ? "text-white" : "text-secondary"
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cx(
            "mt-4 text-sm leading-7 sm:text-base",
            isDark ? "text-slate-300" : "text-muted"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}