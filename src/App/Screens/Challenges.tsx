import * as React from "react";
import { useNavigate } from "react-router-dom";

export const Challenges = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/landingPage/admin/challenges");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Challenges</div>;
};
