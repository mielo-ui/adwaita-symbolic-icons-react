import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellularHardwareDisabled = (
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
      d="M13 1c-.555 0-1 .445-1 1v3h3V2c0-.555-.445-1-1-1zM9 4c-.555 0-1 .445-1 1h3c0-.555-.445-1-1-1zm-9 7v3c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-3zm4 0v3c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-3zm4 0v3c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-3zm4 0v3c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-3zm0 0"
    />
    <path fill="currentColor" d="M0 6h16v4H0zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(NetworkCellularHardwareDisabled)
export default ForwardRef