import './App.css';
import { ImgComponent } from './components/ImgComponent';
import { InfoComponent } from './components/InfoComponent';
import { SkillsComponent } from './components/SkillsComponent';
// CREATE THE COMPONENTS/ JSX FILES
// IMPORT/EXPORT THEM
// PASS DOWN THE INFO AS PROPS
// USE "PizzaComponent" AS REFERENCE

const skills = [
  // add two more
  {
    name: "Javascript",
    color: "yellow"
  },
  {
    name: "Css",
    color: "blue"
  },
  {
    name: "React",
    color: "red"
  },
  {
    name: "Riah",
    color: "pink"
  },

];

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
        {/* STEP 1 */}
        {/* Array.map; arrow func inside map
          {/* STEP 2 */}
        {/* arrow func inside map } */}
        {/* STEP 3 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}>
          {skills.map((props) => {
            return (
              <SkillsComponent
                name={props.name}
                color={props.color}
              />
            )
          })}
          {/* <SkillsComponent 
                name="Javascript"
                color="yellow"
              />
               <SkillsComponent 
                name="Css"
                color="blue"
              /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
