import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const UserStatusPending = (
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
      <path d="M3 6a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m0 0" />
      <path
        fillOpacity={0.349}
        d="M3 1C1.355 1 0 2.355 0 4v1h16V4c0-1.645-1.355-3-3-3zM.176 11C.594 12.16 1.707 13 3 13h1v3l3-3h6c1.293 0 2.406-.84 2.824-2zm0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(UserStatusPending)
export default ForwardRef