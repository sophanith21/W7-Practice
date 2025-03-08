import Header from "./components/Header.jsx";
import Scores from "./components/Scores.jsx";
import { JAVA_RESULTS } from "./data.js";
import { HTML_RESULTS } from "./data.js";
import { PYTHON_RESULTS } from "./data.js";
import { ENGLISH_RESULTS } from "./data.js";

function App() {
  return (
    <>
      <Header batchName="PNC batch 2024" />
      <main className="scores-container">
        <Scores courseName="Java" courseResult={JAVA_RESULTS} />
        <Scores courseName="HTML" courseResult={HTML_RESULTS} />
        <Scores courseName="Python" courseResult={PYTHON_RESULTS} />
        <Scores courseName="English" courseResult={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;
