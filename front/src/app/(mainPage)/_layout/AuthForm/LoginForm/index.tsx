"use client";

import React, { useMemo } from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import { MainButton, SecondButton } from "@/app/(mainPage)/_common/Button";
import { InputGroup } from "@/app/(mainPage)/_common/InputGroup";
import style from "@/app/(mainPage)/_layout/AuthForm/style.module.scss";

type LoginForm = {
  login: string;
  password: string;
};

const LoginFormData = {
  login: "login",
  password: "password",
  initial: {
    login: "",
    password: "",
  },
};

type LoginFormProps = {
  onClose: () => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({
  onClose
}) => {
  const schema = useMemo(() =>
    Yup.object().shape({
      login: Yup.string().required(),
      password: Yup.string().required(),
    }),
  );

  function handleLoginSubmit(values: LoginForm) {}

  return (
    <Formik<LoginForm>
      enableReinitialize
      validateOnChange={false}
      validationSchema={schema}
      initialValues={LoginFormData.initial}
      onSubmit={handleLoginSubmit}
    >
      {() => (
        <Form>
          <p className={style.title}>Вход</p>
          <InputGroup name={LoginFormData.login} label="Логин" />
          <InputGroup
            name={LoginFormData.password}
            label="Пароль"
            type="password"
          />
          <div className={style.row}>
            <SecondButton onClick={onClose}>Отмена</SecondButton>
            <MainButton>Вход</MainButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};
