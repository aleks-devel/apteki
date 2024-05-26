import React, { useId } from "react";

type StarSVGProps = {
  rating: number;
};

export const StarSVG: React.FC<StarSVGProps> = ({ rating }) => {
  const id = useId();

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {rating <= 1 && (
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0" stopColor="#FFCB2B" />
          <stop offset={rating} stopColor="#FFCB2B" />
          <stop offset={rating} stopColor="#EAEBF2" />
          <stop offset="1" stopColor="#EAEBF2" />
        </linearGradient>
      )}
      <path
        d="M9 0C9.48431 0 9.96861 0.361607 10.0897 0.642857L12.2287 5.12277L16.991 5.86607C17.5157 5.98661 18 6.54911 18 7.19196C18 7.85491 17.2937 8.4442 16.9305 8.79911L14.2466 11.5714L15.0538 16.4933C15.1143 16.8549 14.9085 17.5098 14.5695 17.7188C14.1457 17.9799 13.9843 18 13.7623 18C13.3789 18 12.8946 17.7188 12.5516 17.5179L9 15.5491L5.44843 17.5179C5.10538 17.7188 4.62108 18 4.23767 18C4.0157 18 3.85426 17.9799 3.43049 17.7188C3.09148 17.5098 2.88565 16.8549 2.94619 16.4933L3.75336 11.5714L1.06951 8.79911C0.706278 8.4442 0 7.85491 0 7.19196C0 6.54911 0.484305 5.98661 1.00897 5.86607L5.7713 5.12277L7.91031 0.642857C8.03139 0.361607 8.5157 0 9 0Z"
        fill={rating <= 1 ? `url(#${id})` : "#FFCB2B"}
      />
    </svg>
  );
};
