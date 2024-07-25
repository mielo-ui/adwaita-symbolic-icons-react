import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ValueIncrease = (
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
    <path fill="" d="M7 3v4H3v2h4v4h2V9h4V7H9V3zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(ValueIncrease)
export default ForwardRef