"use client";

import "../globals.css";
import React, { useState } from "react";

import Link from "next/link";
import { setLocale } from "yup";

import { AuthForm } from "@/app/[[...path]]/_layout/AuthForm";
import { CitySelector } from "@/app/[[...path]]/_layout/CitySelector";
import { InstagramLogoSVG } from "@/app/[[...path]]/_layout/InstagramLogoSVG";
import { MockLayout } from "@/app/[[...path]]/_layout/mock";
import { PharmaSearchBar } from "@/app/[[...path]]/_layout/PharmaSearchBar";
import { SimpleLogoSVG } from "@/app/[[...path]]/_layout/SimpleLogoSVG";
import { TwitterLogoSVG } from "@/app/[[...path]]/_layout/TwitterLogoSVG";
import { VkLogoSVG } from "@/app/[[...path]]/_layout/VkLogoSVG";

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

export default function Layout({
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
          <Link href="/">
            <LogoSVG />
          </Link>
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
      <footer className={styles.footer}>
        <div className={styles.leftSection}>
          <div className={styles.logoBlock}>
            <SimpleLogoSVG />
            <p>© 2024</p>
          </div>
          <div className={styles.socials}>
            <a href="#">
              <TwitterLogoSVG />
            </a>
            <a href="#">
              <InstagramLogoSVG />
            </a>
            <a href="#">
              <VkLogoSVG />
            </a>
          </div>
        </div>
        <div className={styles.rightSection}>
          <p>Выполнил Абдрахманов Ильнар, Группа 440А, УРК, ВКР</p>
        </div>
      </footer>
    </div>
  );
}
