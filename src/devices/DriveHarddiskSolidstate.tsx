import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DriveHarddiskSolidstate = (
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
      d="M4 0C2.355 0 1 1.355 1 3v10c0 1.645 1.355 3 3 3h8c1.645 0 3-1.355 3-3V3c0-1.645-1.355-3-3-3zm0 2h8c.57 0 1 .43 1 1v9c0 .57-.43 1-1 1H4c-.555 0-1-.445-1-1V3c0-.555.445-1 1-1m1 1v1H4v6h2v1h1v-1h1v1h1v-1h1v1h1v-1h1V4h-2V3H9v1H8V3H7v1H6V3zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DriveHarddiskSolidstate)
export default ForwardRef