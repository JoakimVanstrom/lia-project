import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Phone from "../../assets/telephone.svg";


const BASE_URL = "https://api-nguc.weblink.se";

export default function AnswerCall({ callId }) {
  const queueId = useSelector((state) => state.call.queueId);
  const getToken = useSelector((state) => state.auth.token);

  const [isValid, setIsValid] = useState(false);

  const config = {
    method: "post",
    mode: "no-cors",
    url: BASE_URL + `/queue/${queueId}/caller/${callId}/pickup`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${getToken.access_token}`,
    },
  };

  async function getCall() {
    if (!isValid) {
      alert("Token is not valid");
    } else {
      const response = await axios(config);
      console.log(response);
    }
  }
  useEffect(() => {
    ValidToken();
    // eslint-disable-next-line
  }, [getToken]);

  function ValidToken() {
    let now = new Date();
    let expireDate = new Date(now.getTime() + getToken?.expires_in * 1000);
    const isValid = expireDate > now;
    return setIsValid(isValid);
  }

  

  return (
    <div>
      <div onClick={getCall} className="img-box">
        <img src={Phone} alt="" />
      </div>
    </div>
  );
}
