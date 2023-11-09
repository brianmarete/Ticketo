import TicketCard from "./(components)/TicketCard";

const Dashboard = async () => {
  const getTickets = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/Tickets", {
        cache: "no-store",
      });
      return res.json();
    } catch (error) {
      console.log("Failed to fetch tickets", error);
    }
  };

  const tickets = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets.map((ticket) => ticket.category)),
  ];

  return (
    <div className="p-5">
      {tickets &&
        uniqueCategories?.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-4">
            <h2>{category}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
              {tickets
                ?.filter((ticket) => ticket.category === category)
                .map((ticket, ticketIndex) => (
                  <TicketCard
                    id={ticketIndex}
                    key={ticketIndex}
                    ticket={ticket}
                  />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
