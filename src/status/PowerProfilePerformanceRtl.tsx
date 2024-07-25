import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const PowerProfilePerformanceRtl = (
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
      fill=""
      d="M8 1.004c2.05 0 4.098.781 5.656 2.34 3.117 3.117 3.117 8.195 0 11.312a1 1 0 1 1-1.414-1.414 5.984 5.984 0 0 0 0-8.484 5.984 5.984 0 0 0-8.484 0 5.98 5.98 0 0 0 0 8.484 1 1 0 1 1-1.414 1.414c-3.117-3.117-3.117-8.195 0-11.312A7.97 7.97 0 0 1 8 1.004m-5.195 11 .363-1.363L6 9.004c0-.715.383-1.371 1-1.73a2.002 2.002 0 0 1 2 3.464 2 2 0 0 1-1.996-.004l-2.836 1.637zm0 0"
    />
    <path
      fill=""
      fillOpacity={0.349}
      d="M4 9a4 4 0 0 0 1.18 2.82l-2.13 2.13A7 7 0 0 1 1 9zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(PowerProfilePerformanceRtl)
export default ForwardRef