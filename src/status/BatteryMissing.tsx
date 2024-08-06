import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const BatteryMissing = (
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
      d="M8.152 4.008a2.95 2.95 0 0 0-1.3.222A3 3 0 0 0 5 7h2c0-.406.242-.766.617-.922s.801-.074 1.09.215A1 1 0 0 1 8 8c-.55 0-1 .45-1 1v2h2V9.82a2.99 2.99 0 0 0 1.77-1.672 3 3 0 0 0-.649-3.27 3 3 0 0 0-1.969-.87M8 12a1 1 0 1 0-.001 2.001A1 1 0 0 0 8 12m0 0"
    />
    <path
      fill="currentColor"
      fillOpacity={0.349}
      d="M7 0C6 0 6 1 6 1v1H5s-.707-.016-1.45.355C2.814 2.727 2 3.668 2 5v8s-.016.707.355 1.45C2.727 15.187 3.668 16 5 16h6s.707.016 1.45-.355C13.187 15.273 14 14.332 14 13V5c0-1.332-.812-2.273-1.55-2.645C11.706 1.985 11 2 11 2h-1V1c0-1-1-1-1-1zm0 3h2v.125c.61.16 1.172.457 1.645.875H11c.555 0 1 .445 1 1v8c0 .555-.445 1-1 1H9.727A2 2 0 0 1 8 15a2 2 0 0 1-1.727-1H5c-.555 0-1-.445-1-1V5c0-.555.445-1 1-1h.355A3.95 3.95 0 0 1 7 3.137zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(BatteryMissing)
export default ForwardRef