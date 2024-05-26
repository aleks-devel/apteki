"use client";

import React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { RatingStars } from "@/app/[[...path]]/_common/RatingStars";

import style from "./style.module.scss";

type PharmaCardProps = {};

export const PharmaCard: React.FC<PharmaCardProps> = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("#")} className={style.card}>
      <h2>Государственная аптека аптека №95</h2>
      <div
        className={style.ava}
        style={{ backgroundImage: `url(/mock_pharma.png)` }}
      />
      <div className={style.descWrapper}>
        <div className={style.desc}>
          <div className={style.rating}>
            <RatingStars rating={5} />
            <div>
              <span>5.0</span>
              <span>4 оценки</span>
            </div>
          </div>
          <div className={style.timeTable}>
            <p>Пн-пт 08:00 - 22:00</p>
            <p>Сб-вс 10:00 - 20:00</p>
          </div>
        </div>
        <div className={style.buttons}>
          <Link href="#1">Инфо</Link>
          <Link href="#2">Отзывы</Link>
          <Link href="#3">Фото</Link>
        </div>
      </div>
    </div>
  );
};
