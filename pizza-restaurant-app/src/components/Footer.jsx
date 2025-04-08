export const Footer = () => {
  // get today date 
  const today = new Date(); // Mon Mar 31 2025 20:31:48 GMT-0400 (Eastern Daylight Time)
  // will format to a human readable version
  const formattedDate = today.toLocaleString("en-US", {
    timeZone: "America/New_York"
  });
  // create two variables
  // opening time, closing time
  // use 24 clock 
  const openingTime = 9; // 9am
  const closingTime = 22; // 10pm

  // to use js in html {}
  return (
    <div className="footer-container">
      {/* <h3>{formattedDate}</h3> */}
      <h3>Open 9am - 10pm</h3>
      <p>We are currently {
        // notes
        today.getHours() >= openingTime && today.getHours() <= closingTime
        ?  "Open" : "Closed"
      }
      </p>
    </div>
  )
}
