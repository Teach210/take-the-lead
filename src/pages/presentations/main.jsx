import { mountPage } from "../../app/mountPage";
import { PageHero } from "../../components/PageHero";
import { SiteLayout } from "../../components/SiteLayout";

function PresentationsPage() {
  return (
    <SiteLayout>
      <main>
        <PageHero
          title="Presentations"
          copy="Project presentations and supporting materials for Take the Lead."
        />
        <div className="section-shell reveal">
          <p className="section-note">Embedded Working Draft Feasibility Presentation.</p>
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
        </div>
      </main>
    </SiteLayout>
  );
}

mountPage(PresentationsPage);
