const { useEffect } = React;

const styles = `
:root {
  --ink: #1e2738;
  --ink-soft: #4a556e;
  --paper: #f9f8f3;
  --card: rgba(255, 255, 255, 0.84);
  --line: rgba(30, 39, 56, 0.12);
  --teal: #176b74;
  --gold: #cb8d1f;
  --gold-soft: #f2d9aa;
  --shadow: 0 16px 34px rgba(16, 22, 36, 0.12);
  --radius: 18px;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  color: var(--ink);
  font-family: "Manrope", "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at 10% 15%, rgba(23, 107, 116, 0.17), transparent 34%),
    radial-gradient(circle at 88% 4%, rgba(203, 141, 31, 0.2), transparent 36%),
    linear-gradient(160deg, #fffdf7 0%, #f6f8fb 52%, #edf4f7 100%);
  line-height: 1.55;
  overflow-x: hidden;
}

.bg-shape {
  position: fixed;
  z-index: -1;
  border-radius: 999px;
  opacity: 0.45;
  animation: drift 9s ease-in-out infinite alternate;
}

.bg-shape-one {
  width: 240px;
  height: 240px;
  top: -72px;
  right: -58px;
  background: linear-gradient(145deg, #f1ca7d, #f4e8c7);
}

.bg-shape-two {
  width: 180px;
  height: 180px;
  left: -48px;
  bottom: 14%;
  background: linear-gradient(145deg, #4da3ab, #cae7ea);
  animation-delay: 1.2s;
}

.site-header,
main,
.site-footer {
  width: min(1100px, 92vw);
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(6px);
}

.nav {
  margin-top: 0.65rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--line);
  box-shadow: 0 12px 24px rgba(16, 22, 36, 0.08);
  border-radius: 999px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.2rem;
}

.brand {
  text-decoration: none;
  color: var(--ink);
  font-family: "Fraunces", Georgia, serif;
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
}

.nav-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.nav-link {
  text-decoration: none;
  color: var(--ink);
  font-weight: 700;
  font-size: 0.94rem;
  border-bottom: 2px solid transparent;
  transition: border-color 180ms ease;
}

.nav-link:hover {
  border-color: var(--teal);
}

.hero {
  padding: 5.2rem 0 3rem;
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: var(--teal);
  font-size: 0.82rem;
}

h1,
h2,
h3 {
  font-family: "Fraunces", Georgia, serif;
  margin: 0;
  line-height: 1.08;
}

h1 {
  margin-top: 0.65rem;
  font-size: clamp(2rem, 4.5vw, 3.6rem);
  max-width: 17ch;
}

.hero-copy {
  margin: 1rem 0 0;
  max-width: 60ch;
  color: var(--ink-soft);
}

.section-shell {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1.4rem;
  margin-bottom: 1.35rem;
}

.section-title {
  margin-bottom: 0.65rem;
  font-size: clamp(1.45rem, 2.4vw, 2rem);
}

.section-note {
  margin: 0;
  color: var(--ink-soft);
}

.landing-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.landing-card {
  border: 1px solid var(--line);
  border-radius: 14px;
  background: linear-gradient(180deg, #fff 0%, var(--paper) 100%);
  padding: 1rem;
}

.landing-card h3 {
  margin-bottom: 0.55rem;
  font-size: 1.05rem;
}

.landing-card p {
  margin: 0;
  color: var(--ink-soft);
}

.presentation-frame {
  width: 100%;
  height: min(62vw, 560px);
  min-height: 320px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #fff;
}

.presentation-actions {
  margin-top: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: 1px solid rgba(23, 107, 116, 0.25);
  background: linear-gradient(140deg, #1b7882 0%, #176b74 100%);
  color: #fff;
  font-weight: 700;
  font-size: 0.93rem;
  letter-spacing: 0.01em;
  border-radius: 12px;
  padding: 0.64rem 0.96rem;
  box-shadow: 0 8px 20px rgba(23, 107, 116, 0.24);
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.download-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 24px rgba(23, 107, 116, 0.3);
}

.download-note {
  color: var(--ink-soft);
  font-size: 0.9rem;
}

.references-list {
  margin: 0.75rem 0 0;
  padding-left: 1.2rem;
  color: var(--ink-soft);
}

.references-list li + li {
  margin-top: 0.55rem;
}

.references-list a {
  color: var(--teal);
  text-decoration: none;
  border-bottom: 1px solid rgba(23, 107, 116, 0.35);
}

.references-list a:hover {
  border-bottom-color: var(--teal);
}

.glossary-list {
  margin: 0.75rem 0 0;
  padding-left: 1.2rem;
  color: var(--ink-soft);
}

.glossary-list li + li {
  margin-top: 0.6rem;
}

.glossary-term {
  color: var(--ink);
  font-weight: 700;
}

.frame-help {
  margin-top: 0.8rem;
  font-size: 0.94rem;
  color: var(--ink-soft);
}

.bios-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.bio-card {
  border: 1px solid var(--line);
  border-radius: 14px;
  background: linear-gradient(180deg, #fff 0%, var(--paper) 100%);
  overflow: hidden;
}

.bio-photo {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.bio-content {
  padding: 1rem;
}

.bio-role {
  margin: 0.35rem 0 0.55rem;
  color: var(--gold);
  font-size: 0.9rem;
  font-weight: 700;
}

.bio-text {
  margin: 0;
  color: var(--ink-soft);
}

.site-footer {
  padding: 0.7rem 0 1.7rem;
  color: rgba(30, 39, 56, 0.72);
}

.footer-meta {
  margin-top: 0.45rem;
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
}

.footer-link {
  text-decoration: none;
  color: var(--teal);
  border-bottom: 1px solid rgba(23, 107, 116, 0.35);
  font-weight: 600;
}

.footer-link:hover {
  border-bottom-color: var(--teal);
}

.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 520ms ease, transform 520ms ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes drift {
  from {
    transform: translateY(0) translateX(0) scale(1);
  }
  to {
    transform: translateY(16px) translateX(-8px) scale(1.04);
  }
}

@media (max-width: 900px) {
  .site-header {
    position: static;
  }

  .nav {
    border-radius: 18px;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
  }

  .hero {
    padding: 2.6rem 0 1.5rem;
  }

  .bios-grid {
    grid-template-columns: 1fr;
  }

  .landing-grid {
    grid-template-columns: 1fr;
  }

  .presentation-frame {
    min-height: 260px;
  }
}
`;

