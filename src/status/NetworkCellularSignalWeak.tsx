import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellularSignalWeak = (
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
    <g fill="currentColor">
      <path d="M1 10c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1zm0 0" />
      <path
        fillOpacity={0.349}
        d="M13 1c-.555 0-1 .445-1 1v12c0 .555.445 1 1 1h1c.555 0 1-.445 1-1V2c0-.555-.445-1-1-1zM9 4c-.555 0-1 .445-1 1v9c0 .555.445 1 1 1h1c.555 0 1-.445 1-1V5c0-.555-.445-1-1-1zM5 7c-.555 0-1 .445-1 1v6c0 .555.445 1 1 1h1c.555 0 1-.445 1-1V8c0-.555-.445-1-1-1zm0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(NetworkCellularSignalWeak)
export default ForwardRef