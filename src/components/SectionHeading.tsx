interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">{eyebrow}</p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