const teamMembers = [
  {
    name: "Siam Siam",
    bio: "Siam is a senior Computer Science student expected to graduate in Fall 2026. He was raised in Newport News, Virginia, and graduated from Warwick High School. Outside of school, he enjoys creating art, working out, fashion, and playing the guitar.",
    image: "images/Siam Siam.png"
  },
  {
    name: "Madeline Lacey",
    bio: "Madeline is a Computer Science student expected to graduate in 2026. She was born in Pasadena, California, and moved to Virginia Beach in 2017. She attended Tidewater Community College for an associate degree and continued her education at Old Dominion University.",
    image: "images/Madeline Lacey.png"
  },
  {
    name: "Jordan Lopez",
    bio: "Jordan is a Computer Science student born in Hampton, Virginia, and is expected to graduate in Fall 2026. He is currently employed at Huntington Ingalls Industries as a software developer with project manager responsibilities.",
    image: "images/Jordan Lopez.png"
  },
  {
    name: "Jaden Evans",
    bio: "Jaden is a senior Computer Science major at Old Dominion University and a Virginia Beach native. He graduated from Green Run Collegiate in 2022 and expects to graduate from ODU in Fall 2026. He enjoys software development, cooking, and writing.",
    image: "images/Jaden Evans.png"
  },
  {
    name: "Jermaine Lockett",
    bio: "Jermaine is a Computer Science student currently working for Systems Group as a consultant. Outside of school, he enjoys biking, cars, homelabbing, and cooking.",
    image: "images/Jermaine Lockett.png"
  },
  {
    name: "Harrison Basil",
    bio: "Harrison is a Computer Science student working for Systems Group as a system administrator.",
    image: "images/Harrison Basil.png"
  }
];

