import { useMemo } from "react";

import { StarSVG } from "@/app/[[...path]]/_common/RatingStars/StarSVG";

import style from "./style.module.scss";

type RatingStarsProps = {
  rating: number;
};

export const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const [decimalPart, realPart] = useMemo(() => {
    const abs = Math.floor(rating);
    const decimal = rating - abs;

    return [decimal, abs];
  }, [rating]);

  return (
    <div className={style.container}>
      {Array.from(new Array(realPart), (_, i) => (
        <StarSVG key={i} rating={1} />
      ))}
      {decimalPart > 0 && <StarSVG rating={decimalPart} />}
    </div>
  );
};
