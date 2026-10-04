import type { Skill } from '../components/SkillBadge';

// moved out of App.tsx because Home, Skills and Contact all need this data
export const skills: Skill[] = [
  { id: 1, label: 'HTML' },
  { id: 2, label: 'CSS' },
  { id: 3, label: 'JavaScript' },
  { id: 4, label: 'React' },
  { id: 5, label: 'TypeScript' },
];

export const profile = {
  name: 'Илья',
  role: 'Aspiring Web Developer',
  bio: 'Учусь на 3 курсе в КБТУ и прохожу этот курс, чтобы получить прочную базу в HTML, CSS и JavaScript. Люблю ходить в горы — это лучший способ переключиться после кода. Собираю портфолио проектов, которым буду гордиться к концу семестра.',
  // plain "/photo.jfif" breaks on GitHub Pages, so go through BASE_URL
  avatarUrl: `${import.meta.env.BASE_URL}photo.jfif`,
  email: 'uujtop228@gmail.com',
  githubUrl: 'https://github.com/prosto-ioi',
};
