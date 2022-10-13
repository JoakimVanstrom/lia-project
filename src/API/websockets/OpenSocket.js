import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callActions } from "../../store/slices/call";

let websocket;

export default function OpenSocket() {


  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  let calls = [];
  let queueCache = [];

  const setCallHandler = (e) => {
    dispatch(callActions.setCall(e));
  };

  const setQueueIdHandler = (e) => {
    dispatch(callActions.setQueueId(e));
  };

  const setQueueHandler = (e) => {
    dispatch(callActions.setQueue(e));
  };

  useEffect(() => {
    websocket = new WebSocket(
      "wss://event-nguc.weblink.se" // changed because of ToS
    );

    websocket.onopen = (event) => {
      let data = `["[\\"authenticate\\",{\\"authorization\\":\\"authorization ${token?.access_token}\\"}]"]`;
      websocket.send(data);
    };

    websocket.onmessage = (event) => {
      try {
        if (event.data.toLowerCase()[0] === "a") {
          let s = JSON.parse(event.data.substring(1, event.data.length));
          let json = JSON.parse(s[0]);

          switch (json[0]) {
            case "Queue":
              let call = json[1].callers;
              let queue = json[1].queue;
              // eslint-disable-next-line
              callHandler(call, queue);

              break;

            default:
          }
        }
      } catch (e) {
        console.error(e);
      }
    };
    // eslint-disable-next-line
  }, [token]);

  const callHandler = (call, queue) => {
    calls = calls.filter((x) => x.pbx_queue_id !== queue.id);
    calls.push(...call);

    if (queueCache.findIndex((x) => x.id === queue.id) === -1) {
      queueCache.push(queue);
      setQueueHandler([...queueCache]);
    } else {
      queueCache[queueCache.findIndex((x) => x.id === queue.id)] = queue;
    }

    setCallHandler(calls);
    setQueueIdHandler(queue.id);
  };
}
