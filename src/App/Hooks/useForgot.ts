import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../Config/Config";
export const useForgot = () => {
  const navigate = useNavigate();
  const Forgot = (
    email: string,
    setToastOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setForgotResponse: React.Dispatch<React.SetStateAction<string>>,
    userType: Readonly<string | undefined>
  ) => {
    const changeScreen = () => {
      navigate(`/resetPassword/${userType}`);
    };
    const url = `${baseUrl}/api/${userType}s/password`;

    const data = {
      [`${userType}`]: { email: email },
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
        setForgotResponse(response.statusText);
        setToastOpen(true);
        setLoading(false);
        setTimeout(changeScreen, 3000);
        console.log(response.statusText);
      })
      .catch(function (response) {
        console.log(response);
        setForgotResponse("");
        setToastOpen(true);
        setLoading(false);
      });
  };
  return { Forgot };
};
