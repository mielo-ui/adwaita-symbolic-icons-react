import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ValueDecrease = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path fill="currentColor" d="M3 7h10v2H3zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(ValueDecrease)
export default ForwardRef