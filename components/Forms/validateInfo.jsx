import router from "next/router";

const validateInfo = (values) => {
  const errors = {};

  //name
  if (!values.name) {
    errors.name = router.locale === "en" ? "Name is required" : "Masukkan nama";
  }

  //subject
  if (!values.subject) {
    errors.subject =
      router.locale === "en" ? "Subject is required" : "Masukkan Subjek";
  }

  //email
  if (!values.email) {
    errors.email =
      router.locale === "en" ? "Email is required" : "Masukkan email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email =
      router.locale === "en" ? "Email is invalid" : "Email tidak valid";
  }

  if (!values.comment) {
    errors.comment =
      router.locale === "en" ? "Message is required" : "Masukkan pesan";
  } else if (values.comment.length < 10) {
    errors.comment =
      router.locale === "en"
        ? "Message should be at least 10 characters long"
        : "Pesan harus mengandung paling sedikit 10 karakter";
  }

  return errors;
};

export default validateInfo;
