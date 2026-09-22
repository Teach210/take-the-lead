import { useEffect } from "react";
import { navigationItems, sitePath } from "../data/navigation";

export function SiteLayout({ children }) {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 90}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      <div className="bg-shape bg-shape-one" aria-hidden="true"></div>
      <div className="bg-shape bg-shape-two" aria-hidden="true"></div>

      <header className="site-header">
        <nav className="nav" aria-label="Main Navigation">
          <a className="brand" href={sitePath()}>Take the Lead</a>
          <div className="nav-links">
            {navigationItems.map((item) => (
              <a key={item.href} className="nav-link" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {children}

      <footer className="site-footer">
        <small>&copy; {year} Take the Lead</small>
        <div className="footer-meta" aria-label="Academic Links">
          <a className="footer-link" href="https://www.odu.edu/" target="_blank" rel="noreferrer">
            Old Dominion University
          </a>
          <a
            className="footer-link"
            href="https://www.odu.edu/computer-science"
            target="_blank"
            rel="noreferrer"
          >
            ODU Computer Science Department
          </a>
        </div>
      </footer>
    </>
  );
}
