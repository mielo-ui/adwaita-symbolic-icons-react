import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const GoNextRtl = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 2a1 1 0 0 0-1.707-.707l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 1 0 1.414-1.414L6.414 8l5.293-5.293A1 1 0 0 0 12 2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(GoNextRtl)
export default ForwardRef