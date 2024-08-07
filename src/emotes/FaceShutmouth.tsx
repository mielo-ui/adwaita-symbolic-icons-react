import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceShutmouth = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6 5c.558 0 1.031.473 1.031 1.031V7c0 .558-.473 1-1.031 1s-1-.442-1-1v-.969C5 5.473 5.442 5 6 5m4 0c.558 0 1 .473 1 1.031V7c0 .558-.442 1-1 1s-1-.442-1-1v-.969C9 5.473 9.442 5 10 5M4 9l4 1 4-1c.083.59-.16 1.054-.671 1.168L10 10.5l1.309.327c.715.192.691.75.691 1.173l-4-1-4 1c-.065-.631.037-.983.52-1.13L6 10.5l-1.504-.335C4.02 10.037 3.916 9.484 4 9"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceShutmouth)
export default ForwardRef