import DeleteButton from "./DeleteButton";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusBadge from "./StatusBadge";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex justify-between mb-3">
        <PriorityDisplay />
        <DeleteButton />
      </div>
      <h4>Ticket title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">Ticket description</p>
      <div className="flex-grow"></div>
      <div className="flex justify-between mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">8/11/23 10:43AM</p>
          <ProgressBar />
        </div>
        <StatusBadge />
      </div>
    </div>
  );
};

export default TicketCard;
