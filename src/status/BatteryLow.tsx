import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const BatteryLow = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="#222">
      <path d="M7 0C6 0 6 1 6 1v1H5s-.707-.016-1.45.355C2.814 2.727 2 3.668 2 5v8s-.016.71.355 1.45C2.727 15.187 3.668 16 5 16h2.043a6.5 6.5 0 0 1-2.016-2H5c-.555 0-1-.445-1-1V5c0-.555.445-1 1-1h6q.177 0 .332.059A6.5 6.5 0 0 1 14 5.027V5c0-1.332-.812-2.273-1.55-2.645C11.71 1.988 11 2 11 2h-1V1c0-1-1-1-1-1zm0 0" />
      <path d="M10.5 5A5.513 5.513 0 0 0 5 10.5c0 3.023 2.473 5.5 5.5 5.5 3.023 0 5.5-2.477 5.5-5.5C16 7.473 13.523 5 10.5 5m0 2c1.945 0 3.5 1.555 3.5 3.5S12.445 14 10.5 14 7 12.445 7 10.5 8.555 7 10.5 7m0 0" />
      <path d="M10.5 8.027a.5.5 0 0 0-.504.5V10.5q.005.018.004.031a.495.495 0 0 0 .5.469h2a.491.491 0 0 0 .5-.5c.004-.133-.05-.262-.145-.355s-.222-.149-.355-.149H11V8.527a.493.493 0 0 0-.5-.5m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(BatteryLow)
export default ForwardRef