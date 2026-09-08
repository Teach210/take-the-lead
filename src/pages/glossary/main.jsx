import { mountPage } from "../../app/mountPage";
import { PageHero } from "../../components/PageHero";
import { SiteLayout } from "../../components/SiteLayout";

function GlossaryPage() {
  return (
    <SiteLayout>
      <main>
        <PageHero title="Glossary" copy="Definitions for key terms used throughout the project." />
        <div className="section-shell reveal">
          <p className="section-note">Key project terms and definitions are listed here for quick reference.</p>
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
            <li>Add additional project-specific terms and definitions here as they are finalized.</li>
          </ul>
        </div>
      </main>
    </SiteLayout>
  );
}

mountPage(GlossaryPage);
