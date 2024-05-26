import React from "react";
import plural from "plural-ru";

import { RatingStars } from "@/app/[[...path]]/_common/RatingStars";
import { WorkTime } from "@/app/[[...path]]/_common/WorkTime";
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
  return (
    <li>
      <a href={pharmaId}>
        <div className={style.firstRow}>
          <p>Аптека 1</p>
          <WorkTime openTime={openTime} closeTime={closeTime} />
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
