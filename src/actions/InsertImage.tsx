import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const InsertImage = (
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
      <path d="M4 0S2 0 2 1.992V8s0 2 2 1.992h8C14 10 14 8 14 8V1.992C14 0 12 0 12 0zm0 1.992h8v6H4zM9.125 3.95l-1.5 1.5L6.5 4.7 5 6.2V7h6V5.824zM5 12v1h.008a1 1 0 0 0 .285.707l2 2a1 1 0 0 0 1.414 0l2-2c.184-.187.29-.441.29-.707H11v-1zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(InsertImage)
export default ForwardRef