import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WeatherWindy = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="#222"
      d="M5.543 1.004a2.477 2.477 0 0 0-1.84.727 1.01 1.01 0 0 0-.277.976 1 1 0 0 0 1.691.438.486.486 0 0 1 .598-.079c.2.114.289.34.23.563A.484.484 0 0 1 5.47 4H0v2h5.469a2.5 2.5 0 0 0 2.41-1.855 2.51 2.51 0 0 0-1.16-2.81 2.5 2.5 0 0 0-1.176-.331m6.773 1A3.52 3.52 0 0 0 9.078 4.77a1.002 1.002 0 0 0 1.957.418 1.486 1.486 0 0 1 1.676-1.176 1.49 1.49 0 0 1 1.285 1.593A1.485 1.485 0 0 1 12.5 7H0v2h12.5a3.514 3.514 0 0 0 3.492-3.258 3.517 3.517 0 0 0-3.004-3.71 3.5 3.5 0 0 0-.672-.028M0 10v2h10.004c.465 0 .86.313.969.77s-.106.914-.524 1.125a.99.99 0 0 1-1.21-.25.999.999 0 1 0-1.532 1.28 2.994 2.994 0 0 0 3.64.755 3.01 3.01 0 0 0 1.575-3.371A3.01 3.01 0 0 0 10.004 10H10zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(WeatherWindy)
export default ForwardRef