export const Footer = (props) => {
  // get today date 
  const today = new Date(); // Mon Mar 31 2025 20:31:48 GMT-0400 (Eastern Daylight Time)
  // will format to a human readable version
  const formattedDate = today.toLocaleString("en-US", {
    timeZone: "America/New_York"
  });

  // Components are functions with props and JSX (HTML + JS); upperCase 
  // Regular Function; lowerCase
  const orderHandler = () => {
    alert("Hello World!");
  }

  // create two variables
  // opening time, closing time
  // use 24 clock 
  const openingTime = 9; // 9am
  const closingTime = 22; // 10pm
  const isOpen = today.getHours() >= openingTime &&
    today.getHours() <= closingTime;

  // to use js in html {}
  return (
    <div className="footer-container">
      {/* <h3>{formattedDate}</h3> */}
      <button
        onClick={orderHandler}
        // hard challenge; if open return false else true
        disabled={isOpen == true ? false : true}
        // to test change closing time
        style={{
          backgroundColor: isOpen == true ? "brown" : "gray"// if open a color else gray
        }}
        className="order-btn">
        Order Now
      </button>
      <h3>Open 9am - 10pm</h3>
      {/* if else; isOpen true "Open" else "Closed" */}
      <p>We are currently {isOpen == true ? "Open" : "Closed"}</p>
    </div>
  )
}
