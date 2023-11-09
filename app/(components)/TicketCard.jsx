import DeleteButton from "./DeleteButton";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusBadge from "./StatusBadge";

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-UK", {
      hour: "2-digit",
      minute: "numeric",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex justify-between mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <DeleteButton id={ticket._id} />
      </div>
      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex justify-between mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">{formatTimestamp(ticket.createdAt)}</p>
          <ProgressBar progress={ticket.progress} />
        </div>
        <StatusBadge status={ticket.status} />
      </div>
    </div>
  );
};

export default TicketCard;
