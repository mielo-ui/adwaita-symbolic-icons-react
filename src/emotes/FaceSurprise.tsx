import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceSurprise = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6 5c.558 0 1.031.473 1.031 1.031V7c0 .558-.473 1-1.031 1s-1-.442-1-1v-.969C5 5.473 5.442 5 6 5m4 0c.558 0 1 .473 1 1.031V7c0 .558-.442 1-1 1s-1-.442-1-1v-.969C9 5.473 9.442 5 10 5M8 9.594c1.06 0 1.93.92 1.938 2.031 0 1.116-.873 2.031-1.938 2.031s-1.937-.915-1.937-2.031S6.935 9.594 8 9.594"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceSurprise)
export default ForwardRef