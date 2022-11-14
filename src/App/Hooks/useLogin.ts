import axios from "axios";
export const useLogin = () => {
  const Login = (
    email: string,
    password: string,
    setToastOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const userType = "brands";
    const baseUrl = `https://project2-p2.herokuapp.com/api/${userType}`;

    const data: { [key: string]: any } = {
      brand: { email: email, password: password },
    };
    var config = {
      method: "post",
      url: `${baseUrl}/login.json`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        window.localStorage.setItem("token", response.data.token);
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
  return { Login };
};
