import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DriveMultidisk = (
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
      d="M4 0C2.355 0 1 1.355 1 3v6c0 1.645 1.355 3 3 3h5c1.645 0 3-1.355 3-3V3c0-1.645-1.355-3-3-3zm0 2h5c.57 0 .887.441 1 1v5c0 .473-.43 1-1 1H4c-.555 0-1-.445-1-1V3c0-.555.445-1 1-1m2.504 1.004c-1.375 0-2.516 1.129-2.5 2.5L4 8h2.5A2.51 2.51 0 0 0 9 5.504a2.51 2.51 0 0 0-2.5-2.5zM13 4.18V12c0 .473-.43 1-1 1H4c0 1.645 1.355 3 3 3h5c1.645 0 3-1.355 3-3V7c0-1.293-.84-2.406-2-2.82m-6.492.32c.55 0 1 .45 1 1s-.45 1-1 1a1 1 0 1 1 0-2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DriveMultidisk)
export default ForwardRef