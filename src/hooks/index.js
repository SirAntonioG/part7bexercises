import { useState } from "react";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    if (type === "text" || type === "date") {
      setValue("");
    } else if (type === "number") {
      setValue(0);
    }
  };

  return {
    type,
    value,
    onChange,
    reset,
  };
};
