import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkWirelessHardwareDisabled = (
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
      d="M8 1.992c-2.617 0-5.238.934-7.195 2.809L.598 5H3.94c2.48-1.293 5.641-1.293 8.121 0h3.34l-.207-.2C13.238 2.927 10.617 1.993 8 1.993M6.27 11a1.999 1.999 0 1 0 3.46 0zm0 0"
    />
    <path fill="currentColor" d="M0 6h16v4H0zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(NetworkWirelessHardwareDisabled)
export default ForwardRef