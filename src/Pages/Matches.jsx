import MatchCard from "../components/MatchCard";

function Matches() {

  const matchData = [
    {
      teams: "RCB vs CSK",
      date: "10 March 2026, 7:30 PM",
      venue: "Bengaluru",
      price: 800
    },
    {
      teams: "MI vs KKR",
      date: "12 March 2026, 7:30 PM",
      venue: "Mumbai",
      price: 900
    },
    {
      teams: "RR vs SRH",
      date: "15 March 2026, 3:30 PM",
      venue: "Jaipur",
      price: 700
    },
    {
      teams: "CSK vs MI",
      date: "18 March 2026, 7:30 PM",
      venue: "Chennai",
      price: 850
    },
    {
      teams: "RCB vs KKR",
      date: "22 March 2026, 7:30 PM",
      venue: "Bengaluru",
      price: 850
    }
  ];

  return (
    <section id="matches">
      <h2>IPL 2026 Match Schedule</h2>

      {matchData.map((match, index) => (
        <MatchCard
          key={index}
          teams={match.teams}
          date={match.date}
          venue={match.venue}
          price={match.price}
        />
      ))}
    </section>
  );
}

export default Matches;