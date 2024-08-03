import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellularNoRoute = (
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
      d="M13 1c-.555 0-1 .445-1 1v12c0 .555.445 1 1 1h1c.555 0 1-.445 1-1V2c0-.555-.445-1-1-1zM4.25 7.348A1 1 0 0 0 4 8v6c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-.281A2 2 0 0 1 6 12V9.453a4 4 0 0 1-1.75-2.105M11 8.625c-.285.328-.625.61-1 .828V12c0 1.105-.895 2-2 2 0 .555.445 1 1 1h1c.555 0 1-.445 1-1zM1 10c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1zm0 0"
    />
    <path
      fill="currentColor"
      d="M8.152 3.008a2.95 2.95 0 0 0-1.3.222A3 3 0 0 0 5 6h2a1 1 0 1 1 1 1c-.55 0-1 .45-1 1v2h2V8.82a3 3 0 0 0 1.77-1.672 3 3 0 0 0-.649-3.27 3 3 0 0 0-1.969-.87M8 11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkCellularNoRoute)
export default ForwardRef