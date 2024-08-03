import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewRefresh = (
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
      d="M7.406 1a7.5 7.5 0 0 0-1.847.254C2.285 2.133 0 5.109 0 8.5s2.285 6.367 5.559 7.242a7.51 7.51 0 0 0 8.437-3.492c.277-.48.11-1.09-.367-1.367a1.006 1.006 0 0 0-1.367.367 5.49 5.49 0 0 1-6.188 2.562A5.494 5.494 0 0 1 2 8.5a5.49 5.49 0 0 1 4.074-5.313 5.49 5.49 0 0 1 6.188 2.563q.087.13.203.227l-.02.015-.008.008H11c-.55 0-1 .45-1 1 0 0 0 1 1 1h5V3s.004-1-1-1c-.55 0-1 .45-1 1v1.687l-.016.012-.011.012A7.51 7.51 0 0 0 7.406 1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ViewRefresh)
export default ForwardRef