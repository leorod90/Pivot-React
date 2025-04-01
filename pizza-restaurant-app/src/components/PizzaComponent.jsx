// COMPONENTS are FUNCTIONS
// we can pass PROPS
export const PizzaComponent = ({
  title,
  description,
  img
}) => {
  // JSX basically HTML; REACTS VERSION
  return (
    <div className='card-container'>
      <h1 className="pizza-title">{title}</h1>
      <p className="pizza-description">{description}</p>
      <img
        src={img}
        alt="Girl in a jacket"
        width="500" height="600"
        ></img>
    </div>
  )
}