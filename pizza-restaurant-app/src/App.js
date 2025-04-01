import './App.css';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu"

// reusable block of code 
// const App = () => {}
// const App = function () {}
function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;