import { mountPage } from "../../app/mountPage";
import { PageHero } from "../../components/PageHero";
import { SiteLayout } from "../../components/SiteLayout";
import { lab1Submissions } from "../../data/labs";

function LabsPage() {
  return (
    <SiteLayout>
      <main>
        <PageHero
          title="Labs"
          copy="Lab deliverables, reports, and documentation for Take the Lead."
        />
        <section className="section-shell reveal" aria-labelledby="lab1-title">
          <h2 id="lab1-title" className="section-title">Lab 1 – Product Description</h2>
          <p className="section-note">
            The most recent version of each team member's Lab 1 is available as a PDF download.
          </p>
          <div className="labs-grid">
            {lab1Submissions.map((submission) => (
              <article key={submission.name} className="landing-card lab-card">
                <h3>{submission.name}</h3>
                <a className="download-btn" href={submission.file} download>
                  Download Lab 1 PDF
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

mountPage(LabsPage);
