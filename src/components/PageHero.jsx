export function PageHero({ title, copy }) {
  return (
    <section className="hero reveal">
      <p className="eyebrow">CS 410 Workforce Development</p>
      <h1>{title}</h1>
      {copy && <p className="hero-copy">{copy}</p>}
    </section>
  );
}
