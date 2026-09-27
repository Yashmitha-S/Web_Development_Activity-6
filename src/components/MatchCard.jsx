function MatchCard(props) {
  return (
    <div className="match-card">
      <h3>{props.teams}</h3>

      <p><strong>Date:</strong> {props.date}</p>

      <p><strong>Venue:</strong> {props.venue}</p>

      <p><strong>General Ticket:</strong> ₹{props.price}</p>

      <button>Book Now</button>
    </div>
  );
}

export default MatchCard;