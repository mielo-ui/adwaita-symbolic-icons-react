import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const InsertObject = (
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
      <path d="M5 12v1h.008a1 1 0 0 0 .285.707l2 2a1 1 0 0 0 1.414 0l2-2c.184-.187.29-.441.29-.707H11v-1zM8-.008l-5 3.14v4.716l5 3.144 5-3.144V3.133zm0 6L4.355 3.816 8 1.523l3.645 2.293zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(InsertObject)
export default ForwardRef