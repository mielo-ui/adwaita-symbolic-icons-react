import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const PowerProfilePowerSaver = (
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
      d="M8 1.004c-2.05 0-4.098.781-5.656 2.34-3.117 3.117-3.117 8.195 0 11.312a1 1 0 1 0 1.414-1.414 5.982 5.982 0 0 1 0-8.484 5.984 5.984 0 0 1 8.484 0 5.984 5.984 0 0 1 0 8.484 1 1 0 1 0 1.414 1.414c3.117-3.117 3.117-8.195 0-11.312A7.97 7.97 0 0 0 8 1.004M2.8 12l1.368.363 2.836-1.633a2 2 0 0 0 1.996 0A1.995 1.995 0 0 0 9.73 8 2 2 0 0 0 7 7.266a2 2 0 0 0-.996 1.73l-2.836 1.637zm0 0"
    />
    <path
      fill=""
      fillOpacity={0.349}
      d="M12 9a4 4 0 0 1-1.18 2.82l2.13 2.13A7 7 0 0 0 15 9zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(PowerProfilePowerSaver)
export default ForwardRef