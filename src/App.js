import "./App.css";
import ComponentC from "./reactContext/ComponentC";
import { UserProvider } from "./reactContext/UserContext";

function App() {
  return (
    <div className='App'>
      <UserProvider value='Surendra'>
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
