import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const UserOffline = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.349}
      d="M3 1C1.355 1 0 2.355 0 4v6c0 1.645 1.355 3 3 3h1v3l3-3h6c1.645 0 3-1.355 3-3V4c0-1.645-1.355-3-3-3zm3 3a1 1 0 0 1 .707.293L8 5.586l1.293-1.293a1 1 0 1 1 1.414 1.414L9.414 7l1.293 1.293a1 1 0 1 1-1.414 1.414L8 8.414 6.707 9.707a1 1 0 1 1-1.414-1.414L6.586 7 5.293 5.707A1 1 0 0 1 6 4m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(UserOffline)
export default ForwardRef