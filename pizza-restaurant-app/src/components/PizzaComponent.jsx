// COMPONENTS are FUNCTIONS
// we can pass PROPS
export const PizzaComponent = ({
  title,
  description,
  img,
  price,
  soldOut
}) => {
  // JSX basically HTML; REACTS VERSION
  // if = ? , else = :
  
  return (
    <div className='card-container'>
      <h1 className="pizza-title">{title}</h1>
      <p className="pizza-description">{description}</p>
      <img
        src={img}
        alt={title}
        // if else; ? :, styles no spaces. react way!!!
        style={{
          filter: soldOut === true ? 'grayscale(100%)' : null
        }} 
        width="500" height="600"
        ></img>
        <h3 className="pizza-price">${price}</h3>
    </div>
  )
}