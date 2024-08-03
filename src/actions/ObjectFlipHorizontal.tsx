import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ObjectFlipHorizontal = (
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
      d="M5 3a1 1 0 0 0-.707.293l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 1 0 1.414-1.414L3.414 9h9.172l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L12.586 7H3.414l2.293-2.293A1 1 0 0 0 5 3m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ObjectFlipHorizontal)
export default ForwardRef