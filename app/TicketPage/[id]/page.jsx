import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get ticket");
  }

  return res.json();
};

const TicketPage = async ({ params }) => {
  const IS_EDITING = params.id !== "new";
  let data = {};

  if (IS_EDITING) {
    data = (await getTicketById(params.id)).ticket;
  } else {
    data = {
      _id: "new",
    };
  }

  return <TicketForm ticket={data} />;
};

export default TicketPage;
