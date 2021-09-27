import Head from "next/head";
import styles from "../styles/Home.module.scss";
import ScrollDownArrow from "../components/ScrollDown";
import UnstyledLink from "../components/UnstyledLink";
import ImageSlider from "../components/Slider";
import Navbar from "../components/Navbar/Navbar";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import useTranslation from "next-translate/useTranslation";
import { ReactYouTubeLite } from "react-youtube-lite";
import Link from "next/link";
import Image from "next/image";
import buildUrl from "cloudinary-build-url";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const mainBgBlurred = buildUrl("main-bg_a8s5hk", {
    cloud: {
      cloudName: "kaka777",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  const eventsBgBlurred = buildUrl("events-bg_rhme7l", {
    cloud: {
      cloudName: "kaka777",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  const event1Blurred = buildUrl("events1_lpdbuf", {
    cloud: {
      cloudName: "kaka777",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  const event2Blurred = buildUrl("events2_ovbqvl", {
    cloud: {
      cloudName: "kaka777",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  // const event3Blurred = buildUrl("events3_zkrs8q", {
  //   cloud: {
  //     cloudName: "kaka777",
  //   },
  //   transformations: {
  //     effect: "blur:1000",
  //     quality: 1,
  //   },
  // });
  const event4Blurred = buildUrl("events4_en7ckp", {
    cloud: {
      cloudName: "kaka777",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  const hultprize1Blurred = buildUrl("hultprize1_ln1tna", {
    cloud: {
      cloudName: "kaka777",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  const hultprize2Blurred = buildUrl("hultprize2_metvzz", {
    cloud: {
      cloudName: "kaka777",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  const hultprize3Blurred = buildUrl("hultprize3_lmrohh", {
    cloud: {
      cloudName: "kaka777",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  const hultprize4Blurred = buildUrl("hultprize4_aeeqlp", {
    cloud: {
      cloudName: "kaka777",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  const hultprize5Blurred = buildUrl("hultprize5_il4q07", {
    cloud: {
      cloudName: "kaka777",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  const hultprize6Blurred = buildUrl("hultprize6_eyiinw", {
    cloud: {
      cloudName: "kaka777",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  const buildingBgBlurred = buildUrl("building-bg_ajkg4z", {
    cloud: {
      cloudName: "kaka777",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  let { t } = useTranslation();

  return (
    <div>
      <div className="fixed z-50 w-full">
        <Navbar />
      </div>
      <Head>
        <title>Hult Prize at Institut Teknologi Sepuluh Nopember</title>
        <meta name="keywords" content="hultprizeatits" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <main className="overflow-hidden">
        <section id="home" className={`relative`}>
          <article
            className={`flex justify-center pt-16 px-10 md:px-24 flex-col items-left gap-8 text-white py-6 md:pt-12 md:gap-12 min-h-screen layout`}
            style={{ backgroundColor: "#333" }}
          >
            <Image
              layout="fill"
              src="https://res.cloudinary.com/kaka777/image/upload/v1630997243/main-bg_a8s5hk.png"
              alt="Hultprize"
              className="z-20 object-cover"
            />
            <Image
              layout="fill"
              src={mainBgBlurred}
              alt="Hultprize"
              className="object-cover"
            />
            <div className="z-40">
              <div className={`flex flex-col ${styles.anim1}`}>
                <img
                  alt=""
                  src="/logo-1.png"
                  className="self-center w-56 h-auto select-none sm:self-start sm:w-56 md:w-64 lg:w-80"
                />
              </div>
              <h1
                className={`mt-3 ${styles.anim2} mb-5 text-3xl font-bold text-center md:text-4xl lg:text-5xl md:mt-6 sm:text-left`}
              >
                {t("common:title1")}
                <br />
                {t("common:title2")}
              </h1>
              {/* <p
                className={`text-xl ${styles.anim3} text-center sm:text-left md:text-2xl ${styles.firstP}`}
              >
                {t("common:subtitle1")}{" "}
                <span className="font-bold">{t("common:subtitle2")}</span>{" "}
                {t("common:subtitle3")}
              </p> */}
            </div>
            <div className={`-mt-1 z-40 md:-mt-8 ${styles.anim4}`}>
              <div className="flex flex-col gap-4 sm:flex-row md:gap-10">
                <a
                  href="https://bit.ly/HPITS_RegisterTeam"
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 truncate ${
                    t("common:register-button") === "Register Your Team!"
                      ? "px-12"
                      : "px-7"
                  } ${
                    styles.firstBtn
                  } z-40 self-center text-lg text-black sm:self-start rounded-lg py-1`}
                >
                  {t("common:register-button")}
                </a>
                <a
                  href="https://bit.ly/HPITS_FSC2"
                  target="_blank"
                  rel="noreferrer"
                  className={`text-lg animate-pulse truncate ${
                    styles.secondBtn
                  } ${
                    t("common:submit-button") === "Daftar Fireside Chat!"
                      ? "px-10"
                      : "px-3"
                  } z-40 rounded-lg border-2 self-center sm:self-start py-1 bg-black hover:bg-gray-900 text-white`}
                >
                  {t("common:submit-button")}
                  {"  "}
                  <FontAwesomeIcon
                    className="ml-1 text-red-600"
                    icon={faFire}
                  />
                </a>
              </div>
            </div>
          </article>
          <div className={`absolute bottom-3 z-40 ${styles.center}`}>
            <ScrollDownArrow />
          </div>
        </section>
        <section className={styles.secondSection}>
          <div className="relative">
            <img
              className={`w-52 select-none -z-1 h-auto ${styles.floatAnim2} mt-5 absolute`}
              src="/ellipse2.png"
              alt=""
            />
          </div>
          <article className="relative flex flex-col justify-center min-h-screen gap-8 px-10 py-20 text-white lg:px-28 items-left md:gap-12 layout">
            <img
              className={`w-64 select-none ${styles.floatAnim1} h-auto right-0 -bottom-32 absolute`}
              src="/ellipse1.png"
              alt=""
            />
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <div>
                  <h1
                    data-aos="fade-right"
                    data-aos-easing="ease-in-out"
                    className="mb-5 text-2xl text-left md:text-3xl"
                  >
                    {t("common:challenge-title")}
                    <br />
                    <span className="text-4xl font-bold md:text-5xl">
                      {t("common:challenge-title1")}
                    </span>
                  </h1>
                  <div data-aos="fade-right" data-aos-easing="ease-in-out">
                    <p className="text-lg leading-6 md:text-xl">
                      {t("common:challenge-text")}
                    </p>
                    <div className="z-50 flex flex-col w-full mt-10">
                      <a
                        href="https://bit.ly/HPITS_ChallengeGuide"
                        target="_blank"
                        rel="noreferrer"
                        className={`self-center truncate sm:self-start text-lg rounded-lg px-7 py-2 md:text-xl ${styles.thirdBtn}`}
                      >
                        {t("common:join-guidebook-button")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
                className="relative self-center w-full top-7 lg:top-0 lg:pl-5 md:w-1/2"
              >
                <div className={`${styles.rectangle1} rounded-lg px-2 py-2`}>
                  <div className="w-full h-full">
                    <ReactYouTubeLite
                      url="https://youtu.be/aXS1kWJoTkw"
                      noCookie={true}
                      poster="maxresdefault"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section
          id="timeline"
          className={`relative flex flex-col justify-center align-center w-full ${styles.thirdSection} min-h-screen`}
        >
          <div
            className={`w-16 pl-6 flex flex-col justify-center align-center md:w-20 h-full absolute z-20 ${styles.left}`}
          ></div>
          <div
            className={`w-16 pl-6 flex flex-col align-center justify-center md:w-20 h-full right-0 z-20 absolute ${styles.right}`}
          ></div>
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            className="relative text-3xl font-bold text-white uppercase sm:text-4xl top-20 left-10 sm:left-20"
          >
            {t("common:timeline-title1")}
            <br />
            {t("common:timeline-title2")}
          </h1>
          <div data-aos="fade-right" data-aos-easing="ease-in-out">
            <div className="relative" style={{ width: "100vw" }}>
              <div
                className={`px-10 py-32 carousel sm:px-16 align-center`}
                style={{ maxWidth: "1300px" }}
              >
                <ImageSlider />
              </div>
              <div
                className={`left-32 relative bottom-80 ${styles.horizontal}`}
              ></div>
            </div>
            <div className="relative left-0 z-30 flex flex-row justify-center w-full bottom-16">
              <UnstyledLink
                href="https://bit.ly/HPITS_CompGuide"
                className={`text-xl transform duration-150 hover:scale-110 truncate font-semibold rounded-lg px-4 py-2 ${styles.fourthBtn}`}
              >
                {t("common:competition-guidebook")}
              </UnstyledLink>
            </div>
          </div>
        </section>
        <section
          id="events"
          className={`relative py-20 flex flex-col justify-center align-center ${styles.gradientbg} w-full min-h-screen`}
        >
          <Image
            layout="fill"
            src="https://res.cloudinary.com/kaka777/image/upload/v1631201303/events-bg_rhme7l.png"
            alt="Hultprize"
            className="z-20 object-cover"
          />
          <Image
            layout="fill"
            src={eventsBgBlurred}
            alt="Hultprize"
            className="z-10 object-cover"
          />
          <div className="z-40 flex flex-col">
            <div
              className="flex flex-col justify-center gap-5 align-center"
              style={{ width: "100vw" }}
            >
              <div
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-duration="1200"
                className="relative flex flex-col self-center gap-2 mb-10"
              >
                <h1 className="text-5xl font-semibold text-center text-white ">
                  {t("common:our-events")}
                </h1>
                <div
                  className="h-2 w-72"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.4) 100%)",
                  }}
                ></div>
              </div>
              <div className="flex flex-col justify-center gap-10 md:justify-center lg:flex-row">
                <div
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1000"
                  className="flex flex-col self-center gap-5 lg:self-start lg:flex-col sm:flex-row"
                >
                  <div
                    className="relative z-20 self-center h-48 overflow-hidden bg-white w-72 lg:self-start"
                    style={{
                      boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, .4)",
                    }}
                  >
                    <Image
                      layout="fill"
                      className="top-0 left-0 z-20 object-cover w-full select-none"
                      src="https://res.cloudinary.com/kaka777/image/upload/v1632023123/events1_lpdbuf.png"
                      alt="hultprize1"
                    />
                    <Image
                      layout="fill"
                      className="top-0 left-0 z-10 object-cover w-full select-none"
                      src={event1Blurred}
                      alt="hultprize1"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold leading-6 tracking-wide text-white">
                      FIRESIDE
                      <br />
                      CHAT
                    </h1>
                    <div className="flex flex-col gap-3">
                      <p className="text-sm leading-4 text-white w-60">
                        Series of free national webinars with many experts
                        bringing vast topics mainly about entrepreneurship and
                        professional world.
                      </p>
                      <div>
                        <div>
                          <UnstyledLink
                            className={`px-3 ${styles.eventsBtn} py-1 text-white duration-150 transform hover:scale-110`}
                            href="https://bit.ly/HPITS_FSC2"
                          >
                            Click to register{" "}
                            <span className="ml-2 fa fa-angle-right"></span>
                          </UnstyledLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1200"
                  className="flex flex-col self-center gap-5 lg:self-start lg:flex-col sm:flex-row"
                >
                  <div
                    className="relative z-20 self-center h-48 bg-white lg:self-left w-72"
                    style={{
                      boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, .4)",
                    }}
                  >
                    <Image
                      layout="fill"
                      className="top-0 left-0 z-20 object-cover w-full select-none"
                      src="https://res.cloudinary.com/kaka777/image/upload/v1631201310/events2_ovbqvl.png"
                      alt="hultprize1"
                    />
                    <Image
                      layout="fill"
                      className="top-0 left-0 z-10 object-cover w-full select-none"
                      src={event2Blurred}
                      alt="hultprize1"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold leading-6 tracking-wide text-white">
                      GRAND
                      <br />
                      TALKSHOW
                    </h1>
                    <div className="flex flex-col gap-3">
                      <p className="text-sm leading-4 text-white w-60">
                        The final and peak event of Hult Prize at ITS OnCampus
                        Program. This talkshow will feature impressive speakers
                        and followed by the awarding of Hult Prize at ITS
                        winners.
                      </p>
                      <div>
                        <UnstyledLink
                          className={`px-3 ${styles.eventsBtn} py-1 text-white duration-150 transform hover:scale-110`}
                          href="/event_registration"
                        >
                          Click to register{" "}
                          <span className="ml-2 fa fa-angle-right"></span>
                        </UnstyledLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1400"
                  className="flex flex-col self-center gap-5 lg:self-start lg:flex-col sm:flex-row"
                >
                  <div
                    className="relative z-20 self-center h-48 bg-white lg:self-start w-72"
                    style={{
                      boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, .4)",
                    }}
                  >
                    <Image
                      layout="fill"
                      className="top-0 left-0 z-20 object-cover w-full select-none"
                      src="https://res.cloudinary.com/kaka777/image/upload/v1631201309/events4_en7ckp.png"
                      alt="hultprize1"
                    />
                    <Image
                      layout="fill"
                      className="top-0 left-0 z-10 object-cover w-full select-none"
                      src={event4Blurred}
                      alt="hultprize1"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold leading-6 tracking-wide text-white">
                      INTERNATIONAL
                      <br />
                      COLLAB
                    </h1>
                    <div className="flex flex-col gap-3">
                      <p className="text-sm leading-4 text-white w-60">
                        A collaboration program between Hult Prize at ITS with
                        international Hult Prize on Campus partners, which
                        provides opportunities for students to explore diverse
                        perspective of culture in entrepreneurship.
                      </p>
                      <div>
                        <UnstyledLink
                          className={`px-3 ${styles.eventsBtn} py-1 text-white duration-150 transform hover:scale-110`}
                          href="/event_registration"
                        >
                          Click to register{" "}
                          <span className="ml-2 fa fa-angle-right"></span>
                        </UnstyledLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
                className="flex flex-col justify-center gap-10 sm:justify-start sm:flex-row lg:gap-1 xl:gap-16"
              ></div> */}
            </div>
          </div>
        </section>
        <section id="community" className={styles.fourthSection}>
          <article className="relative flex flex-col justify-between px-0 text-black lg:flex-row lg:items-center lg:h-screen layout">
            <div className="flex flex-col self-center justify-center py-20 lg:w-1/2 lg:py-0">
              <div className="flex flex-col self-center justify-center px-0 w-80 sm:w-auto sm:px-8 lg:px-0 ">
                <div
                  data-aos="fade-right"
                  data-aos-easing="ease-in-out"
                  className="flex flex-col"
                >
                  <h1 className="mb-3 text-lg text-center sm:text-left sm:truncate sm:text-xl">
                    {t("common:impact-upper")}
                    <br />
                    {t("common:impact-upper1")}
                  </h1>
                  <div className={`self-center sm:self-start w-72 sm:w-96`}>
                    <div className="flex gap-3">
                      <h1 className="text-4xl font-bold sm:text-5xl">IMPACT</h1>
                      <div
                        className={`${styles.boxDecoration} mt-2 w-full h-7 sm:h-10`}
                      ></div>
                    </div>
                    <div className="flex gap-3">
                      <div
                        className={`${styles.boxDecoration} mt-2 w-full h-7 sm:h-10`}
                      ></div>
                      <h1 className="text-4xl font-bold sm:text-5xl">
                        COMMUNITY
                      </h1>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" data-aos-easing="ease-in-out">
                  <div>
                    <p className="px-4 mt-5 text-lg leading-7 text-justify sm:px-0 w-80 sm:w-96">
                      {t("common:impact-lower")}
                    </p>
                  </div>
                  <div className="flex justify-center w-full mt-7 sm:justify-start">
                    <a
                      href="https://bit.ly/HPITS_ImpactComm"
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.fifthBtn} truncate rounded-lg px-5 py-2`}
                    >
                      {t("common:join-button")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              className="flex flex-col w-full h-full lg:h-full lg:w-1/2"
            >
              <div className="flex flex-row" style={{ height: "15vh" }}>
                <div className="relative flex w-1/3 overflow-hidden">
                  <Image
                    layout="fill"
                    className="top-0 left-0 z-20 object-cover w-full select-none"
                    src="/hultprize1.png"
                    alt="hultprize1"
                  />
                  <Image
                    layout="fill"
                    className="top-0 left-0 object-cover w-full select-none"
                    src={hultprize1Blurred}
                    alt="hultprize1"
                  />
                </div>
                <div className="w-2/3" style={{ background: "#790E48" }}></div>
              </div>
              <div className="flex" style={{ height: "25vh" }}>
                <div className="flex justify-center w-1/3 px-4 py-8 overflow-hidden align-center">
                  <Image
                    width={190}
                    height={89}
                    src="/what.png"
                    alt="what will you get"
                    className="object-scale-down h-full select-none"
                  />
                </div>
                <div className="relative flex justify-center w-2/3 overflow-hidden align-center">
                  <Image
                    layout="fill"
                    className="z-10 object-cover w-full select-none "
                    src="/hultprize2.png"
                    alt="hultprize 2"
                  />
                  <Image
                    layout="fill"
                    className="object-cover w-full select-none "
                    src={hultprize2Blurred}
                    alt="hultprize 2"
                  />
                  <div
                    className="absolute bottom-0 z-20 flex flex-col justify-center w-full h-12 px-4 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center"
                    style={{
                      background:
                        "linear-gradient(270deg, rgba(219, 10, 127, 0) 1.02%, #BF1D76 100%)",
                    }}
                  >
                    <h1
                      style={{ lineHeight: "18px" }}
                      className="text-xs sm:text-base"
                    >
                      Network with like-minded
                      <br />
                      individuals
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex" style={{ height: "30vh" }}>
                <div className="relative flex justify-center w-1/2 overflow-hidden sm:w-2/5 align-center">
                  <Image
                    layout="fill"
                    className="z-10 object-cover w-full select-none "
                    src="/hultprize3.png"
                    alt="hultprize3"
                  />
                  <Image
                    layout="fill"
                    className="object-cover w-full select-none "
                    src={hultprize3Blurred}
                    alt="hultprize3"
                  />
                  <div
                    className="absolute bottom-0 z-20 flex flex-col justify-center w-full h-12 px-3 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center"
                    style={{ background: "#C11873" }}
                  >
                    <h1
                      style={{ lineHeight: "18px" }}
                      className="text-xs sm:text-md xl:text-base"
                    >
                      Create your dream team through pairing service
                    </h1>
                  </div>
                </div>
                <div className="relative flex justify-center w-1/2 sm:w-3/5 overlow-hidden align-center">
                  <Image
                    layout="fill"
                    className="z-10 object-cover w-full select-none"
                    src="/hultprize4.png"
                    alt="hultprize4"
                  />
                  <Image
                    layout="fill"
                    className="object-cover w-full select-none"
                    src={hultprize4Blurred}
                    alt="hultprize4"
                  />
                  <div
                    className="absolute bottom-0 z-20 flex flex-col justify-center w-full h-12 px-3 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(230, 92, 168, 0) 0%, #E65CA8 100%)",
                    }}
                  >
                    <h1
                      style={{ lineHeight: "18px" }}
                      className="text-xs leading-4 text-right sm:text-base"
                    >
                      Get information on
                      <br />
                      Hult Prize at ITS faster
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex" style={{ height: "30vh" }}>
                <div className="relative flex justify-center w-1/2 overflow-hidden align-center">
                  <Image
                    layout="fill"
                    className="z-10 object-cover w-full select-none "
                    src="/hultprize5.png"
                    alt="hultprize5"
                  />
                  <Image
                    layout="fill"
                    className="object-cover w-full select-none "
                    src={hultprize5Blurred}
                    alt="hultprize5"
                  />
                  <div
                    className="absolute bottom-0 z-20 flex flex-col justify-center w-full h-12 px-3 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center"
                    style={{
                      background:
                        "linear-gradient(269.93deg, rgba(219, 10, 127, 0) 0.09%, #BF1D76 99.96%)",
                    }}
                  >
                    <h1 className="text-xs leading-5 sm:text-base">
                      Exclusive Q&A session
                    </h1>
                  </div>
                </div>
                <div className="relative flex justify-center w-1/2 overflow-hidden align-center">
                  <Image
                    layout="fill"
                    className="z-10 object-cover w-full select-none"
                    src="/hultprize6.png"
                    alt="hultprize6"
                  />
                  <Image
                    layout="fill"
                    className="object-cover w-full select-none"
                    src={hultprize6Blurred}
                    alt="hultprize6"
                  />
                  <div
                    className="absolute bottom-0 z-20 flex flex-col justify-center w-full h-12 px-3 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center"
                    style={{ background: "#BF1D76" }}
                  >
                    <h1 className="text-xs leading-5 text-right sm:text-base">
                      Exclusive workshop
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section id="about" className={styles.fifthSection}>
          <article className="relative flex flex-col justify-center min-h-screen gap-8 px-0 py-10 pt-20 pb-20 text-white bg-center bg-cover items-left md:gap-12 sm:py-0 layout">
            <Image
              src="/building-bg.png"
              alt="ITS building"
              className="z-10 object-cover"
              layout="fill"
            />
            <Image
              src={buildingBgBlurred}
              alt="ITS building"
              className="object-cover"
              layout="fill"
            />
            <div className="relative z-20 flex">
              <div className="px-4 md:px-28">
                <div data-aos="fade-right" data-aos-easing="ease-in-out">
                  <div className="flex">
                    <h1 className="text-4xl text-left uppercase">
                      {t("common:about-us")}
                      <br />
                    </h1>
                    <div className={`${styles.line1}`}></div>
                  </div>
                  <h1 className="text-5xl font-bold text-left uppercase">
                    HULT PRIZE AT ITS
                  </h1>
                  <p className="text-lg leading-6 md:w-5/6 mt-7">
                    {t("common:about-text")}
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  className="gap-10 mt-7"
                >
                  <p className="mb-5 text-lg">{t("common:about-lower")}</p>
                  <div className="flex flex-col gap-6 md:flex-row">
                    <a
                      href="https://bit.ly/SpreadTheChange"
                      className={`self-start truncate rounded-lg px-5 py-1 ${styles.fifthBtn}`}
                    >
                      {t("common:download-video")}
                    </a>
                    <p className="md:mt-3">
                      {t("common:download-video-inline")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-1/2"></div>
            </div>
          </article>
        </section>
        <div
          className="flex flex-col w-full h-64"
          style={{ backgroundColor: "#E5E5E5" }}
        >
          <div className={styles.footer1}>
            <h1
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-out"
              className="text-2xl font-bold text-center text-white sm:text-3xl md:text-4xl lg:text-4xl"
            >
              ARE YOU READY TO #CreateTheChange?
            </h1>
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-out"
            className={styles.footer2}
          >
            <h1 className="-mb-2 text-2xl font-bold text-center md:text-3xl">
              Stay Connected!
            </h1>
            <div className={`${styles.connect} gap-3 px-2`}>
              <UnstyledLink href="https://www.instagram.com/hultprize_its/">
                <img
                  alt=""
                  className="duration-200 transform select-none hover:scale-125"
                  src="/instagram.png"
                />
              </UnstyledLink>
              <UnstyledLink href="https://www.linkedin.com/company/hult-prize-at-its">
                <img
                  alt=""
                  className="duration-200 transform select-none hover:scale-125"
                  src="/linkedin.png"
                />
              </UnstyledLink>
              <Link href="/contact_form" passHref>
                <img
                  alt=""
                  className="duration-200 transform cursor-pointer select-none hover:scale-125"
                  src="/mail.png"
                />
              </Link>
              <UnstyledLink href="https://www.youtube.com/channel/UCqDogFYFLawvmYjnOC2niww">
                <i
                  style={{ color: "#DF238C" }}
                  className="text-3xl duration-200 transform select-none fa fa-youtube-play hover:scale-125"
                />
              </UnstyledLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
