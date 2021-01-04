import { Router } from "react-router-dom";
import Home from "./route/Home";
import About from "./route/About";
function App() {
  return (
    <div>
      <Router path="/" component={Home} />
      <Router paht="/about" component={About} />
    </div>
  );
}

export default App;
