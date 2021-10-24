import "./App.css";
import ComponentC from "./reactContext/ComponentC";
import { UserProvider } from "./reactContext/UserContext";

export const ThemeContext = React.createContext();
function App() {
  return (
    <div className='App'>
      <UserProvider value='Surendra'>
        <ThemeContext.Provider value={"default"}>
          <ComponentC />
        </ThemeContext.Provider>
      </UserProvider>
    </div>
  );
}

export default App;
