"use client";
import React, { useState } from "react";

import classNames from "classnames";

import { MainButton, SecondButton } from "@/app/(mainPage)/_common/Button";
import { LoginForm } from "@/app/(mainPage)/_layout/AuthForm/LoginForm";

import style from "./style.module.scss";

export const AuthForm: React.FC = () => {
  const [openForm, setOpenForm] = useState<"login" | "reg" | null>(null);

  return (
    <>
      <SecondButton onClick={() => setOpenForm("login")}>Вход</SecondButton>
      <MainButton onClick={() => setOpenForm("reg")}>Регистрация</MainButton>
      <div
        className={classNames(style.formContainer, {
          [style.visible]: openForm !== null,
        })}
      >
        {openForm == "login" ? (
          <LoginForm onClose={() => setOpenForm(null)} />
        ) : openForm == "reg" ? (
          <LoginForm onClose={() => void 0} />
        ) : null}
      </div>
      <div className={style.backdrop}></div>
    </>
  );
};
