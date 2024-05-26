import React, { HTMLInputTypeAttribute } from "react";

import classNames from "classnames";
import { useField } from "formik";

import style from "./style.module.scss";

type InputGroupProps = {
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
};

export const InputGroup: React.FC<InputGroupProps> = ({
  name,
  label,
  type,
}) => {
  const [{ }, { value, error }, {setValue}] = useField(name);

  return (
    <div
      className={classNames(style.group, {
        [style.error]: !!error,
      })}
    >
      <input
        type={type}
        placeholder={label}
        onInput={(e) => setValue(e.currentTarget.value)}
        value={value}
      />
      <label>{label}</label>
      {!!error && <p className={style.error}>{error}</p>}
    </div>
  );
};
