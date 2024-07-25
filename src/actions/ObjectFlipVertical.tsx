import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ObjectFlipVertical = (
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
      d="M13 5a1 1 0 0 0-.293-.707l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L7 3.414v9.172l-2.293-2.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L9 12.586V3.414l2.293 2.293A1 1 0 0 0 13 5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ObjectFlipVertical)
export default ForwardRef