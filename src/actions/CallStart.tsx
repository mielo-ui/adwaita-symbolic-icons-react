import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const CallStart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.996 2c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h.711a6.98 6.98 0 0 1-4.71 4.71V11a1 1 0 0 0-1-1h-3c-.556 0-1 .445-1 1v1.5a2.5 2.5 0 0 0 2.5 2.5h.5c5.503 0 10-4.496 10-10v-.5c0-1.379-1.122-2.5-2.5-2.5zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(CallStart)
export default ForwardRef