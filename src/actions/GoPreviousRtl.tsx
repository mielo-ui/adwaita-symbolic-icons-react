import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const GoPreviousRtl = (
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
    <path
      fill=""
      d="M4 2a1 1 0 0 1 1.707-.707l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L9.586 8 4.293 2.707A1 1 0 0 1 4 2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(GoPreviousRtl)
export default ForwardRef