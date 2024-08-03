import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const GoDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M1 5a1 1 0 0 1 1.707-.707L8 9.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6A1 1 0 0 1 1 5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(GoDown)
export default ForwardRef