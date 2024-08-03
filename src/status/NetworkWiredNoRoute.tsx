import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkWiredNoRoute = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M8.137 4.008a2.95 2.95 0 0 0-1.301.222A3 3 0 0 0 4.984 7h2a1 1 0 1 1 1 1c-.55 0-1 .45-1 1v2h2V9.82a3.02 3.02 0 0 0 1.774-1.672 3.01 3.01 0 0 0-.653-3.27 3 3 0 0 0-1.968-.87M7.984 12c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.449-1-1-1m0 0" />
      <path
        fillOpacity={0.349}
        d="M6 0c-.555 0-1 .445-1 1v3c0 .105.02.203.047.3a4 4 0 0 1 1.41-.987 4 4 0 0 1 1.73-.293 3.98 3.98 0 0 1 2.618 1.16q.069.071.136.148A1 1 0 0 0 11 4V1c0-.555-.445-1-1-1zm1.988 6.984s0 .004-.008.008c-.015.004-.007-.012-.007.008q-.012.011-.024.027c.012 0 .024-.015.035-.015.016 0 .004.008.008-.008.008-.016.012 0 0-.012-.008-.004-.004-.008-.004-.008M0 7v2h2v2H1c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h4c.555 0 1-.445 1-1v-1.887a.822.822 0 0 1 0-.21V12c0-.555-.445-1-1-1H4V9h1.992c0-.379.235-.695.446-1.012H4.984a.96.96 0 0 1-.699-.289A.98.98 0 0 1 3.992 7zm11.969 0c0 .516-.094 1.035-.301 1.527a3 3 0 0 1-.242.473H12v2h-1c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h4c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1h-1V9h2V7zm0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(NetworkWiredNoRoute)
export default ForwardRef