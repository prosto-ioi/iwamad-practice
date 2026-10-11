import { useState } from 'react';
import { SkillBadge, type Skill } from './SkillBadge';

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  skills: Skill[];
  email: string;
  githubUrl: string;
};

export function ProfileCard({
  name,
  role,
  bio,
  avatarUrl,
  skills,
  email,
  githubUrl,
}: ProfileCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <article className={`card ${liked ? 'card--liked' : ''}`}>
      <div className="card__top">
        {avatarUrl ? (
          <img className="avatar" src={avatarUrl} alt={`${name}'s profile`} />
        ) : (
          <div className="avatar avatar--fallback" aria-hidden="true">
            {name.charAt(0)}
          </div>
        )}

        <div className="card__heading">
          <h1 className="card__name">{name}</h1>
          <p className="card__role">{role}</p>
        </div>
      </div>

      <p className="card__bio">{bio}</p>

      <div>
        <h2 className="section-title">Skills</h2>

        {skills.length > 0 ? (
          <ul className="skills-list">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </ul>
        ) : (
          <p className="empty-message">Skills will be added soon.</p>
        )}
      </div>

      <ul className="card__links">
        <li>
          <a className="link-button" href={`mailto:${email}`}>
            Email
          </a>
        </li>
        <li>
          <a
            className="link-button"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>

      <button
        className={`like-btn ${liked ? 'like-btn--active' : ''}`}
        type="button"
        aria-pressed={liked}
        onClick={() => setLiked((current) => !current)}
      >
        <span aria-hidden="true">{liked ? '♥' : '♡'}</span>
        {liked ? 'Liked' : 'Like'}
      </button>
    </article>
  );
}
