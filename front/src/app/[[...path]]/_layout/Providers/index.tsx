"use client";

import React from "react";

import { RecoilRoot } from "recoil";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
