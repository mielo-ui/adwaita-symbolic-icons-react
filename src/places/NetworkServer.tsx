import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkServer = (
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
    <g fill="">
      <path d="M7.996 12a2 2 0 0 0-1.715.973H2.996a1 1 0 1 0 0 2h3.246a2.01 2.01 0 0 0 1.754 1.039 2.01 2.01 0 0 0 1.75-1.04h3.262c.55 0 1-.449 1-1s-.45-1-1-1H9.715A2.01 2.01 0 0 0 7.996 12m0 1C8.551 13 9 13.45 9 14.008c0 .555-.45 1.004-1.004 1.004a1.005 1.005 0 1 1 0-2.012m0 0" />
      <path d="M6.992 10H9v3H6.992zm0 0" />
      <path d="M11.992 2C13.105 2 14 2.895 14 4.008V6.98c0 1.11-.895 2.004-2.008 2.004H4.008A2 2 0 0 1 2 6.98V4.008C2 2.895 2.895 2 4.008 2zM0 4.008V6.98a4 4 0 0 0 4.008 4.004h7.984A4 4 0 0 0 16 6.98V4.008A4 4 0 0 0 11.992 0H4.008A4 4 0 0 0 0 4.008m0 0" />
      <path d="M5 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M8 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(NetworkServer)
export default ForwardRef