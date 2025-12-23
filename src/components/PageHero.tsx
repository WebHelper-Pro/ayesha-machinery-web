interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
}: PageHeroProps) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="page-hero-overlay">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
