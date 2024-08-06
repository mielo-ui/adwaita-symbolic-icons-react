import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const GoUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M1 11a1 1 0 0 1 .293-.707l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 1 1-1.414 1.414L8 6.414l-5.293 5.293A1 1 0 0 1 1 11m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(GoUp)
export default ForwardRef