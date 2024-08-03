import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellularAcquiring = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.349}
      d="M13 1c-.555 0-1 .445-1 1v3h1c.77 0 1.469.29 2 .766V2c0-.555-.445-1-1-1zM9 4c-.555 0-1 .445-1 1h3c0-.555-.445-1-1-1zM.79 10.023A1 1 0 0 0 0 11v3c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-3a2.99 2.99 0 0 1-2.21-.977m14.21.211A2.98 2.98 0 0 1 13 11h-1v3c0 .555.445 1 1 1h1c.555 0 1-.445 1-1zM4 11v3c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-3zm4 0v3c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-3zm0 0"
    />
    <path
      fill="currentColor"
      d="M3 6a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkCellularAcquiring)
export default ForwardRef