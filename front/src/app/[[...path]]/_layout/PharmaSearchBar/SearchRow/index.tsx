import React, { useMemo } from "react";

import classNames from "classnames";
import plural from "plural-ru";

import { RatingStars } from "@/app/[[...path]]/_common/RatingStars";
import { ClockSVG } from "@/app/[[...path]]/_layout/PharmaSearchBar/ClockSVG";
import style from "@/app/[[...path]]/_layout/PharmaSearchBar/style.module.scss";

type SearchRowProps = {
  pharmaId: string;
  openTime: string;
  closeTime: string;
  rating: number;
  reviewsCount: number;
};

export const SearchRow: React.FC<SearchRowProps> = ({
  pharmaId,
  openTime,
  closeTime,
  rating,
  reviewsCount,
}) => {
  const [time, variant] = useMemo(() => {
    const closeTimes = closeTime.split(":").map((t) => parseInt(t));
    const closeMin = closeTimes[0] * 60 + closeTimes[1];

    const openTimes = openTime.split(":").map((t) => parseInt(t));
    const openMin = openTimes[0] * 60 + openTimes[1];

    const currentDate = new Date();
    const currentMin = currentDate.getHours() * 60 + currentDate.getMinutes();

    if (closeMin === openMin && openMin === 0) {
      return ["Круглосуточно", "open"];
    } else if (closeMin < openMin) {
      if (currentMin < closeMin || currentMin > openMin) {
        return [`Открыто до ${closeTime}`, "open"];
      } else {
        return [`Закрыто до ${openTime}`, "close"];
      }
    } else if (currentMin > openMin && currentMin < closeMin) {
      return [`Открыто до ${openTime}`, "open"];
    } else {
      return [`Закрыто до ${closeTime}`, "close"];
    }
  }, [openTime, closeTime]);

  return (
    <li>
      <a href={pharmaId}>
        <div className={style.firstRow}>
          <p>Аптека 1</p>
          <div className={classNames(style.time, style[variant])}>
            <ClockSVG />
            <p>{time}</p>
          </div>
        </div>
        <div className={style.secondRow}>
          <RatingStars rating={rating} />
          <p>{rating.toFixed(1)}</p>
          <p>{plural(reviewsCount, "%d оценка", "%d оценки", "%d оценок")}</p>
        </div>
      </a>
    </li>
  );
};
