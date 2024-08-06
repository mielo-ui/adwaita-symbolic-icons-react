import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const GoJumpRtl = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 0c2.754 0 5 2.246 5 5v10c0 .55-.45 1-1 1s-1-.45-1-1V5c0-1.68-1.32-3-3-3S5 3.32 5 5v3.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L3 8.586V5c0-2.754 2.246-5 5-5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(GoJumpRtl)
export default ForwardRef