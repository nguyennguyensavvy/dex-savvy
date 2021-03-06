import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 120 120" {...props}>
      <path
        d="M36.1751 70.5794H16.5782C13.2785 70.5794 10.5411 68.0645 10.2334 64.7857C10.0743 63.2046 10 61.6129 10 59.9894C10 32.4321 32.4297 10 60.0053 10C77.2997 10 92.5676 18.8285 101.544 32.2093C104.355 36.4007 101.247 42.0352 96.1963 42.0352H83.9417C82.382 42.0352 80.992 41.0272 80.5782 39.5947C77.9363 30.5539 69.4907 24.2296 60.0584 24.2296C48.2706 24.2296 38.7003 33.8115 38.7003 45.59C38.7003 55.2143 49.374 59.4588 58.7958 63.2046C66.435 66.25 74.3289 69.3909 74.3289 74.1341C74.3289 81.997 67.9416 88.385 60.069 88.385C53.7772 88.385 48.1432 84.1723 46.3926 78.1452C45.0769 73.6885 40.8753 70.5794 36.1751 70.5794Z"
        fill="url(#paint0_linear_864_39695)"
      />
      <path
        d="M109.682 65.6664C106.934 89.8811 86.7321 108.801 62.3926 109.936C43.9947 110.806 27.6339 101.67 18.2759 87.5148C15.496 83.3128 18.5836 77.6889 23.6233 77.6889H36.1751C37.7347 77.6889 39.1247 78.6863 39.5491 80.1294C42.191 89.1702 50.626 95.4944 60.0584 95.4944C71.8462 95.4944 81.4271 85.9125 81.4271 74.1341C81.4271 64.5628 70.7958 60.3395 61.4058 56.6044C53.7347 53.5484 45.809 50.3968 45.809 45.59C45.809 37.7271 52.1963 31.3391 60.0584 31.3391C66.3501 31.3391 71.9841 35.5518 73.7454 41.5789C75.0504 46.0356 79.2308 49.1447 83.9416 49.1447H103.401C106.615 49.1447 109.385 51.5322 109.714 54.7262C110.095 58.281 110.106 61.9418 109.682 65.6664Z"
        fill="url(#paint1_linear_864_39695)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_864_39695"
          x1="18.5"
          y1="10"
          x2="79.2038"
          y2="79.5277"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6FD96" />
          <stop offset="1" stopColor="#A5B862" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_864_39695"
          x1="41.3055"
          y1="34.5614"
          x2="65.2767"
          y2="106.089"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#56BCD2" />
          <stop offset="0.265625" stopColor="#64B0C1" />
          <stop offset="0.5201" stopColor="#4D9AAB" />
          <stop offset="1" stopColor="#3A6771" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
