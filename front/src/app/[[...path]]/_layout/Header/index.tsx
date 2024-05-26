"use client";

import React, { useLayoutEffect, useRef, useState } from "react";

import classNames from "classnames";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { AuthForm } from "@/app/[[...path]]/_layout/AuthForm";
import { CitySelector } from "@/app/[[...path]]/_layout/CitySelector";
import { LogoSVG } from "@/app/[[...path]]/_layout/LogoSVG";
import { MockLayout } from "@/app/[[...path]]/_layout/mock";
import { PharmaSearchBar } from "@/app/[[...path]]/_layout/PharmaSearchBar";

import styles from "./style.module.scss";

export const Header: React.FC = () => {
  const [selectedCityId, setSelectedCityId] = useState<null | string>(null);
  const { ref, inView } = useInView({ threshold: 1 });

  function handleSelectCityId(cityId: string) {
    // TODO: backend
    setSelectedCityId(cityId);
  }

  return (
    <div className={classNames(styles.wrapper, { [styles.stuck]: !inView })} ref={ref}>
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
    </div>
  );
};
