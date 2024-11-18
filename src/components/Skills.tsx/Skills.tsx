import { SkillsPorps } from "./skills.types";

export const Skills = (props: SkillsPorps) => {
  const { skills } = props;
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </>
  );
};
