import { mountPage } from "../../app/mountPage";
import { PageHero } from "../../components/PageHero";
import { SiteLayout } from "../../components/SiteLayout";
import { lab1Submissions, lab2Section3, lab2Submissions, userManualUrl } from "../../data/labs";

function SubmissionGrid({ submissions, buttonLabel }) {
  return (
    <div className="labs-grid">
      {submissions.map((submission) => (
        <article key={submission.name} className="landing-card lab-card">
          <h3>{submission.name}</h3>
          <a className="download-btn" href={submission.file} download>
            {buttonLabel}
          </a>
        </article>
      ))}
    </div>
  );
}

function LabsPage() {
  return (
    <SiteLayout>
      <main>
        <PageHero
          title="Labs"
          copy="Lab deliverables, reports, and documentation for Take the Lead."
        />
        <section className="section-shell reveal" aria-labelledby="user-manual-title">
          <h2 id="user-manual-title" className="section-title">User Manual - Lab 3 &amp; Lab 4</h2>
          <p className="section-note">
            The Take the Lead User Manual is maintained as the team's GitHub wiki.
          </p>
          <div className="presentation-actions">
            <a className="download-btn" href={userManualUrl} target="_blank" rel="noreferrer">
              Open User Manual
            </a>
          </div>
        </section>

        <section className="section-shell reveal" aria-labelledby="lab1-title">
          <h2 id="lab1-title" className="section-title">Lab 1 – Product Description</h2>
          <p className="section-note">
            The most recent version of each team member's Lab 1 is available as a PDF download.
          </p>
          <SubmissionGrid submissions={lab1Submissions} buttonLabel="Download Lab 1 PDF" />
        </section>

        {lab2Submissions.length > 0 && (
          <section className="section-shell reveal" aria-labelledby="lab2-title">
            <h2 id="lab2-title" className="section-title">Lab 2 – Sections 1 &amp; 2</h2>
            <p className="section-note">
              The most recent version of each team member's Lab 2 Sections 1 and 2 is available as
              a PDF download.
            </p>
            <SubmissionGrid submissions={lab2Submissions} buttonLabel="Download Lab 2 PDF" />
          </section>
        )}

        {lab2Section3 && (
          <section className="section-shell reveal" aria-labelledby="lab2-section3-title">
            <h2 id="lab2-section3-title" className="section-title">Lab 2 – Section 3</h2>
            <p className="section-note">
              The team's most recent version of Lab 2 Section 3 is available as a PDF download.
            </p>
            <div className="presentation-actions">
              <a className="download-btn" href={lab2Section3} download>
                Download Lab 2 Section 3 PDF
              </a>
            </div>
          </section>
        )}
      </main>
    </SiteLayout>
  );
}

mountPage(LabsPage);
