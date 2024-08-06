import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ErrorCorrect = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M13.55 4c-.488.004-.987.195-1.429.637l-7.625 7.625A1.7 1.7 0 0 0 4 13.46V16h2.54a1.7 1.7 0 0 0 1.198-.496l7.625-7.625c1.516-1.512.067-3.715-1.601-3.871C13.692 4 13.622 4 13.55 4m-1.503 3.055.898.898-5.98 5.98-.899-.898zM5 1s-.707-.016-1.45.355C2.814 1.727 2 2.668 2 4v2H0v1h.008a1 1 0 0 0 .285.707l2 2a1 1 0 0 0 1.414 0l2-2c.184-.187.29-.441.29-.707H6V6H4V4c.105-.8.5-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ErrorCorrect)
export default ForwardRef