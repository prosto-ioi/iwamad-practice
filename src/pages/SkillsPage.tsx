import { SkillBadge } from '../components/SkillBadge';
import { skills } from '../data/profile';

export function SkillsPage() {
  return (
    <main className="page-main">
      <section className="card">
        <h1 className="card__name">Skills</h1>
        <p className="card__bio">Что я уже умею и что сейчас изучаю.</p>

        {skills.length > 0 ? (
          <ul className="skills-list">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </ul>
        ) : (
          <p className="empty-message">Skills will be added soon.</p>
        )}
      </section>
    </main>
  );
}