import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const GoTop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M1 3c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm6.844 2.012a.97.97 0 0 0-.551.281l-6 6a1 1 0 1 0 1.414 1.414L8 7.414l5.293 5.293a1 1 0 1 0 1.414-1.414l-6-6a1 1 0 0 0-.863-.281m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(GoTop)
export default ForwardRef