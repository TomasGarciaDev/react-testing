import { useState, useEffect } from "react";
import { SkillsPorps } from "./skills.types";

export const Skills = (props: SkillsPorps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { skills } = props;

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1500);
  }, []);
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};
