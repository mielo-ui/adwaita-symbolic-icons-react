import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const CallOutgoing = (
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
      <path d="M5.004 2c.555 0 1 .445 1 1v3c0 .555-.445 1-1 1h-.711a6.98 6.98 0 0 0 4.71 4.71V11a1 1 0 0 1 1-1h3c.556 0 1 .445 1 1v1.5a2.5 2.5 0 0 1-2.5 2.5h-.5c-5.503 0-10-4.496-10-10v-.5c0-1.379 1.122-2.5 2.5-2.5zm0 0" />
      <path d="M15 7c.55 0 1-.45 1-1V0h-6c-.55 0-1 .45-1 1s.45 1 1 1h2.586L8.293 6.293a1 1 0 1 0 1.414 1.414L14 3.414V6c0 .55.45 1 1 1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(CallOutgoing)
export default ForwardRef