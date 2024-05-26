"use client";

import React from "react";

import { SearchRow } from "@/app/(mainPage)/_layout/PharmaSearchBar/SearchRow";

import { SearchSVG } from "./SearchSVG";
import style from "./style.module.scss";

type SearchBarProps = {};

export const PharmaSearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className={style.container}>
      <SearchSVG />
      <input type="text" placeholder="Поиск..." />
      <ul className={style.searchResult}>
        {Array.from(new Array(10), () => (
          <SearchRow
            rating={5}
            closeTime="22:00"
            openTime="08:00"
            pharmaId="#"
            reviewsCount={10}
          />
        ))}
      </ul>
    </div>
  );
};
