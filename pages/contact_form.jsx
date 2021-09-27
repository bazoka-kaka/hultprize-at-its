import Head from "next/head";
import emailjs from "emailjs-com";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useForm from "../components/Forms/useForm";
import { useState } from "react";

export default function EmailPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  function submitData() {
    setIsSubmitting(true);
  }
  async function handleOnSubmit(e) {
    emailjs
      .sendForm(
        "service_6jyr95q",
        "template_thi5ngs",
        e.target,
        "user_I98ewIOLbrtF1kmYEwLSw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Email is sent!");
  }

  const { handleChange, values, handleSubmit, errors } = useForm(submitData);
  return (
    <div
      className={`bg-black text-white overflox-x-hidden overflow-y-hidden flex flex-col justify-center align-center`}
      style={{ minHeight: "100vh" }}
    >
      <Head>
        <title>{t("email:title")}</title>
        <meta name="description" content="contact form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="absolute text-lg top-2 left-2">
        {router.locales.map((locale) => {
          return (
            <Link key={locale} href={router.asPath} locale={locale}>
              <a>
                {locale}
                {locale === "en" ? " | " : ""}
              </a>
            </Link>
          );
        })}
      </header>

      <main className="flex flex-col self-center px-10 py-10 md:w-1/2">
        <h1 className="text-6xl text-center">{t("email:contact-form")}</h1>
        <div className="self-center mt-10 text-lg w-80">
          <style jsx>
            {`
              label {
                display: block;
                margin-bottom: 0.2em;
              }

              .button1 {
                background: linear-gradient(
                  80.86deg,
                  #db0a7f -9.3%,
                  #ec83bd 125.39%
                );
              }
              .button2 {
                background-color: black;
                color: white;
                border-color: #db0a7f;
              }
            `}
          </style>
          <form
            className="self-center px-10 text-left w-80"
            method="post"
            onSubmit={!isSubmitting ? handleSubmit : handleOnSubmit}
          >
            <p>
              <label htmlFor="name">{t("email:name")}</label>
              <input
                id="name"
                className="text-black rounded-md"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-sm text-red-400">{errors.name}</p>
              )}
            </p>
            <p>
              <label htmlFor="subject">{t("email:subject")}</label>
              <input
                id="subject"
                className="text-black rounded-md text-md"
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <p className="text-sm text-red-400">{errors.subject}</p>
              )}
            </p>
            <p>
              <label htmlFor="email">{t("email:user-mail")}</label>
              <input
                id="email"
                className="text-black rounded-md text-md"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-sm text-red-400">{errors.email}</p>
              )}
            </p>
            <p>
              <label htmlFor="comment">{t("email:message")}</label>
              <textarea
                id="comment"
                className="w-64 text-black rounded-md resize text-md"
                name="comment"
                value={values.comment}
                onChange={handleChange}
              />
              {errors.comment && (
                <p className="text-sm text-red-400">{errors.comment}</p>
              )}
            </p>
            <button
              className={`${
                router.locale === "en" ? "px-5" : "px-6"
              } py-1 mt-4 mr-4 duration-150 transform button1 hover:scale-110 rounded-xl`}
            >
              {t("email:submit")}
            </button>
            <button
              type="button"
              className="px-4 py-1 mt-4 duration-150 transform border-2 hover:scale-110 rounded-xl"
              style={{ borderColor: "#db0a7f" }}
            >
              <Link href="/">{t("email:back")}</Link>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
