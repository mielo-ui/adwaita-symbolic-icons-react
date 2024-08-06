import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkWiredDisconnected = (
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
      <path d="M15 10a1 1 0 0 1 .707 1.707L14.414 13l1.293 1.293a1 1 0 1 1-1.414 1.414L13 14.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L11.586 13l-1.293-1.293a1 1 0 1 1 1.414-1.414L13 11.586l1.293-1.293A1 1 0 0 1 15 10m0 0" />
      <path
        fillOpacity={0.349}
        d="M6 0c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h1v2H0v2h2v2H1c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h4c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1H4V9h12V7H9V5h1c.555 0 1-.445 1-1V1c0-.555-.445-1-1-1zm0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(NetworkWiredDisconnected)
export default ForwardRef