import React, { useMemo } from "react";

import classNames from "classnames";

import { ClockSVG } from "@/app/[[...path]]/_layout/PharmaSearchBar/ClockSVG";

import style from "./style.module.scss";

type WorkTimeProps = {
  closeTime: string;
  openTime: string;
};

export const WorkTime: React.FC<WorkTimeProps> = ({ closeTime, openTime }) => {
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
    <div className={classNames(style.time, style[variant])}>
      <ClockSVG />
      <p>{time}</p>
    </div>
  );
};
