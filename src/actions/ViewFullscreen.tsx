import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewFullscreen = (
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
      <path d="M1 9c-.55 0-1 .45-1 1v6h6c.55 0 1-.45 1-1s-.45-1-1-1H3.414l3.293-3.293a1 1 0 1 0-1.414-1.414L2 12.586V10c0-.55-.45-1-1-1M15 7c.55 0 1-.45 1-1V0h-6c-.55 0-1 .45-1 1s.45 1 1 1h2.586L9.293 5.293a1 1 0 1 0 1.414 1.414L14 3.414V6c0 .55.45 1 1 1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ViewFullscreen)
export default ForwardRef