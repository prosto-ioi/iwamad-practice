import Tag from './ui/Tag';

export type Skill = {
  id: number;
  label: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <li>
      <Tag label={skill.label} />
    </li>
  );
}