import React from "react";
import Call from "./Call";
import { useSelector } from "react-redux";

export default function CallList() {
  const CurrentCalls = useSelector((state) => state.call.call);
  let sorted = [...CurrentCalls].sort((a, b) => {
    return new Date(a.added) - new Date(b.added);
  });

  // let test = [...CurrentCalls].find((call) => call.number === "0727455718");

  // console.log(test);

  return (
    <div className="box-info">
      {sorted.map((call) => (
        <div key={call.call_guid}>
          <Call call={call} />
        </div>
      ))}
    </div>
  );
}
