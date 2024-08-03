import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const Scanner = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M4 0C2.668 0 1.727.813 1.355 1.55.985 2.294 1 3 1 3v3h2V3c0-.555.445-1 1-1h8c.555 0 1 .445 1 1v3h2V3c0-1.332-.812-2.273-1.55-2.645C12.706-.015 12 0 12 0zM0 7v2h16V7zm1 3v3s-.016.707.355 1.45C1.727 15.187 2.668 16 4 16h8c1.332 0 2.273-.812 2.645-1.55.37-.743.355-1.45.355-1.45v-3h-2v3c0 .555-.445 1-1 1H4c-.555 0-1-.445-1-1v-3zm0 0" />
      <path fillOpacity={0.349} d="M4 6h8V4L4 3zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(Scanner)
export default ForwardRef