import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkWirelessHotspot = (
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
    <path
      fill=""
      d="M3 1C1.355 1 0 2.355 0 4v4c0 1.645 1.355 3 3 3h1v1c0 1.645 1.355 3 3 3h6c1.645 0 3-1.355 3-3V8c0-1.645-1.355-3-3-3h-1V4c0-1.645-1.355-3-3-3zm0 2h6c.57 0 1 .43 1 1v4c0 .57-.43 1-1 1H8c-.55 0-1 .45-1 1s.45 1 1 1h1c1.645 0 3-1.355 3-3V7h1c.57 0 1 .43 1 1v4c0 .57-.43 1-1 1H7c-.57 0-1-.43-1-1V8c0-.57.43-1 1-1h1c.55 0 1-.45 1-1s-.45-1-1-1H7C5.355 5 4 6.355 4 8v1H3c-.57 0-1-.43-1-1V4c0-.57.43-1 1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkWirelessHotspot)
export default ForwardRef