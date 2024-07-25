import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkWiredAcquiring = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="">
      <path d="M3 6a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m0 0" />
      <path
        fillOpacity={0.349}
        d="M6 0c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h4c.555 0 1-.445 1-1V1c0-.555-.445-1-1-1zM2 10.824V11H1c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h4c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1H3c-.352 0-.687-.062-1-.176m12 0A2.9 2.9 0 0 1 13 11h-2c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h4c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1h-1zm0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(NetworkWiredAcquiring)
export default ForwardRef