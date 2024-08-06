import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ObjectRotateRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      d="M7.086 2A7.01 7.01 0 0 1 14 9h2v1h-.008a1 1 0 0 1-.285.707l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.29-.707H10V9h2a4.995 4.995 0 0 0-3.707-4.832A5 5 0 0 0 2.668 6.5a4.99 4.99 0 0 0 .797 6.035A1 1 0 1 1 2.05 13.95 7.006 7.006 0 0 1 .937 5.5a7 7 0 0 1 5.579-3.48q.282-.025.57-.02m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ObjectRotateRight)
export default ForwardRef