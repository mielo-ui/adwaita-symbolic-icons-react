import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SoftwareUpdateAvailable = (
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
      d="M8 0a1 1 0 0 0-.707.293L5.586 2H3c-.55 0-1 .45-1 1v2.586L.293 7.293a1 1 0 0 0 0 1.414L2 10.414V13c0 .55.45 1 1 1h2.586l1.707 1.707a1 1 0 0 0 1.414 0L10.414 14H13c.55 0 1-.45 1-1v-2.586l1.707-1.707a1 1 0 0 0 0-1.414L14 5.586V3c0-.55-.45-1-1-1h-2.586L8.707.293A1 1 0 0 0 8 0m0 5c.258 0 .512.098.707.293l2 2c.184.187.29.441.285.707H11v1H9v2H7V9H5V8h.008a1 1 0 0 1 .285-.707l2-2A1 1 0 0 1 8 5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SoftwareUpdateAvailable)
export default ForwardRef