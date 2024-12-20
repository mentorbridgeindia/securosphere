import LoginForm from "@components/LoginForm";
import AppNavbar from "@components/Navbar";
import "./App.scss";
import ColorPaletteShowcase from "@components/Colors";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <LoginForm />
    </div>
  );
}

export default App;