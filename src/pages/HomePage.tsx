import { ProfileCard } from '../components/ProfileCard';
import { profile, skills } from '../data/profile';

export function HomePage() {
  return (
    <main className="page-main">
      <ProfileCard
        name={profile.name}
        role={profile.role}
        bio={profile.bio}
        avatarUrl={profile.avatarUrl}
        skills={skills}
        email={profile.email}
        githubUrl={profile.githubUrl}
      />
    </main>
  );
}