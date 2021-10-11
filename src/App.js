import logo from "./logo.svg";
import "./App.css";
import Counter from "./hoc/Counter";
import HoverCounter from "./hoc/HoverCounter";

function App() {
  return (
    <div className='App'>
      <Counter />
      <HoverCounter />
    </div>
  );
}

export default App;
