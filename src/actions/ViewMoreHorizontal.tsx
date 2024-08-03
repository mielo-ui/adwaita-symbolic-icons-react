import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewMoreHorizontal = (
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
      d="M2 6.008a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4m6 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4m6 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ViewMoreHorizontal)
export default ForwardRef