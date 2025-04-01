import { PizzaComponent } from "./PizzaComponent";

// "." means same folder
// "/" means down a folder
// ".." means up a folder
export const Menu = function () {
  return (
    <div className="menu-container">
      <h3 className="menu-txt">Menu</h3>
      <PizzaComponent
        title="Cheese Pizza"
        description="Garlic, Cheese, Tomato Sauce"
        img="https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg"
      />
    </div>
  )
}