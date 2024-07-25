import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const GoLastRtl = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 0c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1m7.844 1.012a.97.97 0 0 0-.551.281l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 1 0 1.414-1.414L7.414 8l5.293-5.293a1 1 0 0 0-.863-1.695m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(GoLastRtl)
export default ForwardRef