import { PizzaComponent } from "./PizzaComponent";
import { pizzaData } from "../data";

// "." means same folder
// "/" means down a folder
// ".." means up a folder
export const Menu = function () {
  console.log(pizzaData);

  //return is html (NOT ALWAYS)
  return (
    <div className="menu-container">
      <h3 className="menu-txt">Menu</h3>
      {/* for loop for array */}
      {
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
      }
      {/*
      <PizzaComponent
        title={pizzaData[100].name}
        description={pizzaData[100].ingredients}
        img={pizzaData[100].photoName}
        price={pizzaData[100].price}
      />
      <PizzaComponent
        title={pizzaData[2].name}
        description={pizzaData[2].ingredients}
        img={pizzaData[2].photoName}
        price={pizzaData[2].price}
      /> */}
    </div>
  )
}