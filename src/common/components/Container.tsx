import React from "react";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  style?: string;
}

export default function Container({ children, style = "" }: ContainerProps) {
  return <div className={clsx(" px-[70px]", style)}>{children}</div>;
}
