import axios from 'axios'
import qs from 'qs'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/slices/auth'

const BASE_URL = "www.google.com"; // changed because of ToS

const RefreshToken =() => {
    const getToken = useSelector((state) => state.auth.token)
    const getEmail = useSelector((state) => state.auth.email)

    const dispatch = useDispatch();

    const setTokenHandler = (e) => {
        dispatch(authActions.setToken(e));
      };
    
  async function fetchNewToken() {
    const fetchData = qs.stringify({
      grant_type: "password",
      client_id: "nguc.www",
      username: getEmail,
      refresh_token: getToken.refresh_token,
    });
    await axios({
      method: "post",
      mode: "no-cors",
      url: BASE_URL + "/oauth2/user-credentials",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      data: fetchData,
    }).then((response) => {
      setTokenHandler(response.data);
    });
  }
    fetchNewToken();
}

export default RefreshToken
