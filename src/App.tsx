import "./App.css";
import { Skills } from "./components/Skills.tsx/Skills";

function App() {
  const skills = ["HTML", "CSS", "JavaScript"];
  return (
    <div className='App'>
      <Skills skills={skills} />
    </div>
  );
}

export default App;
