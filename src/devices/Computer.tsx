import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const Computer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M3 0C1.34 0 0 1.34 0 3v7c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm0 2h10c.555 0 1 .445 1 1v7c0 .555-.445 1-1 1H3c-.555 0-1-.445-1-1V3c0-.555.445-1 1-1m2 12c-1.105 0-2 .895-2 2h10c0-1.105-.895-2-2-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(Computer)
export default ForwardRef