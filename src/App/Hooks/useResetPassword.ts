import axios from "axios";
import { baseUrl } from "../Config/Config";
import { useNavigate } from "react-router-dom";
export const useResetPassword = () => {
  const navigate = useNavigate();
  const ResetPassword = (
    code: string,
    password: string,
    setToastOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setResetResponse: React.Dispatch<React.SetStateAction<number | null>>,
    userType: Readonly<string | undefined>
  ) => {
    const changeScreen = () => {
      navigate(`/login/${userType}`);
    };

    const url = `${baseUrl}/api/${userType}s/password`;
    const data = {
      [`${userType}`]: {
        password: password,
        reset_password_token: code,
      },
    };
    var config = {
      method: "patch",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setResetResponse(response.status);
        setToastOpen(true);
        setLoading(false);
        setTimeout(changeScreen, 3000);
        console.log(response);
      })
      .catch(function (response) {
        setResetResponse(null);
        console.log(response);
        setToastOpen(true);
        setLoading(false);
      });
  };
  return { ResetPassword };
};
