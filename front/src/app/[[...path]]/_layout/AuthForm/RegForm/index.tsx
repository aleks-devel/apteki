"use client";

import React, { useMemo } from "react";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import { MainButton, SecondButton } from "@/app/[[...path]]/_common/Button";
import { InputGroup } from "@/app/[[...path]]/_common/InputGroup";
import style from "@/app/[[...path]]/_layout/AuthForm/style.module.scss";

type RegForm = {
  email: string;
  password: string;
  rePassword: string;
};

const RegFormData = {
  email: "email",
  password: "password",
  rePassword: "rePassword",
  initial: {
    email: "",
    password: "",
    rePassword: "",
  },
};

type RegFormProps = {
  onClose: () => void;
};

export const RegForm: React.FC<RegFormProps> = ({ onClose }) => {
  const schema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        rePassword: Yup.string().test(
          "passwords-match",
          "Пароли должны совпадать",
          function (value) {
            return this.parent.password === value;
          },
        ),
      }),
    [],
  );

  async function handleRegSubmit(values: RegForm) {}

  return (
    <Formik<RegForm>
      enableReinitialize
      validateOnChange={false}
      validationSchema={schema}
      initialValues={RegFormData.initial}
      onSubmit={handleRegSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <p className={style.title}>Регистрация</p>
          <InputGroup name={RegFormData.email} label="Почта" />
          <InputGroup
            name={RegFormData.password}
            label="Пароль"
            type="password"
          />
          <InputGroup
            name={RegFormData.rePassword}
            label="Повторите пароль"
            type="password"
          />
          <div className={style.row}>
            <SecondButton onClick={onClose}>Отмена</SecondButton>
            <MainButton disabled={isSubmitting}>Регистрация</MainButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};
