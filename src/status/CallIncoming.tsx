import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const CallIncoming = (
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
      <path d="M5.004 2c.555 0 1 .445 1 1v3c0 .555-.445 1-1 1h-.711a6.98 6.98 0 0 0 4.71 4.71V11a1 1 0 0 1 1-1h3c.556 0 1 .445 1 1v1.5a2.5 2.5 0 0 1-2.5 2.5h-.5c-5.503 0-10-4.496-10-10v-.5c0-1.379 1.122-2.5 2.5-2.5zm0 0" />
      <path d="M9 1c-.55 0-1 .45-1 1v6h6c.55 0 1-.45 1-1s-.45-1-1-1h-2.586l4.293-4.293A1 1 0 1 0 14.293.293L10 4.586V2c0-.55-.45-1-1-1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(CallIncoming)
export default ForwardRef