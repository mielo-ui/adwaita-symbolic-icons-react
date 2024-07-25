import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EditDelete = (
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
      d="M8 0C3.59 0 0 3.59 0 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m0 2c3.332 0 6 2.668 6 6s-2.668 6-6 6-6-2.668-6-6 2.668-6 6-6M5.969 4.969a1 1 0 0 0-.707 1.707l1.293 1.293-1.293 1.293a1 1 0 1 0 1.414 1.414l1.293-1.293 1.293 1.293a1 1 0 1 0 1.414-1.414L9.383 7.969l1.293-1.293a1 1 0 1 0-1.414-1.414L7.969 6.555 6.676 5.262a1 1 0 0 0-.707-.293m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EditDelete)
export default ForwardRef