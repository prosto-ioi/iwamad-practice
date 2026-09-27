import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { Footer } from './components/Footer';
import type { Skill } from './components/SkillBadge';


const skills: Skill[] = [
  { id: 1, label: 'HTML' },
  { id: 2, label: 'CSS' },
  { id: 3, label: 'JavaScript' },
  { id: 4, label: 'React' },
  { id: 5, label: 'TypeScript' },
];

const profile = {
  name: 'Илья',
  role: 'Aspiring Web Developer',
  bio: 'Учусь на 3 курсе в КБТУ и прохожу этот курс, чтобы получить прочную базу в HTML, CSS и JavaScript. Люблю ходить в горы — это лучший способ переключиться после кода. Собираю портфолио проектов, которым буду гордиться к концу семестра.',
  avatarUrl: '/photo-placeholder.svg',
};

function App() {
  return (
    <>
      <Header title="Week 3 · React + TypeScript Profile Card" />

      <main className="page-main">
        <ProfileCard
          name={profile.name}
          role={profile.role}
          bio={profile.bio}
          avatarUrl={profile.avatarUrl}
          skills={skills}
          email="uujtop228@gmail.com"
          githubUrl="https://github.com/prosto-ioi"
        />
      </main>

      <Footer year={2026} name={profile.name} />
    </>
  );
}

export default App;
