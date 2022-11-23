import * as React from "react";
import axios from "axios";
import { baseUrl } from "../Config/Config";
import { adminContext } from "../Providers/AdminProvider";
export const useGetBrandStats = () => {
  const { setBrandStats } = React.useContext(adminContext);
  const GetBrandStats = () => {
    const url = `${baseUrl}/api/admin/feed`;
    const token = window.localStorage.getItem("token");
    var config = {
      method: "get",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response: any) {
        console.log(response.data);
        setBrandStats(response.data);
      })
      .catch(function (response) {
        console.log(response.data);
      });
  };
  return { GetBrandStats };
};
