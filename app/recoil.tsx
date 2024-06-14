"use client";
import React from "react";
import { RecoilRoot } from "recoil";

const Recoil = ({ children }: any) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Recoil;
