import { mountPage } from "../../app/mountPage";
import { PageHero } from "../../components/PageHero";
import { SiteLayout } from "../../components/SiteLayout";

function LabsPage() {
  return (
    <SiteLayout>
      <main>
        <PageHero
          title="Labs"
          copy="Lab deliverables, reports, and documentation for Take the Lead."
        />
        <section className="section-shell reveal" aria-labelledby="labs-placeholder-title">
          <h2 id="labs-placeholder-title" className="section-title">Labs Placeholder</h2>
          <p className="section-note">
            Lab deliverables and project documentation will be published here as labs are completed.
          </p>
        </section>
      </main>
    </SiteLayout>
  );
}

mountPage(LabsPage);
