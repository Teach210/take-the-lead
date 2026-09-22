import { mountPage } from "../../app/mountPage";
import { PageHero } from "../../components/PageHero";
import { SiteLayout } from "../../components/SiteLayout";

function ReferencesPage() {
  return (
    <SiteLayout>
      <main>
        <PageHero title="References" copy="Sources used throughout the Take the Lead project." />
        <div className="section-shell reveal">
          <p className="section-note">Source links used in the project will be documented here.</p>
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
        </div>
      </main>
    </SiteLayout>
  );
}

mountPage(ReferencesPage);
