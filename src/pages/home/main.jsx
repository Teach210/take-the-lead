import { mountPage } from "../../app/mountPage";
import { SiteLayout } from "../../components/SiteLayout";

function HomePage() {
  return (
    <SiteLayout>
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
      </main>
    </SiteLayout>
  );
}

mountPage(HomePage);
