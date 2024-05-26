"use client";

import "../globals.css";
import React, { useState } from "react";

import { setLocale } from "yup";

import { AuthForm } from "@/app/(mainPage)/_layout/AuthForm";
import { CitySelector } from "@/app/(mainPage)/_layout/CitySelector";
import { MockLayout } from "@/app/(mainPage)/_layout/mock";
import { PharmaSearchBar } from "@/app/(mainPage)/_layout/PharmaSearchBar";

import { LogoSVG } from "./_layout/LogoSVG";
import styles from "./layout.module.scss";

setLocale({
  mixed: {
    required: "Обязательное поле",
  },
  number: {
    min: "Не может быть меньше ${min}",
    max: "Не может быть больше ${max}",
    positive: "Не может быть меньше нуля",
  },
  string: {
    email: "Введите валидный email адрес",
    min: "Не может быть короче ${min} символов",
    max: "Не может быть больше ${max} символов",
    url: "Введите валидный url адрес",
    lowercase: "Допустимы только символы нижнего регистра",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedCityId, setSelectedCityId] = useState<null | string>(null);

  function handleSelectCityId(cityId: string) {
    // TODO: backend
    setSelectedCityId(cityId);
  }

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div className={styles.leftBlock}>
          <LogoSVG />
          <CitySelector
            options={MockLayout.cities}
            selectedId={selectedCityId}
            onSelectId={handleSelectCityId}
          />
        </div>
        <div className={styles.rightBlock}>
          <PharmaSearchBar />
          <AuthForm />
        </div>
      </header>
      {children}
    </div>
  );
}
