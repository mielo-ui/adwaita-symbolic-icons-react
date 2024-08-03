import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkWirelessConnected = (
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
      d="M8 1.992c-2.617 0-5.238.934-7.195 2.809l-.496.48a1 1 0 0 0-.032 1.41l.016.016L3.156 9.57a1.001 1.001 0 0 0 1.586.137l.496-.547c1.278-1.402 4.16-1.496 5.524 0l.5.547a1 1 0 0 0 1.414.07c.066-.062.117-.129.164-.203l2.867-2.867.016-.016a1 1 0 0 0-.032-1.41l-.496-.48C13.238 2.926 10.617 1.992 8 1.992m0 2.04c2.023 0 4.043.663 5.563 1.991l-1.551 1.551C10.906 6.504 9.43 5.988 7.969 6s-2.914.547-3.977 1.578L2.437 6.023C3.957 4.695 5.977 4.031 8 4.031M8 10a2 2 0 1 0-.001 4A2 2 0 0 0 8 10m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkWirelessConnected)
export default ForwardRef