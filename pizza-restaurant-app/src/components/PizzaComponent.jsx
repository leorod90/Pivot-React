// COMPONENTS are FUNCTIONS
// we can pass PROPS
export const PizzaComponent = (props) => {
  // JSX basically HTML; REACTS VERSION
  // if = ? , else = :
  
  return (
    <div className='card-container'>
      <h1 className="pizza-title">{props.title}</h1>
      <p className="pizza-description">{props.description}</p>
      <img
        src={props.img}
        
        alt={props.title}
        // if else; ? :, styles no spaces. react way!!!
        style={{
          filter: props.soldOut === true ? 'grayscale(100%)' : null
        }} 

        width="500" height="600"
        ></img>
        <h3 className="pizza-price">${props.price}</h3>
    </div>
  )
}