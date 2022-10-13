import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const call = useSelector((state) => state.call.call);

  return (
    <div>
      <div className="userInline">
        <p>Antal samtal i kön: {call.length}</p>
      </div>
      <div className="lineInfo">
        <p>Nummer</p>
        <p>Könamn</p>
        <p>Väntetid</p>
      </div>
    </div>
  );
}
