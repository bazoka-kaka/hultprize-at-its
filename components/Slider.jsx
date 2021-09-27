import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isSameDay, isWithinInterval } from "date-fns";
import { MenuItems } from "./MenuItems";
import { useRouter } from "next/router";

function ImageSlider() {
  const router = useRouter();

  const dataWithSelectedFlag = MenuItems.map(
    ({ datetime, dateend, ...item }) => {
      const today = new Date();

      const isSelected = dateend
        ? isWithinInterval(today, {
            start: datetime,
            end: dateend,
          })
        : isSameDay(today, datetime);

      return { ...item, datetime, isSelected };
    }
  );

  const settings = {
    dots: false,
    infinite: true,
    time: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "-8",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1196,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "140",
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "50",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "-16",
        },
      },
    ],
  };

  return (
    <Slider className="z-50 px-3" {...settings}>
      {dataWithSelectedFlag.map(
        (
          { id, target, description, datetime, date, isSelected, ...rest },
          eventIdx
        ) => {
          return isSelected ? (
            <div className="z-20 card-container" key={id}>
              <div
                key={eventIdx}
                className={`flex flex-col justify-between px-4 py-4 rounded-lg`}
                style={{
                  width: "250px",
                  height: "370px",
                  background:
                    "linear-gradient(30.41deg, #C11873 0%, #EC83BD 100%)",
                }}
              >
                <h1 className="text-3xl font-semibold">
                  {router.locale === "en"
                    ? date
                    : date === "10 September - 16 October"
                    ? "10 September - 16 Oktober"
                    : date === "25 October - 12 November"
                    ? "25 Oktober - 12 November"
                    : date === "4 - 5 December"
                    ? "4 - 5 Desember"
                    : date}
                </h1>
                <h1 className="text-lg font-semibold text-right">
                  {target}
                  <br />
                  <span className="text-3xl">
                    {router.locale === "en"
                      ? description
                      : description === "Abstract Submission"
                      ? "Pengumpulan Abstrak"
                      : description === "Video Pitching Presentation"
                      ? "Presentasi Video Pitching"
                      : description === "Incubation Program"
                      ? "Program Inkubasi bagi Finalis"
                      : description === "Award Ceremony & Gala"
                      ? "Upacara Penghargaan"
                      : description}
                  </span>
                </h1>
              </div>
            </div>
          ) : (
            <div className="container z-20" key={id}>
              <div
                key={eventIdx}
                className="px-1 py-1 rounded-lg"
                style={{
                  width: "250px",
                  height: "370px",
                  background:
                    "linear-gradient(30.41deg, #C11873 0%, #EC83BD 100%)",
                }}
              >
                <div
                  className="flex flex-col justify-between w-full h-full px-4 py-4 rounded-lg"
                  style={{ background: "black" }}
                >
                  <h1 className="text-3xl font-semibold text-white">
                    {router.locale === "en"
                      ? date
                      : date === "10 September - 16 October"
                      ? "10 September - 16 Oktober"
                      : date === "25 October - 12 November"
                      ? "25 Oktober - 12 November"
                      : date === "4 - 5 December"
                      ? "4 - 5 Desember"
                      : date}
                  </h1>
                  <h1 className="text-lg font-semibold text-right text-white">
                    {target}
                    <br />
                    <span className="text-3xl">
                      {router.locale === "en"
                        ? description
                        : description === "Abstract Submission"
                        ? "Pengumpulan Abstrak"
                        : description === "Video Pitching Presentation"
                        ? "Presentasi Video Pitching"
                        : description === "Incubation Program"
                        ? "Program Inkubasi bagi Finalis"
                        : description === "Award Ceremony & Gala"
                        ? "Upacara Penghargaan"
                        : description}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          );
        }
      )}
    </Slider>
  );
}

export default ImageSlider;
