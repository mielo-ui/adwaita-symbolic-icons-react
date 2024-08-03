import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkWirelessAcquiring = (
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
      d="M8 1.992c-2.617 0-5.238.934-7.195 2.809l-.496.48a1 1 0 0 0-.032 1.41q.007.011.02.016A2.98 2.98 0 0 1 3 5h.937c2.481-1.293 5.645-1.293 8.125 0H13c1.2 0 2.223.695 2.707 1.707.004-.008.012-.012.016-.016a1 1 0 0 0-.032-1.41l-.496-.48C13.238 2.926 10.617 1.992 8 1.992M6.27 11a1.999 1.999 0 1 0 3.46 0zm0 0"
    />
    <path
      fill="currentColor"
      d="M3 6a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m5 0a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkWirelessAcquiring)
export default ForwardRef