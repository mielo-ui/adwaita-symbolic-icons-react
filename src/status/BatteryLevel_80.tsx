import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const BatteryLevel_80 = (
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
      d="M7 0C6 0 6 1 6 1v1H5s-.707-.016-1.445.355C2.813 2.727 2 3.668 2 5v8s-.016.707.355 1.45C2.727 15.187 3.668 16 5 16h6s.707.016 1.45-.355C13.187 15.273 14 14.332 14 13V5c0-1.332-.812-2.273-1.55-2.645C11.706 1.985 11 2 11 2h-1V1c0-1-1-1-1-1zm1 4h3c.555 0 1 .445 1 1v8c0 .555-.445 1-1 1H5c-.555 0-1-.445-1-1V5c0-.555.445-1 1-1zM5 7v6h6V7zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(BatteryLevel_80)
export default ForwardRef