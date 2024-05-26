"use client";

import { useEffect, useMemo } from "react";

import classNames from "classnames";
import { notFound } from "next/navigation";
import { useSetRecoilState } from "recoil";

import { PharmaCard } from "@/app/[[...path]]/PharmaCard";
import { scrollEnabledAtom } from "@/app/[[...path]]/store";

import styles from "./page.module.scss";
import { PharmaLayout } from "./PharmaLayout";

export default function Home({
  params: { path },
}: {
  params: { path?: string[] };
}) {
  const setIsScrollEnabled = useSetRecoilState(scrollEnabledAtom);

  const [pharmaPage, pharmaId] = useMemo(() => {
    const pages = ["info", "price", "reviews"];

    if (path === undefined) {
      return [null, null];
    } else if (
      path.length !== 3 ||
      path[0] !== "pharma" ||
      !pages.includes(path[2])
    ) {
      return [notFound(), null];
    } else {
      return [path[2], path[1]];
    }
  }, [path]);

  useEffect(() => {
    if (pharmaPage) {
      setIsScrollEnabled(false);
    }
  }, [pharmaPage]);

  return (
    <main className={styles.main}>
      <h3>
        Хотите оставить отзыв или добавить свою организацию? Зарегистрируйтесь!
      </h3>
      <ul className={styles.pharmaWrapper}>
        {Array.from(new Array(8), () => (
          <li>
            <PharmaCard />
          </li>
        ))}
      </ul>
      {pharmaPage && <PharmaLayout page={pharmaPage} pharmaId={pharmaId} />}
    </main>
  );
}
