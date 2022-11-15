import axios from "axios";
import { useNavigate } from "react-router-dom";
export const useResetPassword = () => {
  const navigate = useNavigate();
  const ResetPassword = (
    code: string,
    password: string,
    setToastOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setResetResponse: React.Dispatch<React.SetStateAction<number | null>>
  ) => {
    const changeScreen = () => {
      navigate("/");
    };
    const userType = "brands";
    const baseUrl = `https://project2-p2.herokuapp.com/api/${userType}`;
    const data = {
      brand: {
        password: password,
        reset_password_token: code,
      },
    };
    var config = {
      method: "patch",
      url: `${baseUrl}/password`,
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
