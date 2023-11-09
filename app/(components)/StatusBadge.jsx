const StatusBadge = ({ status }) => {
  const statusColors = {
    "not started": "bg-red-200",
    "in progress": "bg-yellow-200",
    completed: "bg-green-200",
  };

  return (
    <span
      className={`inline-block h-6 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${
        statusColors[status] || "bg-slate-400"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
