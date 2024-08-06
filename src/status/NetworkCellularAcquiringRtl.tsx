import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellularAcquiringRtl = (
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
      fillOpacity={0.349}
      d="M3 1c.555 0 1 .445 1 1v3H3c-.77 0-1.469.29-2 .766V2c0-.555.445-1 1-1zm4 3c.555 0 1 .445 1 1H5c0-.555.445-1 1-1zm8.21 6.023c.454.098.79.497.79.977v3c0 .555-.445 1-1 1h-1c-.555 0-1-.445-1-1v-3c.879 0 1.664-.379 2.21-.977M1 10.234c.531.477 1.23.766 2 .766h1v3c0 .555-.445 1-1 1H2c-.555 0-1-.445-1-1zM12 11v3c0 .555-.445 1-1 1h-1c-.555 0-1-.445-1-1v-3zm-4 0v3c0 .555-.445 1-1 1H6c-.555 0-1-.445-1-1v-3zm0 0"
    />
    <path
      fill="currentColor"
      d="M3 6a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkCellularAcquiringRtl)
export default ForwardRef