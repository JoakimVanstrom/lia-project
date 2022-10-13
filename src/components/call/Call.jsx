import React, { useState } from "react";
import { useSelector } from "react-redux";
import AnswerCall from "./AnswerCall";
import Timer from "./Timer";

export default function Call({ call }) {
  const queue = useSelector((state) => state.call.queue);

  const [TextColor, setTextColor] = useState("#189927"); // HEX color code

  const getName = queue[queue.findIndex((q) => q.id === call.pbx_queue_id)]?.name
  const removeChar = getName.replace('-----', '')
  const removeChar2 = removeChar.replace('--', '')
  const reduceName = removeChar2?.substring(0, 17);

  return (
    <div key={call.call_guid} className="box-data">
      <div>
        <AnswerCall callId={call.id}/>
      </div>
      <div className="call-number">
        <p>{call.number}</p>
      </div>
      <div className={"call-name"} style={{ color: TextColor }}>
        <p>{reduceName}</p>
      </div>
      <div className="box-time" style={{ color: TextColor }}>
        <Timer added={call.added} setTextColor={setTextColor} />
      </div>
    </div>
  );
}
