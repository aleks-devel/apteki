"use client";

import React from "react";

import classNames from "classnames";
import { useRecoilValue } from "recoil";

import styles from "@/app/[[...path]]/layout.module.scss";
import { scrollEnabledAtom } from "@/app/[[...path]]/store";

type BodyProps = {
  children: React.ReactNode;
};

export const Body: React.FC<BodyProps> = ({ children }) => {
  const isScrollEnabled = useRecoilValue(scrollEnabledAtom);

  return (
    <div
      className={classNames(styles.body, {
        [styles.noScroll]: !isScrollEnabled,
      })}
    >
      <>{children}</>
    </div>
  );
};