"use client";

import React, { useMemo, useRef, useState } from "react";

import classNames from "classnames";

import { ArrowSVG } from "@/app/[[...path]]/PharmaLayout/Slider/ArrowSVG";

import style from "./style.module.scss";

const slides = [
  "/mock_pharma.png",
  "/mock_pharma.png",
  "/mock_pharma.png",
  "/mock_pharma.png",
  "/mock_pharma.png",
];

export const Slider: React.FC = () => {
  const slideRef = useRef<HTMLLIElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const transform = useMemo(() => {
    if (slideRef.current == null) {
      return "";
    }

    const slideWidth = slideRef.current.getBoundingClientRect().width;

    return `translateX(-${slideWidth * currentSlide}px)`;
  }, [slideRef, currentSlide]);

  function handleNextSlide() {
    if (currentSlide < slides.length / 2) {
      setCurrentSlide((val) => val + 1);
    }
  }

  function handlePrevSlide() {
    if (currentSlide > 0) {
      setCurrentSlide((val) => val - 1);
    }
  }

  return (
    <div className={style.wrapper}>
      <div className={style.control}>
        <div
          className={classNames(style.leftArrow, {
            [style.disabled]: currentSlide === 0,
          })}
          onClick={handlePrevSlide}
        >
          <ArrowSVG />
        </div>
        <div
          className={classNames(style.rightArrow, {
            [style.disabled]: currentSlide >= slides.length / 2,
          })}
          onClick={handleNextSlide}
        >
          <ArrowSVG />
        </div>
      </div>
      <div className={style.sliderWrapper}>
        <ul className={style.slider} style={{ transform }}>
          {slides.map((slide, i) => (
            <li
              key={i}
              ref={slideRef}
              className={style.slide}
              style={{ backgroundImage: `url(${slide})` }}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};
