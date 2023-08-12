import React from "react";

interface StatisticsCompProps {
  numeral: number;
  desc: string;
}

export default function StatisticsComp({ numeral, desc }: StatisticsCompProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="bold-text">
        <span className="text-primary">+</span>
        {numeral}
      </p>
      <p className="body-xs text-center max-w-[17ch]">{desc}</p>
    </div>
  );
}
