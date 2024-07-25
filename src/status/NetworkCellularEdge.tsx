import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellularEdge = (
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
      d="M3 0C1.34 0 0 1.34 0 3v10c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm3 3h6v2H6v2h4v2H6v2h6v2H6c-.625 0-.992-.242-1.344-.562-.332-.305-.644-.79-.625-1.438H4V5h.031c-.011-.477.11-1 .469-1.406.355-.403.934-.582 1.5-.563zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkCellularEdge)
export default ForwardRef