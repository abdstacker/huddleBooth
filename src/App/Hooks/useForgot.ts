import axios from "axios";
import { useNavigate } from "react-router-dom";
export const useForgot = () => {
  const navigate = useNavigate();
  const Forgot = (
    email: string,
    setToastOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setForgotResponse: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const changeScreen = () => {
      navigate("/resetPassword");
    };
    const userType = "brands";
    const baseUrl = `https://project2-p2.herokuapp.com/api/${userType}`;

    const data = {
      brand: { email: email },
    };
    var config = {
      method: "post",
      url: `${baseUrl}/password`,
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
