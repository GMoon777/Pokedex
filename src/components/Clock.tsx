import { useState } from "react";
import React from "react";
export const Clock = () => {
  const [clock, setClock] = useState(new Date().toLocaleString());

  setInterval(() => {
    setClock(new Date().toLocaleString());
  }, 1000);

  return (
      <div className="pl-2">{clock}</div>
  );
};
