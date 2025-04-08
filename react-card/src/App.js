import './App.css';
import { ImgComponent } from './components/ImgComponent';
import { InfoComponent } from './components/InfoComponent';
// CREATE THE COMPONENTS/ JSX FILES
// IMPORT/EXPORT THEM
// PASS DOWN THE INFO AS PROPS
// USE "PizzaComponent" AS REFERENCE

function App() {
  // STEP 1: CREATE THE CARD IN HTML
  return (
    <div className="App">
      <div className='card'>
        <ImgComponent
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYqYx2CWK5hHFbxaR2f6GBC1Mho_IQicj1Q&s"
        />
        <InfoComponent
          name="Earl"
          info="I like to eat burgers" 
          />
      </div>
    </div>
  );
}

export default App;
