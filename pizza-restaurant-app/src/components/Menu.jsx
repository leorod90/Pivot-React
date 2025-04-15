import { PizzaComponent } from "./PizzaComponent";
import { pizzaData } from "../data";

// "." means same folder
// "/" means down a folder
// ".." means up a folder
export const Menu = function () {
  console.log(pizzaData);

  // return is html (NOT ALWAYS)
  // if (condition) {} else {}
  // condition ? code : code
  // if (condition)
  // condition && code

  return (
    <div className="menu-container">
      <h3 className="menu-txt">Menu</h3>
      {/* for loop for array */}
      { 
        pizzaData.length > 0 ?
        pizzaData.map(
          (currentItem) => {
            return (
              <PizzaComponent
                title={currentItem.name}
                description={currentItem.ingredients}
                img={currentItem.photoName}
                price={currentItem.price}
                //pass down soldOut
                soldOut={currentItem.soldOut}
              />
            )
          }
        )
        : <p>Items Coming Soon!</p>
      }
    </div>
  )
}