export const Footer = () => {
  // get today date 
  const today = new Date(); // Mon Mar 31 2025 20:31:48 GMT-0400 (Eastern Daylight Time)
  // will format to a human readable version
  const formattedDate = today.toLocaleString("en-US", {
    timeZone: "America/New_York"
  });

  // to use js in html {}
  return (
    <div>
      <h3>{formattedDate}</h3>
    </div>
  )
}
