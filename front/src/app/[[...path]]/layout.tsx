import "../globals.css";
import React from "react";

import { setLocale } from "yup";

import { Body } from "@/app/[[...path]]/_layout/Body";
import { Header } from "@/app/[[...path]]/_layout/Header";
import { InstagramLogoSVG } from "@/app/[[...path]]/_layout/InstagramLogoSVG";
import { SimpleLogoSVG } from "@/app/[[...path]]/_layout/SimpleLogoSVG";
import { TwitterLogoSVG } from "@/app/[[...path]]/_layout/TwitterLogoSVG";
import { VkLogoSVG } from "@/app/[[...path]]/_layout/VkLogoSVG";

import styles from "./layout.module.scss";
import "./global.scss";

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
  return (
    <Body>
      <Header />
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
    </Body>
  );
}
