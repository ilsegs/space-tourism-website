"use client";

import React from "react";

interface PageTitleProps {
  title: string;
  number: number | string;
}

export default function PageTitle({ title, number }: PageTitleProps) {
  return (
    <div className=" w-fit nav-text font-primary uppercase text-white md:text-[20px] tracking-[2.7px] md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px]">
      <span className="inline-block font-bold opacity-25 mr-5">0{number}</span>
      <span className=" inline-block">{title}</span>
    </div>
  );
}
