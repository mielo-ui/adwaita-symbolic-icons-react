import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ApplicationsGames = (
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
      <path d="M0 11v2.5C0 14.879 1.121 16 2.5 16H3c1.105 0 2-.895 2-2s.895-2 2-2 2 .895 2 2a2.265 2.265 0 0 0 2.5 2 2.5 2.5 0 0 0 2.5-2.5V11c0-2.21-1.79-4-4-4H4c-2.21 0-4 1.79-4 4m3.25-2h.5c.137 0 .25.113.25.25V10h.75c.137 0 .25.113.25.25v.5a.25.25 0 0 1-.25.25H4v.75a.25.25 0 0 1-.25.25h-.5c-.14 0-.25-.11-.25-.25V11h-.75c-.14 0-.25-.11-.25-.25v-.5c0-.137.11-.25.25-.25H3v-.75c0-.137.11-.25.25-.25m6.25.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2 1a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M2 3.016A3 3 0 0 0 5.016 6h7.968A3.017 3.017 0 0 0 16 2.984 3 3 0 0 0 12.984 0H5.016A3.017 3.017 0 0 0 2 3.016M5.219 1h.5c.136 0 .25.113.25.25V2h.75c.136 0 .25.113.25.25v.5a.25.25 0 0 1-.25.25h-.75v.75a.25.25 0 0 1-.25.25h-.5c-.14 0-.25-.11-.25-.25V3h-.75c-.14 0-.25-.11-.25-.25v-.5c0-.137.11-.25.25-.25h.75v-.75c0-.137.11-.25.25-.25m6.25.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2 .031a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ApplicationsGames)
export default ForwardRef