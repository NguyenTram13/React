import { useState } from "react";

export default function useHandleChange(initalValues) {
  const [values, setValues] = useState();
  const handleChange = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    values,
    handleChange,
  };
}
