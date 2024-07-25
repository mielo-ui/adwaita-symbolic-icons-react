import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellularNoRouteRtl = (
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
      fillOpacity={0.349}
      d="M3 1c.555 0 1 .445 1 1v12c0 .555-.445 1-1 1H2c-.555 0-1-.445-1-1V2c0-.555.445-1 1-1zm8.75 6.348c.152.175.25.402.25.652v6c0 .555-.445 1-1 1h-1c-.555 0-1-.445-1-1v-.281A2 2 0 0 0 10 12V9.453a4 4 0 0 0 1.75-2.105M5 8.625c.285.328.625.61 1 .828V12c0 1.105.895 2 2 2 0 .555-.445 1-1 1H6c-.555 0-1-.445-1-1zM15 10c.555 0 1 .445 1 1v3c0 .555-.445 1-1 1h-1c-.555 0-1-.445-1-1v-3c0-.555.445-1 1-1zm0 0"
    />
    <path
      fill=""
      d="M8.152 3.008a2.95 2.95 0 0 0-1.3.222A3 3 0 0 0 5 6h2a1 1 0 0 1 1.707-.707c.29.289.375.715.219 1.09S8.41 7 8 7c-.55 0-1 .45-1 1v2h2V8.82a3 3 0 0 0 1.773-1.672 3.01 3.01 0 0 0-.652-3.27 2.98 2.98 0 0 0-1.969-.87M8 11c-.55 0-1 .45-1 1s.45 1 1 1a1 1 0 1 0 0-2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkCellularNoRouteRtl)
export default ForwardRef