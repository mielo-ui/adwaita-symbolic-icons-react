import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const OpenMenu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M1 2h14v2H1zM1 7h14v2H1zM1 12h14v2H1zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(OpenMenu)
export default ForwardRef