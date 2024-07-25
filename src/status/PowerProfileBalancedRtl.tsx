import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const PowerProfileBalancedRtl = (
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
      d="M8 1.004c2.05 0 4.098.781 5.656 2.34 3.117 3.117 3.117 8.195 0 11.312a1 1 0 1 1-1.414-1.414 5.984 5.984 0 0 0 0-8.484 5.984 5.984 0 0 0-8.484 0 5.984 5.984 0 0 0 0 8.484 1 1 0 1 1-1.414 1.414c-3.117-3.117-3.117-8.195 0-11.312A7.97 7.97 0 0 1 8 1.004M9 4v3.273A2 2 0 0 1 10 9a2 2 0 1 1-3-1.73V4l1-1zm0 0"
    />
    <path
      fill=""
      fillOpacity={0.349}
      d="M4 9a4 4 0 0 0 1.18 2.82l-2.13 2.13A7 7 0 0 1 1 9zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(PowerProfileBalancedRtl)
export default ForwardRef