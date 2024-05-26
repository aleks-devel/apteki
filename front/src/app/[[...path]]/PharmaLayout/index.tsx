import React from "react";

import { RatingStars } from "@/app/[[...path]]/_common/RatingStars";
import { WorkTime } from "@/app/[[...path]]/_common/WorkTime";
import { CrossSVG } from "@/app/[[...path]]/PharmaLayout/CrossSVG";
import { FavoriteSVG } from "@/app/[[...path]]/PharmaLayout/FavoriteSVG";
import { Info } from "@/app/[[...path]]/PharmaLayout/Info";
import { PriceList } from "@/app/[[...path]]/PharmaLayout/PriceList";
import { Reviews } from "@/app/[[...path]]/PharmaLayout/Reviews";
import { Slider } from "@/app/[[...path]]/PharmaLayout/Slider";

import style from "./style.module.scss";

type PharmaLayoutProps = {
  page: string;
  pharmaId: string;
};

export const PharmaLayout: React.FC<PharmaLayoutProps> = ({
  page,
  pharmaId,
}) => {
  const pages: Record<string, React.FC> = {
    info: Info,
    price: PriceList,
    reviews: Reviews,
  };
  const PageComponent = pages[page];

  return (
    <div className={style.layout}>
      <div className={style.header}>
        <CrossSVG />
      </div>
      <div className={style.page}>
        <div className={style.content}>
          <h2 className={style.title}>Государственная аптека аптека №95</h2>
          <div className={style.descRow}>
            <div className={style.rating}>
              <RatingStars rating={5} />
              <p>5.0</p>
              <p>4 оценки</p>
            </div>
            <WorkTime openTime={"08:00"} closeTime={"20:00"} />
            <FavoriteSVG checked={false} onClick={() => void 0} />
          </div>
          <div className={style.slider}>
            <Slider />
          </div>
          <PageComponent />
        </div>
      </div>
    </div>
  );
};
