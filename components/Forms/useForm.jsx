import { useState, useEffect } from "react";
import validate from "./validateInfo";

const useForm = (callback) => {
  const [values, setValues] = useState({
    name: "",
    subject: "",
    email: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      callback();
    }
  });

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