function App() {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);

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

    return () => {
      observer.disconnect();
      styleTag.remove();
    };
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      <div className="bg-shape bg-shape-one" aria-hidden="true"></div>
      <div className="bg-shape bg-shape-two" aria-hidden="true"></div>

      <header className="site-header">
        <nav className="nav" aria-label="Main Navigation">
          <a className="brand" href="#home">Take the Lead</a>
          <div className="nav-links">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#presentations">Presentations</a>
            <a className="nav-link" href="#team-bio">Team Bio</a>
            <a className="nav-link" href="#references">References</a>
            <a className="nav-link" href="#glossary">Glossary</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero reveal">
          <p className="eyebrow">CS 410 Workforce Development</p>
          <h1>Take the Lead</h1>
          <p className="hero-copy">
            A platform that helps pet owners fund urgent veterinary care while improving
            access to reliable support resources.
          </p>
        </section>

        <section className="section-shell reveal" aria-labelledby="home-landing-title">
          <h2 id="home-landing-title" className="section-title">Home / Landing</h2>
          <div className="landing-grid">
            <article className="landing-card">
              <h3>Elevator Pitch</h3>
              <p>
                Take the Lead is a donation-based platform designed to help pet owners address
                urgent veterinary expenses. The platform supports 30-day campaigns so owners can
                raise funds quickly and reduce delays in accessing treatment.
              </p>
            </article>
            <article className="landing-card">
              <h3>Problem Description</h3>
              <p>
                Pet care is costly, and many owners lack access to timely financial support and
                reliable health information. Veterinary care is often necessary, yet available
                funding options and trusted guidance are limited or difficult to navigate.
              </p>
            </article>
            <article className="landing-card">
              <h3>Customer and End User</h3>
              <p>
                The primary users are pet owners managing emergency or unexpected veterinary
                costs. Secondary users include veterinary providers who need a transparent process
                for verifying care and receiving campaign-supported payments.
              </p>
            </article>
            <article className="landing-card">
              <h3>Solution Statement</h3>
              <p>
                Take the Lead delivers a secure, centralized platform for funding urgent pet
                medical care while improving access to practical resources, including pet health
                information, insurance guidance, and care support services.
              </p>
            </article>
          </div>
        </section>

        <section
          id="presentations"
          className="section-shell reveal"
          aria-labelledby="presentations-title"
        >
          <h2 id="presentations-title" className="section-title">Presentations</h2>
          <p className="section-note">
            Embedded Working Draft Feasibility Presentation.
          </p>
          <iframe
            className="presentation-frame"
            title="Working Draft Feasibility Presentation"
            src="https://docs.google.com/presentation/d/1fMT1mr5lzd49JsqnMI66UK1awXY30v3f7sXNBwCdtjw/embed?start=false&loop=false&delayms=3000"
            allowFullScreen
          ></iframe>
          <div className="presentation-actions" aria-label="Presentation Downloads">
            <a
              className="download-btn"
              href="https://docs.google.com/presentation/d/1fMT1mr5lzd49JsqnMI66UK1awXY30v3f7sXNBwCdtjw/export/pdf"
              download
            >
              Download Presentation PDF
            </a>
            <span className="download-note">Downloads the latest Google Slides version as a PDF.</span>
          </div>
          {/*
          <p className="frame-help">
            If the deck does not display, set sharing to <code>Anyone with the link</code>
            or publish it to the web in Google Slides.
          </p>
          */}
        </section>

        <section id="team-bio" className="section-shell reveal" aria-labelledby="team-bio-title">
          <h2 id="team-bio-title" className="section-title">Team Bio</h2>
          <p className="section-note">
            All bios are written in a consistent third-person style. 
          </p>
          <div className="bios-grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="bio-card">
                <img className="bio-photo" src={member.image} alt={`${member.name} portrait`} />
                <div className="bio-content">
                  <h3>{member.name}</h3>
                  <p className="bio-text">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="references" className="section-shell reveal" aria-labelledby="references-title">
          <h2 id="references-title" className="section-title">References</h2>
          <p className="section-note">
            Source links used in the project will be documented here.
          </p>
          <ul className="references-list">
            <li>
              Google Slides Working Deck: Take the Lead Presentation (link temporarily hidden until final citation review)
            </li>
            <li>
              <a href="https://www.nomv.org/" target="_blank" rel="noreferrer">Not One More Vet</a>.
              "Veterinary Profession Mental Wellness." 2025. Accessed 12 Mar. 2026.
            </li>
            <li>
              Add additional citations for data points, statistics, and external resources used in the proposal.
            </li>
          </ul>
        </section>

        <section id="glossary" className="section-shell reveal" aria-labelledby="glossary-title">
          <h2 id="glossary-title" className="section-title">Glossary</h2>
          <p className="section-note">
            Key project terms and definitions are listed here for quick reference.
          </p>
          <ul className="glossary-list">
            <li>
              <span className="glossary-term">TAM (Total Addressable Market):</span> The full
              market demand for the product or service.
            </li>
            <li>
              <span className="glossary-term">SAM (Serviceable Addressable Market):</span> The
              segment of TAM that can be targeted with the current solution.
            </li>
            <li>
              <span className="glossary-term">SOM (Serviceable Obtainable Market):</span> The
              realistic portion of SAM that can be captured in the near term.
            </li>
            <li>
              Add additional project-specific terms and definitions here as they are finalized.
            </li>
          </ul>
        </section>
      </main>

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
