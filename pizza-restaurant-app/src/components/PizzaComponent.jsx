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
      <h1>{title}</h1>
      <p>{description}</p>
      <img
        src={img}
        alt="Girl in a jacket"
        width="500" height="600"
        ></img>
    </div>
  )
}