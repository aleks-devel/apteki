"use client";

import React, { useMemo } from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import { MainButton, SecondButton } from "@/app/[[...path]]/_common/Button";
import { InputGroup } from "@/app/[[...path]]/_common/InputGroup";
import style from "@/app/[[...path]]/_layout/AuthForm/style.module.scss";

type LoginForm = {
  email: string;
  password: string;
};

const LoginFormData = {
  email: "email",
  password: "password",
  initial: {
    email: "",
    password: "",
  },
};

type LoginFormProps = {
  onClose: () => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const schema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
      }),
    [],
  );

  async function handleLoginSubmit(values: LoginForm) {}

  return (
    <Formik<LoginForm>
      enableReinitialize
      validateOnChange={false}
      validationSchema={schema}
      initialValues={LoginFormData.initial}
      onSubmit={handleLoginSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <p className={style.title}>Вход</p>
          <InputGroup name={LoginFormData.email} label="Логин" />
          <InputGroup
            name={LoginFormData.password}
            label="Пароль"
            type="password"
          />
          <div className={style.row}>
            <SecondButton onClick={onClose}>Отмена</SecondButton>
            <MainButton disabled={isSubmitting}>Вход</MainButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};
