import axios from "axios";
import { baseUrl } from "../Config/Config";
import { useNavigate } from "react-router-dom";
export const useSignup = () => {
  const navigate = useNavigate();
  const Signup = (
    username: string,
    email: string,
    password: string,
    setToastOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    userType: Readonly<string | undefined>
  ) => {
    const url = `${baseUrl}/api/${userType}s`;

    const data: { [key: string]: any } = {
      [`${userType}`]: { username: username, email: email, password: password },
    };
    var config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (userType !== undefined) {
          window.localStorage.setItem("token", response.data[userType].token);
          window.localStorage.setItem("authUser", userType);
          response.data[userType].token &&
            navigate(`/landingPage/${userType}/feed`);
        }

        console.log(response.data);
        setToastOpen(true);
        setLoading(false);
      })
      .catch(function (response) {
        window.localStorage.setItem("token", "");
        console.log(response.data);
        setToastOpen(true);
        setLoading(false);
      });
  };
  return { Signup };
};
