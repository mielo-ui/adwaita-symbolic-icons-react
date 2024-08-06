import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ObjectRotateLeft = (
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
    <path
      fill="currentColor"
      d="M8.914 2A7.01 7.01 0 0 0 2 9H0v1h.008a1 1 0 0 0 .285.707l2 2a1 1 0 0 0 1.414 0l2-2c.184-.187.29-.441.29-.707H6V9H4a4.995 4.995 0 0 1 3.707-4.832A5 5 0 0 1 13.332 6.5a4.99 4.99 0 0 1-.797 6.035 1 1 0 1 0 1.414 1.414A7.006 7.006 0 0 0 15.062 5.5a7 7 0 0 0-5.578-3.48 6 6 0 0 0-.57-.02m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ObjectRotateLeft)
export default ForwardRef