import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SoftwareUpdateUrgent = (
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
      fill="#ff7800"
      d="M8 0a1 1 0 0 0-.707.293L5.586 2H3c-.55 0-1 .45-1 1v2.586L.293 7.293a1 1 0 0 0 0 1.414L2 10.414V13c0 .55.45 1 1 1h2.586l1.707 1.707a1 1 0 0 0 1.414 0L10.414 14H13c.55 0 1-.45 1-1v-2.586l1.707-1.707a1 1 0 0 0 0-1.414L14 5.586V3c0-.55-.45-1-1-1h-2.586L8.707.293A1 1 0 0 0 8 0M7 4h2v5H7zm1 5.75c.688 0 1.25.563 1.25 1.25S8.688 12.25 8 12.25 6.75 11.688 6.75 11 7.313 9.75 8 9.75m0 0"
      className="prefix__warning"
    />
  </svg>
)
const ForwardRef = forwardRef(SoftwareUpdateUrgent)
export default ForwardRef