import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const PowerProfileBalanced = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 1.004c-2.05 0-4.098.781-5.656 2.34-3.117 3.117-3.117 8.195 0 11.312a1 1 0 1 0 1.414-1.414 5.984 5.984 0 0 1 0-8.484 5.984 5.984 0 0 1 8.484 0 5.984 5.984 0 0 1 0 8.484 1 1 0 1 0 1.414 1.414c3.117-3.117 3.117-8.195 0-11.312A7.97 7.97 0 0 0 8 1.004M7 4v3.273A2 2 0 0 0 6 9a2 2 0 1 0 3-1.73V4L8 3zm0 0"
    />
    <path
      fill="currentColor"
      fillOpacity={0.349}
      d="M12 9a4 4 0 0 1-1.18 2.82l2.13 2.13A7 7 0 0 0 15 9zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(PowerProfileBalanced)
export default ForwardRef