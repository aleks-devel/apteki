"use client";
import React, { useState } from "react";

import classNames from "classnames";

import { MainButton, SecondButton } from "@/app/[[...path]]/_common/Button";
import { LoginForm } from "@/app/[[...path]]/_layout/AuthForm/LoginForm";
import { RegForm } from "@/app/[[...path]]/_layout/AuthForm/RegForm";

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
          <RegForm onClose={() => setOpenForm(null)} />
        ) : null}
      </div>
      <div className={style.backdrop} onClick={() => setOpenForm(null)} />
    </>
  );
};
