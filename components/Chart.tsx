import React, { useRef, useState, useEffect } from "react";
import * as echarts from "echarts";

// import {
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   DatasetComponent,
//   TransformComponent,
// } from "echarts/components";

// echarts.use([
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   DatasetComponent,
//   TransformComponent,
//   LineChart,
//   BarChart,
//   LabelLayout,
//   UniversalTransition,
//   SVGRenderer,
// ]);

export const StartChart = () => {
  const curRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (curRef) {
      echarts.init(curRef.current as HTMLDivElement);
    }
  }, [curRef]);

  return <div id="startChart" ref={curRef}></div>;
};
