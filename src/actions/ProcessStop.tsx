import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ProcessStop = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M3 2a1 1 0 0 0-.707 1.707L6.586 8l-4.293 4.293a1 1 0 1 0 1.414 1.414L8 9.414l4.293 4.293a1 1 0 1 0 1.414-1.414L9.414 8l4.293-4.293a1 1 0 1 0-1.414-1.414L8 6.586 3.707 2.293A1 1 0 0 0 3 2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ProcessStop)
export default ForwardRef