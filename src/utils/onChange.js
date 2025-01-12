import { useState } from "react";

export const useChange = (initialState = false) => {
  const [status, changeStatus] = useState(initialState);

  const setStatus = (e) => {
    changeStatus((prevStatus) => !prevStatus);
  };

  return [status, setStatus];
};
