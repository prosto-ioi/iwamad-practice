import { profile } from '../data/profile';

export function ContactPage() {
  return (
    <main className="page-main">
      <section className="card">
        <h1 className="card__name">Contact</h1>
        <p className="card__bio">Пиши, если хочешь что-то обсудить.</p>

        <ul className="card__links">
          <li>
            <a className="link-button" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </li>
          <li>
            <a
              className="link-button"
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}