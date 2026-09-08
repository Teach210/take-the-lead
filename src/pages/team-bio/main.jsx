import { mountPage } from "../../app/mountPage";
import { PageHero } from "../../components/PageHero";
import { SiteLayout } from "../../components/SiteLayout";
import { teamMembers } from "../../data/teamMembers";

function TeamBioPage() {
  return (
    <SiteLayout>
      <main>
        <PageHero title="Team Bio" copy="Meet the Take the Lead project team." />
        <div className="section-shell reveal">
          <p className="section-note">All bios are written in a consistent third-person style.</p>
          <div className="bios-grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="bio-card">
                <img className="bio-photo" src={member.image} alt={`${member.name} portrait`} />
                <div className="bio-content">
                  <h2>{member.name}</h2>
                  <p className="bio-text">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}

mountPage(TeamBioPage);
