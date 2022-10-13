import { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/slices/auth";

const BASE_URL = "www.google.com"; // changed because of ToS

export default function CreateToken({}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getEmail = useSelector((state) => state.auth.email);
  const getPassword = useSelector((state) => state.auth.password);

  const dispatch = useDispatch();

  const setTokenHandler = (e) => {
    dispatch(authActions.setToken(e));
  };

  useEffect(() => {
    fetchToken();
    // eslint-disable-next-line
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error...";

  async function fetchToken() {
    const fetchData = qs.stringify({
      grant_type: "password",
      client_id: "nguc.www",
      username: getEmail,
      password: getPassword,
    });

    const config = {
      method: "post",
      mode: "no-cors",
      url: BASE_URL + "/oauth2/user-credentials",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      data: fetchData,
    };
    
    await axios(config)
      .then((response) => {
        setTokenHandler(response.data);
      })
      .catch((error) => {
        console.error("error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

}
